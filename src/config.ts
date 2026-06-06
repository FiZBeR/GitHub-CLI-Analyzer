import dotenv from 'dotenv';

dotenv.config();

export const config = {
    githubToken: process.env.GITHUB_TOKEN || '',
    url: process.env.API
}