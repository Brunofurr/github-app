import styled from 'styled-components';

export const StatsContainer = styled.div`

    .stats {
        color: #767676;
        text-transform: uppercase;
        font-size: .8rem;
        font-weight: 500;

        &__row {
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: nowrap;

            h4 {
                font-weight: 500;
            }

            p {
                margin-bottom: 0;
                padding: 0.25rem 0.5rem;
                background-color: #ececec;
                min-width: 44px;
                text-align: right;
                border-radius: 1rem;
            }
        }

        &__row--mb:not(:last-child) {
            margin-bottom: .5rem;
        }
    }

`