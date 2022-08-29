import styled from 'styled-components';

export const FeatureActivityContainer = styled.div`

    .feature {

        margin-bottom: 3rem;

        &__header {
            display: flex;
            align-items: center;

            p {
                margin-left: 1rem;
            }
        }

        &__wrapper {
            max-width: 96%;
            margin-left: auto;
        }

        &__content {

            &__main {
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin-bottom: .5rem;

                .star {
                    color: var(--color-highlight);
                    cursor: pointer;
                }
            }

            &__status {
                display: flex;
                align-items: center;
                margin-top: 1rem;

                .highlight {
                    margin-right: 1rem;
                }
            }

        }
    }
`