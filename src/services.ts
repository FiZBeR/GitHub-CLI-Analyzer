import { getData } from "./cache.js";
import { CacheData } from "./types.js";

export const checkData = async (name: string): Promise<CacheData | null> => {
    try {
        
        //obtener name y datos
        const nombre = name;
        const data = await getData();
        //validar en cache
        const info = data[nombre]; 
        //devolver respuesta
        if(info == null){
            return null;
        } else {
            return info;
        }

    } catch (error: any) {
        throw error;
    }
}

//export const transformData = async (): Promise