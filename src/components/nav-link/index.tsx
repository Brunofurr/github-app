import React, { ReactElement } from "react";
import { LinkItem } from "../../interfaces/linkItem";
import { NavLinkContainer } from "./styles";

export type NavLinkPorps = {
    links: LinkItem[]
}

const NavLink = ({ links }: NavLinkPorps) => (
    <>
        {links.map((link: LinkItem, index: number) => {
            return (
                <NavLinkContainer key={index}>
                    { link.icon && <>{ link.icon }</>} 
                    { link.label && <p>{ link.label }</p> }
                    { link.hasSlash && <span>|</span> }
                </NavLinkContainer>
            )
        })}
    </>
)

export default NavLink