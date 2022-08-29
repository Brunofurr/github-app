import React, { ReactElement } from "react";
import { HighlightInfoContainer } from "./styles";

export interface HighlightInfoProps {
    icon?: ReactElement<any, any>;
    label?: string;
    fontSize?: string;
    fontWeight?: string;
}

const HighlightInfo = ({ icon, label, fontSize = '16px', fontWeight = '400' }: HighlightInfoProps) => {

    return (
        <HighlightInfoContainer style={{ fontSize, fontWeight }}>
            <i>{ icon }</i>
            <span>{ label }</span>
        </HighlightInfoContainer>
    )
}

export default HighlightInfo