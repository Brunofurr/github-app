import React, { useContext, useEffect, useState, useCallback } from "react";
import { useForm } from 'react-hook-form';
import debounce from 'lodash.debounce';
import { FaSearch, FaTimes } from "react-icons/fa";
import { UserContext } from "../../contexts/userContext";
import { User } from "../../interfaces/user";
import HighlightInfo from "../highlight-info";
import SearchBarResult from "../search-bar-result";
import { SearchBarContainer } from "./styles";


export interface SearchBarProps {
    width?: string;
    fontSize?: string;
    sendQuery: (query: string) => void;
}

const SearchBar = ({ sendQuery, fontSize = '1rem', width = '500px' }: SearchBarProps) => {
    const { isLoading, userResult, setUserResult, setUsername } = useContext(UserContext);
    const [ loading, setLoading ] = useState<boolean>(isLoading);
    const [ inputQuery, setInputQuery ] = useState<string>("");
    const [ searchIsActive, setSearchIsActive ] = useState<boolean>(false);
    const { register, resetField, getValues } = useForm();

    const debouncedSave = useCallback(
		debounce((newValue) => sendQuery(newValue), 1000),
	[]);

    useEffect(() => {
        setLoading(isLoading);
    }, [isLoading])

    const handleSearchActivate = (): void => {
        setSearchIsActive(!searchIsActive);
        if (!searchIsActive) handleReset();
    }

    const handleSearch = (query: string) => {
        setInputQuery(query);
        if (query.length > 3) {
            debouncedSave(query);
        }
    }

    const handleReset = () => {
        resetField("searchbar");
        setInputQuery("");
        setUserResult(null);
    }

    const handleNewUser = (username: string) => {
        handleReset();
        setUsername(username);
    }

    return (
        <SearchBarContainer style={{ fontSize, width }}>
            <div className="searchbar">
                <button type="button" disabled={loading} title="Pesquisa" className="searchbar__activate" onClick={handleSearchActivate}>
                    <HighlightInfo icon={<FaSearch color={searchIsActive ? 'var(--color-highlight)' : '#767676'} />} fontSize={fontSize} />
                </button>
                {searchIsActive && <input disabled={loading} className="searchbar__input" type="text" placeholder="Pesquisar" {...register("searchbar")} onChange={(e) => handleSearch(e.target.value)} />}
                {(!!inputQuery.length && searchIsActive) && <button disabled={loading} title="Limpar" type="button" className="searchbar__clear" onClick={handleReset}>
                    <HighlightInfo icon={<FaTimes color="767676" />} fontSize=".7rem" />
                </button>}
                {(searchIsActive && userResult && inputQuery.length > 3) && 
                    <div className="searchbar__result">
                        { userResult.items.map((result: User) => <SearchBarResult key={result.id} url={result.avatar_url} title={result.login} sendUsername={handleNewUser} />)}
                    </div>
                }
            </div>
        </SearchBarContainer>
    )
}

export default SearchBar