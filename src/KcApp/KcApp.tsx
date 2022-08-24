import { memo } from "react";
import type { KcContext } from "./kcContext";
import { defaultKcProps } from "keycloakify";
import { Login } from "./Login";
import { Register } from "./Register";
import { Info } from "keycloakify/lib/components/Info";
import { Error } from "keycloakify/lib/components/Error";
import { Terms } from "./Terms";
import { MyExtraPage1 } from "./MyExtraPage1";
import { MyExtraPage2 } from "./MyExtraPage2";
import { KcApp as KcAppBase } from "keycloakify/lib/components/KcApp";
import "./kcMessagesExtension";
import { makeStyles } from "./makeStyles";

export const KcApp = memo(({ kcContext }: { kcContext: KcContext; }) => {

    const { classes } = useStyles();

    const kcProps = {
        ...defaultKcProps,
        "kcHtmlClass": [
            ...defaultKcProps.kcHtmlClass,
            classes.kcHtmlClass
        ],
        "kcFormCardClass": [
            ...defaultKcProps.kcFormCardClass,
            classes.kcFormCardClass
        ],
        "kcFormHeaderClass": [
            ...defaultKcProps.kcFormHeaderClass,
            classes.kcFormHeaderClass
        ],
        "kcButtonPrimaryClass": [
            // ...defaultKcProps.kcButtonPrimaryClass,
            classes.kcButtonPrimaryClass,
        ],
        "kcLoginClass": [
            ...defaultKcProps.kcLoginClass,
            classes.kcLoginClass,
        ],
    };

    switch (kcContext.pageId) {
        case "login.ftl": return <Login {...{ kcContext, ...kcProps }} />;
        case "register.ftl": return <Register {...{ kcContext, ...kcProps }} />;
        case "info.ftl": return <Info {...{ kcContext, ...kcProps }} />;
        case "error.ftl": return <Error {...{ kcContext, ...kcProps }} />;
        case "terms.ftl": return <Terms {...{ kcContext, ...kcProps }} />;
        case "my-extra-page-1.ftl": return <MyExtraPage1 {...{ kcContext, ...kcProps }} />;
        case "my-extra-page-2.ftl": return <MyExtraPage2 {...{ kcContext, ...kcProps }} />;
        default: return <KcAppBase {...{ kcContext, ...kcProps }} />;
    }
});

const useStyles = makeStyles({ "name": { KcApp }})(theme => ({
    "kcHtmlClass": {
        "& body": {
            "background": `no-repeat center center fixed`,
        },
        "background": `#fff`,
        "& #kc-header": {
            "color": `#222222`,
        },
        "& #kc-header-wrapper": {
            "textTransform": "none",
        },
    },
    "kcFormCardClass": {
        "border": `1px solid rgba(0,0,0,0.1)`,
        "borderRadius": `8px`,
    },
    "kcFormHeaderClass": {
        "& #kc-page-title": {
            "fontWeight": `bold`,
        },
    },
    "kcButtonPrimaryClass": {
        "color": theme.primaryButtonTextColor,
        "backgroundColor": theme.primaryButtonColor,
        "&:hover": {
            "backgroundColor": theme.primaryButtonHoverColor
        },
        "borderRadius": `4px`,
        "height": `48px`,
        "fontSize": `16px`,
        "fontWeight": `500`,
    },
    "kcLoginClass": {
        ".form-control": {
            "borderRadius": `4px`,
            "height": `40px`,
            "fontSize": `14px`,
            "padding": `16px`,
            "backgroundColor": `#F8F9FB`,
            "borderColor": `#D6DBE4`,
            "color": `#222222`,
            "box-shadow": `none`,
            "&:focus": {
                "backgroundColor": `#FFFFFF`,
                "borderColor": `#194BDC`,
            },
            "&::placeholder": {
                "fontStyle": `normal`,
                "color": `#222 0.5`,
            }
        }
    },
}));