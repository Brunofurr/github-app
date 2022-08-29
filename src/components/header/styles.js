import styled from 'styled-components';

export const HeaderContainer = styled.header`
    background-color: #292929;
    padding: 2rem 1.5rem;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 95px;

    .icon {
        font-size: 2rem;
        cursor: pointer;
        margin-right: 1rem;
    }
`

export const NavContainer = styled.nav`
    display: flex;
    align-items: center;

    .chevron {
        margin-left: .25rem;
    }
`