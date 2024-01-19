import { fetchUsers } from "./get.js";
document.addEventListener("DOMContentLoaded", () => {
    console.log("test load");
    let url_API = "https://jsonplaceholder.typicode.com/users";
    let data;

    data = fetchUsers(url_API);
});