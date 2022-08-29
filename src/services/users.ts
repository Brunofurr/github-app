import { User } from "../interfaces/user";
import { Response } from "../interfaces/response";
import { Organization } from "../interfaces/organization";
import { Repository } from "../interfaces/repository";
import { api, octokit } from "./base";
import { UserEvent } from "../interfaces/userEvent";
import { UserResult } from "../interfaces/userResult";
import { useContext } from "react";
import { UserContext } from "../contexts/userContext";

export function getUser(username: string = 'Brunofurr'): Promise<Response<User>> {
    return api.get(`users/${username}`)
}

export function getUserOrganizations(username: string = 'Brunofurr'): Promise<Response<Organization[]>> {
    return api.get(`users/${username}/orgs`)
}

export function getUserRepositories(username: string = 'Brunofurr'): Promise<Response<Repository[]>> {
    return api.get(`users/${username}/repos`)
}

export function getUserPublicEvents(username: string = 'Brunofurr'): Promise<Response<UserEvent[]>> {
    return api.get(`users/${username}/events/public`)
}

export function getSearchRepositories(per_page: number): Promise<Response<any>> {
    return octokit.request('GET /search/repositories', { q: 'a', sort: 'updated', per_page })
}

export function getSearchUser(username: string, per_page: number = 10): Promise<Response<UserResult>> {
    return api.get(`/search/users`, { params: { q: username, per_page } })
}

export function getActivities(per_page: number): Promise<Response<any>> {
    return octokit.request('GET /events', { per_page })
}

export function getTopUsers(per_page: number): Promise<Response<any>> {
    return octokit.request('GET /search/users', { q: 'a', sort: 'followers', per_page })
}
