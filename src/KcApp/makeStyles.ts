import { createMakeStyles } from "tss-react";

function useTheme() {
    return {
        "primaryButtonColor": "#FFDB00",
        "primaryButtonHoverColor": "#EBC900",
        "primaryButtonTextColor": "#222222",
    };
}

export const { makeStyles } = createMakeStyles({ useTheme });