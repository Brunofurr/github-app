import React, { createContext, useState } from "react";
import { Organization } from "../interfaces/organization";
import { Repository } from "../interfaces/repository";
import { RepositoryResult } from "../interfaces/repositoryResult";
import { TopuserResult } from "../interfaces/topuserResult";
import { User } from "../interfaces/user";
import { userContextType } from "../interfaces/userContextType";
import { UserEvent } from "../interfaces/userEvent";
import { UserResult } from "../interfaces/userResult";

export const UserContext = createContext({} as userContextType);

export const UserContextProvider = (props: any) => {
    const [ username, setUsername ] = useState<string>('Brunofurr');
    const [ user, setUser ] = useState<User | null>(null);
    const [ userResult, setUserResult ] = useState<UserResult | null>(null);
    const [ repositoryResult, setRepositoryResult ] = useState<RepositoryResult | null>(null);
    const [ topuserResult, setTopuserResult ] = useState<TopuserResult | null>(null);
    const [ organization, setOrganization] = useState<Organization[]>([]);
    const [ userEvent, setUserEvent ] = useState<UserEvent[]>([]);
    const [ repository, setRepository ] = useState<Repository[]>([]);
    const [ isLoading, setIsLoading ] = useState<boolean>(false);
    const [ activeSection, setActiveSection ] = useState<number>(0);
    const [ defaultImage ] = useState<string>('https://www.gravatar.com/avatar/05b6d7cc7c662bf81e01b39254f88a49?d=identicon');
    const [ topUsersPerPage, setTopUsersPerPage ] = useState<number>(10);
    const [ repositoriesPerPage, setRepositoriesPerPage ] = useState<number>(10);
    const [ activitiesPerPage, setActivitiesPerPage ] = useState<number>(10);

    return (
        <UserContext.Provider value={{
            user,
            setUser,
            organization,
            setOrganization,
            repository,
            setRepository,
            userEvent,
            setUserEvent,
            isLoading,
            setIsLoading,
            defaultImage,
            userResult,
            setUserResult,
            activeSection,
            setActiveSection,
            repositoryResult,
            setRepositoryResult,
            topuserResult,
            setTopuserResult,
            username,
            setUsername,
            topUsersPerPage,
            setTopUsersPerPage,
            repositoriesPerPage,
            setRepositoriesPerPage,
            activitiesPerPage,
            setActivitiesPerPage
        }}>
            {props.children}
        </UserContext.Provider>
    )
}