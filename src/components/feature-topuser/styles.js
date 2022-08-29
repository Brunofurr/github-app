import styled from "styled-components";

export const FeatureTopuserContainer = styled.div`
    .feature {
        display: flex;

        &__content {
            margin-left: 1rem;

            &__title {
                margin-bottom: .25rem;
                font-size: 1rem;
                font-weight: 400;
            }

            &__highlights {
                display: flex;

                .highlight {
                    display: flex;
                    align-items: center;
                    margin-right: 3rem;
                    margin-top: 1rem;

                    .bullet {
                        margin-right: .5rem;
                        background-color: #eaeaea;
                        padding: 0 .5rem;
                        border-radius: 1rem;
                    }
                }
            }
        }

        .plus {
            margin-left: auto;
            color: var(--color-highlight);
            cursor: pointer;
        }
    }
`