import React from "react";
import { CardContainer } from "./styles";

export interface CardProps {
    children: JSX.Element;
    margin?: string;
}

const Card = ({ children, margin = '1rem 0' }: CardProps) => {
    return (
        <CardContainer style={{ margin }}>
            { children }
        </CardContainer>
    )
}

export default Card