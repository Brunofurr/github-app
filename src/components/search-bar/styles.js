import styled from  'styled-components';

export const SearchBarContainer = styled.form`
    .searchbar {
        display: flex;
        align-items: flex-end;
        position: relative;
        
        @media screen and ( max-width: 768px ) {
            width: 100% !important;
        }

        &__input {
            width: 100%;
            background-color: transparent;
            border-width: 0 0 1px 0;
            font-size: inherit;
            padding-bottom: 0.25rem;
            color: #fafafa;
        }

        &__input:focus, &__input:hover, &__input:active {
            outline: none;
        }

        &__activate {
            cursor: pointer;
            background: none;
            border: none;
            padding;
        }

        &__clear {
            cursor: pointer;
            background: none;
            border: none;
            padding;
            position: absolute;
            right: 0;
            bottom: 3px;
        }

        &__result {
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 8px;
            width: 100%;
            height: 66px;
            cursor: pointer;
            z-index: 1;
            margin-top: 1rem;
        }

    }
`