export function print_users(user) {
    const section = document.querySelector("section");
    const ul = document.createElement("ul");
    const child = section.appendChild(ul);

    child.innerHTML += `
            <li>name : ${user.name}</li>
            <li>username : ${user.username}</li>
            <li>email : ${user.email}</li>
            <li>adress : ${user.address.street} ${user.address.suite}<br>${user.address.city} ${user.address.zipcode}<br>lat: ${user.address.geo.lat}<br>lng: ${user.address.geo.lng}</li>
        `;
}