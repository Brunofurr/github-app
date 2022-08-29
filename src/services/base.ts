import axios from "axios";
import { Octokit } from "octokit";

const getToken = (): string | undefined => {
    return process.env.GITHUB_KEY;
}

export const octokit = new Octokit({
    auth: getToken()
});

export const api = axios.create({
    baseURL: 'https://api.github.com/'
});
