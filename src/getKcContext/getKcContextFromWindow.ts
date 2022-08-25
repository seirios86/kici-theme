import type { KcContextBase } from "./KcContextBase";
import type { AndByDiscriminatingKey } from "../tools/AndByDiscriminatingKey";
import { ftlValuesGlobalName } from "build-keycloak-theme/ftlValuesGlobalName";

export type ExtendsKcContextBase<KcContextExtended extends { pageId: string }> = [KcContextExtended] extends [never]
    ? KcContextBase
    : AndByDiscriminatingKey<"pageId", KcContextExtended & KcContextBase.Common, KcContextBase>;

export function getKcContextFromWindow<KcContextExtended extends { pageId: string } = never>(): ExtendsKcContextBase<KcContextExtended> | undefined {
    return typeof window === "undefined" ? undefined : (window as any)[ftlValuesGlobalName];
}
