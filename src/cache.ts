import fs from 'fs/promises';
import { CacheData } from './types.js';

const FILE_PATH = 'github-cache.json'

export const getData = async (): Promise<Record<string, CacheData>> => {
    try {
        const data = await fs.readFile(FILE_PATH);
        return JSON.parse(data);
    } catch (error: any) {
        if( error.code == 'ENOENT'){
            return {};
        }
        throw new Error('Error critico al leer la base de datos');
    }
}

export const saveData = async (data: Record<string, CacheData>) => {
    const dataString = JSON.stringify(data, null, 2);
    await fs.writeFile(FILE_PATH, dataString, 'utf-8'); 
}