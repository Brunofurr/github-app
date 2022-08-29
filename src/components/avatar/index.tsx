import React, { useContext } from "react";
import { UserContext } from "../../contexts/userContext";
import { AvatarCointainer } from "./styles";

export interface AvatarProps {
    hasBorder?: boolean | undefined;
    maxWidth?: string | undefined;
    url?: string | undefined;
}

const Avatar = ({ url, maxWidth, hasBorder }: AvatarProps) => {
    const { defaultImage } = useContext(UserContext);
    const defaultMaxWidth = '100%';
    return (
        <AvatarCointainer src={url || defaultImage} style={{ maxWidth, borderWidth: hasBorder ? '1px' : '0px' }} ></AvatarCointainer>
    )
}

export default Avatar