import { memo } from "react";
import type { KcContextBase } from "../getKcContext/KcContextBase";
import { defaultKcProps } from "./KcProps"
import { Login } from "./Login";
import { Register } from "./Register";
import { RegisterUserProfile } from "./RegisterUserProfile";
import { Info } from "./Info";
import { Error } from "./Error";
import { LoginResetPassword } from "./LoginResetPassword";
import { LoginVerifyEmail } from "./LoginVerifyEmail";
import { Terms } from "./Terms";
import { LoginOtp } from "./LoginOtp";
import { LoginUpdatePassword } from "./LoginUpdatePassword";
import { LoginUpdateProfile } from "./LoginUpdateProfile";
import { LoginIdpLinkConfirm } from "./LoginIdpLinkConfirm";
import { LoginPageExpired } from "./LoginPageExpired";
import { LoginIdpLinkEmail } from "./LoginIdpLinkEmail";
import { LoginConfigTotp } from "./LoginConfigTotp";
import { LogoutConfirm } from "./LogoutConfirm";
import { makeStyles } from "../makeStyles";

export const KcApp = memo(({ kcContext }: { kcContext: KcContextBase }) => {

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
        case "login.ftl":
            return <Login {...{ kcContext, ...kcProps }} />;
        case "register.ftl":
            return <Register {...{ kcContext, ...kcProps }} />;
        case "register-user-profile.ftl":
            return <RegisterUserProfile {...{ kcContext, ...kcProps }} />;
        case "info.ftl":
            return <Info {...{ kcContext, ...kcProps }} />;
        case "error.ftl":
            return <Error {...{ kcContext, ...kcProps }} />;
        case "login-reset-password.ftl":
            return <LoginResetPassword {...{ kcContext, ...kcProps }} />;
        case "login-verify-email.ftl":
            return <LoginVerifyEmail {...{ kcContext, ...kcProps }} />;
        case "terms.ftl":
            return <Terms {...{ kcContext, ...kcProps }} />;
        case "login-otp.ftl":
            return <LoginOtp {...{ kcContext, ...kcProps }} />;
        case "login-update-password.ftl":
            return <LoginUpdatePassword {...{ kcContext, ...kcProps }} />;
        case "login-update-profile.ftl":
            return <LoginUpdateProfile {...{ kcContext, ...kcProps }} />;
        case "login-idp-link-confirm.ftl":
            return <LoginIdpLinkConfirm {...{ kcContext, ...kcProps }} />;
        case "login-idp-link-email.ftl":
            return <LoginIdpLinkEmail {...{ kcContext, ...kcProps }} />;
        case "login-page-expired.ftl":
            return <LoginPageExpired {...{ kcContext, ...kcProps }} />;
        case "login-config-totp.ftl":
            return <LoginConfigTotp {...{ kcContext, ...kcProps }} />;
        case "logout-confirm.ftl":
            return <LogoutConfirm {...{ kcContext, ...kcProps }} />;
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
        "color": `#222222`,
        "backgroundColor": `#FFDB00`,
        ":hover": {
            "backgroundColor": `#EBC900`,
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