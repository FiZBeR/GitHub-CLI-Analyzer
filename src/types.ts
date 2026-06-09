export interface GithubUser {
    login: string,
    name: string | null,
    bio: string | null,
    public_repos: number
}

export interface GithubRepo {
    name: string,
    stargazers_count: number
}

export interface CacheData {
    time: number,
    githubUser: GithubUser,
    githubRepos: GithubRepo[]
}