import { memo } from "react";
import { Template } from "./Template";
import type { KcProps } from "./KcProps";
import type { KcContextBase } from "../getKcContext/KcContextBase";
// import { getMsg } from "../i18n";

export const LoginVerifyEmail = memo(({ kcContext, ...props }: { kcContext: KcContextBase.LoginVerifyEmail } & KcProps) => {
    // const { msg } = getMsg(kcContext);

    const { url, user } = kcContext;

    return (
        <Template
            {...{ kcContext, ...props }}
            doFetchDefaultThemeResources={true}
            displayMessage={false}
            // headerNode={msg("emailVerifyTitle")}
            headerNode={"이메일 인증"}
            formNode={
                <>
                    <p className="instruction">
                        {/* {msg("emailVerifyInstruction1", user?.email)} */}
                        {"귀하의 이메일 주소를 확인하기 위한 지침이 포함된 이메일이 귀하의 주소 " + user?.email + "으로 전송되었습니다."}
                    </p>
                    <p className="instruction">
                        {/* {msg("emailVerifyInstruction2")} */}
                        {"이메일로 인증 코드를 받지 못하셨습니까?"}
                        <br />
                        {/* <a href={url.loginAction}>{msg("doClickHere")}</a>
                        &nbsp;
                        {msg("emailVerifyInstruction3")} */}
                        {"이메일을 다시 보내려면 "}
                        <a href={url.loginAction}>{"여기"}</a>
                        {"를 클릭하십시오."}
                    </p>
                </>
            }
        />
    );
});
