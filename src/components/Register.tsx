import { memo } from "react";
import { Template } from "./Template";
import type { KcProps } from "./KcProps";
import type { KcContextBase } from "../getKcContext/KcContextBase";
// import { getMsg } from "../i18n";
import { useCssAndCx } from "tss-react";

export const Register = memo(({ kcContext, ...props }: { kcContext: KcContextBase.Register } & KcProps) => {
    const { url, messagesPerField, register, realm, passwordRequired, recaptchaRequired, recaptchaSiteKey } = kcContext;

    // const { msg, msgStr } = getMsg(kcContext);

    const { cx } = useCssAndCx();

    return (
        <Template
            {...{ kcContext, ...props }}
            doFetchDefaultThemeResources={true}
            // headerNode={msg("registerTitle")}
            headerNode={"회원가입"}
            formNode={
                <form id="kc-register-form" className={cx(props.kcFormClass)} action={url.registrationAction} method="post">
                    <div className={cx(props.kcFormGroupClass, messagesPerField.printIfExists("firstName", props.kcFormGroupErrorClass))}>
                        <div className={cx(props.kcLabelWrapperClass)}>
                            <label htmlFor="firstName" className={cx(props.kcLabelClass)}>
                                {/* {msg("firstName")} */}
                                {"이름"}
                            </label>
                        </div>
                        <div className={cx(props.kcInputWrapperClass)}>
                            <input
                                type="text"
                                id="firstName"
                                className={cx(props.kcInputClass)}
                                name="firstName"
                                defaultValue={register.formData.firstName ?? ""}
                                placeholder="이름 입력"
                            />
                        </div>
                    </div>

                    <div className={cx(props.kcFormGroupClass, messagesPerField.printIfExists("lastName", props.kcFormGroupErrorClass))}>
                        <div className={cx(props.kcLabelWrapperClass)}>
                            <label htmlFor="lastName" className={cx(props.kcLabelClass)}>
                                {/* {msg("lastName")} */}
                                {"성"}
                            </label>
                        </div>
                        <div className={cx(props.kcInputWrapperClass)}>
                            <input
                                type="text"
                                id="lastName"
                                className={cx(props.kcInputClass)}
                                name="lastName"
                                defaultValue={register.formData.lastName ?? ""}
                                placeholder="성 입력"
                            />
                        </div>
                    </div>

                    <div className={cx(props.kcFormGroupClass, messagesPerField.printIfExists("email", props.kcFormGroupErrorClass))}>
                        <div className={cx(props.kcLabelWrapperClass)}>
                            <label htmlFor="email" className={cx(props.kcLabelClass)}>
                                {/* {msg("email")} */}
                                {"이메일 주소"}
                            </label>
                        </div>
                        <div className={cx(props.kcInputWrapperClass)}>
                            <input
                                type="text"
                                id="email"
                                className={cx(props.kcInputClass)}
                                name="email"
                                defaultValue={register.formData.email ?? ""}
                                autoComplete="email"
                                placeholder="이메일 입력"
                            />
                        </div>
                    </div>
                    {!realm.registrationEmailAsUsername && (
                        <div className={cx(props.kcFormGroupClass, messagesPerField.printIfExists("username", props.kcFormGroupErrorClass))}>
                            <div className={cx(props.kcLabelWrapperClass)}>
                                <label htmlFor="username" className={cx(props.kcLabelClass)}>
                                    {/* {msg("username")} */}
                                    {"아이디"}
                                </label>
                            </div>
                            <div className={cx(props.kcInputWrapperClass)}>
                                <input
                                    type="text"
                                    id="username"
                                    className={cx(props.kcInputClass)}
                                    name="username"
                                    defaultValue={register.formData.username ?? ""}
                                    autoComplete="username"
                                    placeholder="아이디 입력"
                                />
                            </div>
                        </div>
                    )}
                    {passwordRequired && (
                        <>
                            <div className={cx(props.kcFormGroupClass, messagesPerField.printIfExists("password", props.kcFormGroupErrorClass))}>
                                <div className={cx(props.kcLabelWrapperClass)}>
                                    <label htmlFor="password" className={cx(props.kcLabelClass)}>
                                        {/* {msg("password")} */}
                                        {"비밀번호"}
                                    </label>
                                </div>
                                <div className={cx(props.kcInputWrapperClass)}>
                                    <input
                                        type="password"
                                        id="password"
                                        className={cx(props.kcInputClass)}
                                        name="password"
                                        autoComplete="new-password"
                                        placeholder="비밀번호 입력"
                                    />
                                </div>
                            </div>

                            <div
                                className={cx(
                                    props.kcFormGroupClass,
                                    messagesPerField.printIfExists("password-confirm", props.kcFormGroupErrorClass),
                                )}
                            >
                                <div className={cx(props.kcLabelWrapperClass)}>
                                    <label htmlFor="password-confirm" className={cx(props.kcLabelClass)}>
                                        {/* {msg("passwordConfirm")} */}
                                        {"비밀번호 확인"}
                                    </label>
                                </div>
                                <div className={cx(props.kcInputWrapperClass)}>
                                    <input type="password" id="password-confirm" className={cx(props.kcInputClass)} name="password-confirm"
                                        placeholder="비밀번호 재입력"
                                    />
                                </div>
                            </div>
                        </>
                    )}
                    {recaptchaRequired && (
                        <div className="form-group">
                            <div className={cx(props.kcInputWrapperClass)}>
                                <div className="g-recaptcha" data-size="compact" data-sitekey={recaptchaSiteKey}></div>
                            </div>
                        </div>
                    )}
                    <div className={cx(props.kcFormGroupClass)}>
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
                                // value={msgStr("doRegister")} />
                                value={"회원가입"}
                            />
                        </div>
                    </div>
                </form>
            }
        />
    );
});
