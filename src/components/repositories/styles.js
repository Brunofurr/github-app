import styled from 'styled-components';

export const RepositoriesContainer = styled.div`

    .repositories {
        color: #767676;

        &__title {
            text-transform: uppercase;
            font-size: 1rem;
        }

        &__row {
            a {
                color: inherit;
                text-decoration: none;
            }
        }

        .divider {
            margin: 1rem 0;
            height: 1px;
            width: 100%;
            background-color: #ccc;
        }

        &__actions {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 1rem;

            &--add {
                color: var(--color-highlight);
                text-decoration: none;
            }

            &--more {
                color: #767676;
                cursor: pointer;
                background: none;
                border: none;
                padding-top: 3px;
            }
        }
    }
`