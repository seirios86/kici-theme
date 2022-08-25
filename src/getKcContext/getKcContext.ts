import type { KcContextBase, Attribute } from "./KcContextBase";
import { kcContextMocks, kcContextCommonMock } from "./kcContextMocks";
import type { DeepPartial } from "../tools/DeepPartial";
import { deepAssign } from "../tools/deepAssign";
import { id } from "tsafe/id";
import { exclude } from "tsafe/exclude";
import { assert } from "tsafe/assert";
import type { ExtendsKcContextBase } from "./getKcContextFromWindow";
import { getKcContextFromWindow } from "./getKcContextFromWindow";
import { pathJoin } from "../tools/pathJoin";
import { pathBasename } from "../tools/pathBasename";
import { resourcesCommonPath } from "./kcContextMocks/urlResourcesPath";

export function getKcContext<KcContextExtended extends { pageId: string } = never>(params?: {
    mockPageId?: ExtendsKcContextBase<KcContextExtended>["pageId"];
    mockData?: readonly DeepPartial<ExtendsKcContextBase<KcContextExtended>>[];
}): { kcContext: ExtendsKcContextBase<KcContextExtended> | undefined } {
    const { mockPageId, mockData } = params ?? {};

    if (mockPageId !== undefined) {
        //TODO maybe trow if no mock fo custom page

        const kcContextDefaultMock = kcContextMocks.find(({ pageId }) => pageId === mockPageId);

        const partialKcContextCustomMock = mockData?.find(({ pageId }) => pageId === mockPageId);

        if (kcContextDefaultMock === undefined && partialKcContextCustomMock === undefined) {
            console.warn(
                [
                    `WARNING: You declared the non build in page ${mockPageId} but you didn't `,
                    `provide mock data needed to debug the page outside of Keycloak as you are trying to do now.`,
                    `Please check the documentation of the getKcContext function`,
                ].join("\n"),
            );
        }

        const kcContext: any = {};

        deepAssign({
            "target": kcContext,
            "source": kcContextDefaultMock !== undefined ? kcContextDefaultMock : { "pageId": mockPageId, ...kcContextCommonMock },
        });

        if (partialKcContextCustomMock !== undefined) {
            deepAssign({
                "target": kcContext,
                "source": partialKcContextCustomMock,
            });

            if (partialKcContextCustomMock.pageId === "register-user-profile.ftl") {
                assert(kcContextDefaultMock?.pageId === "register-user-profile.ftl");

                const { attributes } = kcContextDefaultMock.profile;

                id<KcContextBase.RegisterUserProfile>(kcContext).profile.attributes = [];
                id<KcContextBase.RegisterUserProfile>(kcContext).profile.attributesByName = {};

                const partialAttributes = [
                    ...((partialKcContextCustomMock as DeepPartial<KcContextBase.RegisterUserProfile>).profile?.attributes ?? []),
                ].filter(exclude(undefined));

                attributes.forEach(attribute => {
                    const partialAttribute = partialAttributes.find(({ name }) => name === attribute.name);

                    const augmentedAttribute: Attribute = {} as any;

                    deepAssign({
                        "target": augmentedAttribute,
                        "source": attribute,
                    });

                    if (partialAttribute !== undefined) {
                        partialAttributes.splice(partialAttributes.indexOf(partialAttribute), 1);

                        deepAssign({
                            "target": augmentedAttribute,
                            "source": partialAttribute,
                        });
                    }

                    id<KcContextBase.RegisterUserProfile>(kcContext).profile.attributes.push(augmentedAttribute);
                    id<KcContextBase.RegisterUserProfile>(kcContext).profile.attributesByName[augmentedAttribute.name] = augmentedAttribute;
                });

                partialAttributes.forEach(partialAttribute => {
                    const { name } = partialAttribute;

                    assert(name !== undefined, "If you define a mock attribute it must have at least a name");

                    id<KcContextBase.RegisterUserProfile>(kcContext).profile.attributes.push(partialAttribute as any);
                    id<KcContextBase.RegisterUserProfile>(kcContext).profile.attributesByName[name] = partialAttribute as any;
                });
            }
        }

        return { kcContext };
    }

    const kcContext = getKcContextFromWindow<KcContextExtended>();

    if (kcContext !== undefined) {
        const { url } = kcContext;

        url.resourcesCommonPath = pathJoin(url.resourcesPath, pathBasename(resourcesCommonPath));
    }

    return { kcContext };
}
