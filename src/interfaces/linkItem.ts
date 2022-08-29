import { ReactElement } from "react";

export interface LinkItem {
    hasSlash: boolean;
    identifier: string;
    label?: string;
    icon?: ReactElement<any, any>;
}