import { memo } from "react";
import type { KcContext } from "./kcContext";
import { defaultKcProps } from "keycloakify";
import { Login } from "./Login";
import { LoginResetPassword } from "./LoginResetPassword";
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
            ...defaultKcProps.kcHtmlClass, classes.kcHtmlClass
        ],
        "kcFormCardClass": [
            ...defaultKcProps.kcFormCardClass, classes.kcFormCardClass
        ],
        "kcFormHeaderClass": [
            ...defaultKcProps.kcFormHeaderClass, classes.kcFormHeaderClass
        ],
        "kcButtonPrimaryClass": [
            ...defaultKcProps.kcButtonPrimaryClass, classes.kcButtonPrimaryClass,
        ],
        "kcLoginClass": [
            ...defaultKcProps.kcLoginClass, classes.kcLoginClass,
        ],
    };

    switch (kcContext.pageId) {
        case "login.ftl": return <Login {...{ kcContext, ...kcProps }} />;
        case "login-reset-password.ftl": return <LoginResetPassword {...{ kcContext, ...kcProps }} />;
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
        "background": `#fff`,
        "body": {
            "background": `no-repeat center center fixed`,
            "color": `#222`,
        },
        "#kc-header-wrapper": {
            "span": {
                "display": `none`,
            }
        }
    },
    "kcFormCardClass": {
        "border": `1px solid rgba(0,0,0,0.1)`,
        "borderRadius": `8px`,
        ".kc-feedback-text": {
            "color": `#222`,
            "fontSize": `14px`,
        },
        ".control-label": {
            "fontSize": `14px`,
            "fontWeight": 500,
        },
        ".checkbox label": {
            "color": "#637282",
        },
        "a": {
            "color": "#637282",
            ":hover" : {
                "color": "#637282",
            },
        }
    },
    "kcFormHeaderClass": {
        "#kc-page-title": {
            "fontSize": `24px`,
            "fontWeight": 500,
        },
        "#kc-current-locale-link": {
            "color": `#222`,
        },
    },
    "kcButtonPrimaryClass": {
        "backgroundImage": `none`,
        "border": `none`,
        "box-shadow": `none`,
        "color": theme.primaryButtonTextColor,
        "backgroundColor": theme.primaryButtonColor,
        ":hover": {
            "backgroundColor": theme.primaryButtonHoverColor,
            "color": `#222222`,
        },
        "borderRadius": `4px`,
        "height": `48px`,
        "fontSize": `16px`,
        "fontWeight": 500,
    },
    "kcLoginClass": {
        ".form-control": {
            "borderRadius": `4px`,
            "height": `48px`,
            "fontSize": `16px`,
            "padding": `16px`,
            "backgroundColor": `#F8F9FB`,
            "borderColor": `#D6DBE4`,
            "color": `#222222`,
            "box-shadow": `none`,
            ":focus": {
                "backgroundColor": `#FFFFFF`,
                "borderColor": `#194BDC`,
            },
            "::placeholder": {
                "fontStyle": `normal`,
                "color": `#222 0.5`,
            }
        }
    },
}));