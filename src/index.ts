import { getUserProfile, getUserRepos } from "./api.js";
import { GithubRepo, GithubUser } from "./types.js";

const main = async () => {
    try {
        console.log("Conectando con Github...");

        const [ perfil, repos] = await Promise.all([
            getUserProfile('midudev'), //FiZBeR
            getUserRepos('midudev')
        ]);
        
        console.log("Datos recibidos!");
        console.log(perfil.name);
        console.log(repos.length);

        const totalStars = repos.reduce((contador: number, repoActual: GithubRepo) => {
            return contador + repoActual.stargazers_count;
        }, 0);

        console.log("Estrellas totales: " + totalStars);
    } catch (error: any) {
        console.log("Hubo un error, " + error);
    }
}

main();