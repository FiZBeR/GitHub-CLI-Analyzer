import { getUserProfile, getUserRepos } from "./api.js";
import { saveData } from "./cache.js";
import { checkData } from "./services.js";
import { CacheData, GithubRepo, GithubUser } from "./types.js";

const main = async () => {
    try {

        const command = process.argv[2];

        if(!command){
            return console.log('El nombre de usuario es obligatorio');
        }

        const check = await checkData(command);

        if(check == null){

            console.log("Conectando con Github...");

            const [ perfil, repos] = await Promise.all([
                getUserProfile(command), 
                getUserRepos(command)
            ]);
        
            const cache: CacheData = {
                time: Date.now(),
                githubUser: perfil,
                githubRepos: repos
            }

            await saveData({[command]: cache});

            console.log("Datos recibidos!");
            console.log(perfil.name);
            console.log(repos.length);

            const totalStars = repos.reduce((contador: number, repoActual: GithubRepo) => {
                return contador + repoActual.stargazers_count;
            }, 0);

            console.log("Estrellas totales: " + totalStars);
        } else {

            console.log("Obteniendo Cache...");
            console.log(check.githubUser.name);
            console.log(check.githubRepos.length);

            const totalStars = check.githubRepos.reduce((contador: number, repoActual: GithubRepo) => {
                return contador + repoActual.stargazers_count;
            }, 0);

            console.log("Estrellas totales: " + totalStars);

        }

        return check;
    } catch (error: any) {
        console.log("Hubo un error, " + error);
    }
}

main();