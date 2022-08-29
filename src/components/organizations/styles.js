import styled from 'styled-components';

export const OrganizationsContainer = styled.div`

    .organizations {
        color: #767676;

        &__title {
            text-transform: uppercase;
            font-size: 1rem;
        }

        .divider {
            margin: 1rem 0;
            height: 1px;
            width: 100%;
            background-color: #ccc;
        }

        &__row {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;

            img {
                margin-right: 1rem;
                margin-top: .5rem;
            }
        }
    }
`