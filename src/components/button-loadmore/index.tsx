import React from "react";
import { ButtonLoadmoreContainer } from "./styles";

export interface ButtonLoadmoreProps {
    label: string;
    type: string;
    sendAction: (type: string) => void;
}

const ButtonLoadmore = ({ label, type, sendAction }: ButtonLoadmoreProps) => {

    return (
        <ButtonLoadmoreContainer onClick={() => sendAction(type)}>
            { label }
        </ButtonLoadmoreContainer>
    )
}

export default ButtonLoadmore