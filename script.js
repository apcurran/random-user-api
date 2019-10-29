const randomUserModule = (() => {
    const ul = document.querySelector(".users");
    const apiUrl = "https://randomuser.me/api/?results=10";

    function capitalizeFirstLetter(str) {
        return str[0].toUpperCase() + str.slice(1);
    }

    async function displayUsers() {
        const response = await fetch(apiUrl);
        const data = await response.json();
        const authors = await data.results;

        for (const author of authors) {
            const li = document.createElement("li");
            const img = document.createElement("img");
            const span = document.createElement("span");
            const capfirstName = capitalizeFirstLetter(author.name.first);
            const caplastName = capitalizeFirstLetter(author.name.last);

            li.classList.add("user");
            img.src = author.picture.large;
            span.textContent = `${capfirstName} ${caplastName}`;

            li.appendChild(img);
            li.appendChild(span);
            ul.appendChild(li);
        }
    }

    displayUsers().catch(err => console.error(err));
})();