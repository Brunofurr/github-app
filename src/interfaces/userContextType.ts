import { Organization } from "./organization";
import { Repository } from "./repository";
import { RepositoryResult } from "./repositoryResult";
import { TopuserResult } from "./topuserResult";
import { User } from "./user";
import { UserEvent } from "./userEvent";
import { UserResult } from "./userResult";

export interface userContextType {
    username: string;
    user: User | null,
    organization: Organization[];
    repository: Repository[];
    userEvent: UserEvent[];
    isLoading: boolean;
    defaultImage: string;
    userResult: UserResult | null;
    repositoryResult: RepositoryResult | null;
    activeSection: number;
    topuserResult: TopuserResult | null;
    topUsersPerPage: number;
    repositoriesPerPage: number;
    activitiesPerPage: number;
    setUsername: (username: string) => void;
    setUser: (user: User | null) => void;
    setOrganization: (organizations: Organization[]) => void;
    setRepository: (repositories: Repository[]) => void;
    setUserEvent: (userEvents: UserEvent[]) => void;
    setIsLoading: (status: boolean) => void;
    setUserResult: (user: UserResult | null) => void;
    setActiveSection: (status: number) => void;
    setRepositoryResult: (repository: RepositoryResult) => void;
    setTopuserResult: (topuserResult: TopuserResult) => void;
    setTopUsersPerPage: (per_page: number) => void;
    setRepositoriesPerPage: (per_page: number) => void;
    setActivitiesPerPage: (per_page: number) => void;
}