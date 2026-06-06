import { GithubUser } from "./types.js";
import { config } from "./config.js";

export const getUserProfile = async (username: string): Promise<any> => {
    try {
    
        const api = config.url;
        const token = config.githubToken;

        if(!username){
            throw new Error("El nombre de usuario es obligatorio");
        }

        console.log(api + username);
        const response = await fetch(api + username);

        const data = await response.json();

        return data;

    } catch (error: any) {
        throw error;
    }
}

export const getUserRepos = async (username: string): Promise<any> => {
    try {
        const api = config.url;
        const token = config.githubToken;

        if(!username){
            throw new Error("El nombre de usuario es obligatorio");
        }

        console.log(api + username + "/repos");
        const response = await fetch(api + username + "/repos");

        const data = await response.json();

        return data;
    } catch (error: any) {
        throw error
    }
}