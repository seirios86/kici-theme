import { memo } from "react";
import { Template } from "./Template";
import type { KcProps } from "./KcProps";
import type { KcContextBase } from "../getKcContext/KcContextBase";
import { getMsg } from "../i18n";

export const LoginPageExpired = memo(({ kcContext, ...props }: { kcContext: KcContextBase.LoginPageExpired } & KcProps) => {
    const { url } = kcContext;

    const { msg } = getMsg(kcContext);

    return (
        <Template
            {...{ kcContext, ...props }}
            doFetchDefaultThemeResources={true}
            displayMessage={false}
            // headerNode={msg("pageExpiredTitle")}
            headerNode={"페이지가 만료되었습니다"}
            formNode={
                <>
                    <p id="instruction1" className="instruction">
                        {/* {msg("pageExpiredMsg1")}
                        <a id="loginRestartLink" href={url.loginRestartFlowUrl}>
                            {msg("doClickHere")}
                        </a>{" "}
                        .<br /> */}
                        {"로그인 프로세스를 다시 시작하려면 "}
                        <a id="loginRestartLink" href={url.loginRestartFlowUrl}>
                            {"여기"}
                        </a>
                        {"를 클릭하십시오."}
                        {/* {msg("pageExpiredMsg2")}{" "}
                        <a id="loginContinueLink" href={url.loginAction}>
                            {msg("doClickHere")}
                        </a>{" "}
                        . */}
                        <br />
                        {"로그인 프로세스를 계속하려면 "}
                        <a id="loginRestartLink" href={url.loginRestartFlowUrl}>
                            {"여기"}
                        </a>
                        {"를 클릭하십시오."}
                    </p>
                </>
            }
        />
    );
});
