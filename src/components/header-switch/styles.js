import styled from 'styled-components';

export const HeaderSwitchContainer = styled.section`
    position: absolute;
    top: 0;
    background-color: #292929;
    padding: 1rem;
    width: 100%;
    display: flex;
    justify-content: flex-end;

    .wrapper {
        display: flex;
        justify-content: space-between;
        max-width: 100%;
        width: 100%;

        @media screen and (min-width: 768px) {
            max-width: 720px;
        }
    
        @media screen and (min-width: 1200px) {
            max-width: 1140px;
        }
    
        @media screen and (min-width: 1400px) {
            max-width: 1320px;
        }
    }

    .header-switch {
        max-width: 1199px;
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;

        &__button {
            text-transform: uppercase;
            border: none;
            background: none;
            padding-top: .25rem;
            cursor: pointer;
            position: relative;
        }

        &__tag {
            position: absolute;
            color: #fff;
            bottom: -10px;
            right: 0;
            font-size: .5rem;
        }
    }
`