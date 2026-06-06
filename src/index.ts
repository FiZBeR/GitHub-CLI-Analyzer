import { getUserProfile, getUserRepos } from "./api.js";

const main = async () => {
    try {
        console.log("Conectando con Github...");
        const data = await getUserProfile('FiZBeR');
        const repoData = await getUserRepos('FiZBeR');
        console.log("Datos recibidos!");
        console.log(data);
        console.log(repoData)
    } catch (error: any) {
        console.log("Hubo un error, " + error);
    }
}

main();