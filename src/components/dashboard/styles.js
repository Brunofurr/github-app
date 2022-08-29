import styled from 'styled-components';


export const DashboardContainer = styled.section`
    position: relative;
    padding: 0 3rem 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fafafa;

    .wrapper {
        display: flex;
        justify-content: space-between;
        max-width: 100%;
        width: 100%;
        height: 100%;

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

`