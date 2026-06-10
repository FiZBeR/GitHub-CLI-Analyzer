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
        }
        
        //Obtener tiempos en milisegundos
        const tiempoActual = Date.now();
        const tiempoTranscurrido = tiempoActual - info.time;

        if(tiempoTranscurrido < 3600000){ //3600000 tiempode una hora en milisegundos
            return info
        } else {
            return null
        }
        

    } catch (error: any) {
        throw error;
    }
}
