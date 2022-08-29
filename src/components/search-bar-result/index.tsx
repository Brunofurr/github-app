import React from "react";
import Avatar from "../avatar";
import Card from "../card";
import { SearchBarResultContainer } from "./styles";

export interface SearchBarResultProps {
    url?: string;
    title?: string;
    sendUsername: (username: string) => void;
}

const SearchBarResult = ({ url , title, sendUsername }: SearchBarResultProps) => {

    return (
        <SearchBarResultContainer>
            <div className="search-bar-result" onClick={() => sendUsername(title as string)}>
                <Card margin="0">
                    <div className="search-bar-result__content">
                        <div className="avatar">
                            <Avatar url={url} maxWidth={'32px'}/>
                        </div>
                        <div className="info">
                            <h4>{ title || '' }</h4>
                        </div>
                    </div>
                </Card>
            </div>
        </SearchBarResultContainer>
    )
}

export default SearchBarResult