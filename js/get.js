import { print_users } from "./print.js";
export async function fetchUsers(url_API) {
    try {
        const res = await fetch(url_API, {
            method: 'GET', // Utilisation de la méthode GET pour récupérer des données
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });

        if (!res.ok) {
            throw new Error(`La requête a échoué avec le statut ${res.status}`);
        }

        const data = await res.json();
        console.log(data[1].address.street); // Vous pouvez faire ce que vous voulez avec les données ici
        data.forEach(user => {
            print_users(user);
        });
        return data;
    } catch (error) {
        console.error('Erreur lors de la récupération des utilisateurs:', error.message);
    }
}