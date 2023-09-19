import * as React from "react";
import SvgIcon from "@mui/material/SvgIcon";
import {emitter} from "../../App.jsx";
import {getCurrentTheme} from "../../main.jsx";

export default function XIcon() {
    emitter.on('themeChange', (data) => {
        setMode(data.mode);
    });
    const [mode, setMode] = React.useState(getCurrentTheme());
    return (
        <SvgIcon sx={{mr: 1, filter: `${mode === 'light' ? 'invert(100%)' : 'invert(0%)'}`}}>
            <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 487.43 456.19"><path id="path1009" className="cls-1" d="M7.48,21.9,195.66,273.57,6.29,478.1H48.91L214.71,299l134,179.11h145L294.93,212.33,471.2,21.9H428.58L275.89,186.82,152.51,21.9ZM70.16,53.3h66.63L431,446.7H364.39Z" transform="translate(-6.29 -21.9)" fill="#FFF"/></svg>
        </SvgIcon>
    )
}
