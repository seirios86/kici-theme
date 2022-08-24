import { memo } from "react";
import { Template } from "keycloakify/lib/components/Template";
import type { KcProps } from "keycloakify";
import { getMsg } from "keycloakify";
import { useCssAndCx } from "tss-react";
import { KcContext } from "./kcContext";

type KcContext_LoginResetPassword = Extract<KcContext, { pageId: "login-reset-password.ftl"; }>;

export const LoginResetPassword = memo(({ kcContext, ...props }: { kcContext: KcContext_LoginResetPassword } & KcProps) => {
    const { url, realm, auth } = kcContext;

    const { msg, msgStr } = getMsg(kcContext);

    const { cx } = useCssAndCx();

    return (
        <Template
            {...{ kcContext, ...props }}
            doFetchDefaultThemeResources={true}
            displayMessage={false}
            // headerNode={msg("emailForgotTitle")}
            headerNode={"비밀번호 찾기"}
            formNode={
                <form id="kc-reset-password-form" className={cx(props.kcFormClass)} action={url.loginAction} method="post">
                    <div className={cx(props.kcFormGroupClass)}>
                        <div className={cx(props.kcLabelWrapperClass)}>
                            <label htmlFor="username" className={cx(props.kcLabelClass)}>
                                {/* {!realm.loginWithEmailAllowed
                                    ? msg("username")
                                    : !realm.registrationEmailAsUsername
                                    ? msg("usernameOrEmail")
                                    : msg("email")} */}
                                {!realm.loginWithEmailAllowed
                                    ? "아이디"
                                    : !realm.registrationEmailAsUsername
                                    ? "아이디 또는 이메일 주소"
                                    : "이메일 주소"}
                            </label>
                        </div>
                        <div className={cx(props.kcInputWrapperClass)}>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                className={cx(props.kcInputClass)}
                                autoFocus
                                defaultValue={auth !== undefined && auth.showUsername ? auth.attemptedUsername : undefined}
                                placeholder={!realm.loginWithEmailAllowed
                                    ? "아이디 입력"
                                    : !realm.registrationEmailAsUsername
                                    ? "아이디 또는 이메일 주소 입력"
                                    : "이메일 주소 입력"}
                            />
                        </div>
                    </div>
                    <div className={cx(props.kcFormGroupClass, props.kcFormSettingClass)}>
                        <div id="kc-form-options" className={cx(props.kcFormOptionsClass)}>
                            <div className={cx(props.kcFormOptionsWrapperClass)}>
                                <span>
                                    <a href={url.loginUrl}>
                                        {/* {msg("backToLogin")} */}
                                        {"이전"}
                                    </a>
                                </span>
                            </div>
                        </div>

                        <div id="kc-form-buttons" className={cx(props.kcFormButtonsClass)}>
                            <input
                                className={cx(props.kcButtonClass, props.kcButtonPrimaryClass, props.kcButtonBlockClass, props.kcButtonLargeClass)}
                                type="submit"
                                // value={msgStr("doSubmit")}
                                value={"확인"}
                            />
                        </div>
                    </div>
                </form>
            }
            infoNode={msg("emailInstruction")}
        />
    );
});