import { GithubUser, GithubRepo } from "./types.js";
import { config } from "./config.js";

export const getUserProfile = async (username: string): Promise<GithubUser> => {
    try {
    
        const api = config.url;
        const token = config.githubToken;

        if(!username){
            throw new Error("El nombre de usuario es obligatorio");
        }

        const response = await fetch(api + username);

        const data = await response.json();

        const newUser: GithubUser = {
            login: data.login,
            name: data.name,
            bio: data.bio,
            public_repos: data.public_repos
        }

        return newUser;

    } catch (error: any) {
        throw error;
    }
}

export const getUserRepos = async (username: string): Promise<GithubRepo[]> => {
    try {
        const api = config.url;
        const token = config.githubToken;

        if(!username){
            throw new Error("El nombre de usuario es obligatorio");
        }

        const response = await fetch(api + username + "/repos");

        const data = await response.json();

        const newRepos: GithubRepo[] = data.map((e: any) => {
            const repo: GithubRepo = {
                name: e.name,
                stargazers_count: e.stargazers_count
            }
            return repo
        })

        return newRepos;
    } catch (error: any) {
        throw error
    }
}