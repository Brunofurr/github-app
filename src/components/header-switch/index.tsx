import React, { useContext, useState } from "react";
import { HeaderSwitchItems } from "../../constants/header-switch-items";
import { UserContext } from "../../contexts/userContext";
import { HeaderSwitchItem } from "../../interfaces/headerSwitchItem";
import { HeaderSwitchContainer } from "./styles";

const HeaderSwitch = () => {

    const { activeSection, setActiveSection } = useContext(UserContext);
    const [ items ] = useState<HeaderSwitchItem[]>(HeaderSwitchItems);

    const handleIsActive = (index: number): boolean => {
        return activeSection === index
    }

    return (
        <HeaderSwitchContainer>
            <div className="wrapper">
                <div className="header-switch">
                    {items.map((item, index) => {
                        return (
                            <button key={index} type="button" title={item.label} className="header-switch__button" style={{ color: handleIsActive(index) ? 'var(--color-highlight)' : '#fff', borderTop: handleIsActive(index) ? '2px solid var(--color-highlight)' : 'none' }} onClick={() => setActiveSection(index)}>
                                    { item.label }
                                    { item.isNew && <sub className="header-switch__tag">NOVO</sub> }
                            </button>
                        )
                    })}
                </div>
            </div>
        </HeaderSwitchContainer>
    )
}

export default HeaderSwitch