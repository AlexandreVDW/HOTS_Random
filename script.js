let pool = document.querySelector(".pool");

heroes.sort((a, b) => a.nom.localeCompare(b.nom));

heroes.forEach((objet) => {
    const card = document.createElement("article");
    card.classList.add("heros");

    const nom = document.createElement("h2");
      nom.textContent = objet.nom;
      card.appendChild(nom);

    const image = document.createElement("img");
      image.src = objet.image;
      card.appendChild(image);

    const category = document.createElement("div")
    category.classList.add("category");
    card.appendChild(category);

    const univers = document.createElement("span")
    univers.textContent = objet.univers;
    univers.classList.add("univers");
    category.appendChild(univers);

    const roles = document.createElement("span")
    roles.textContent = objet.roles;
    roles.classList.add("roles");
    category.appendChild(roles);

    pool.appendChild(card);
  });

  let currentFilters = {
    univers: [],
    roles: []
  };
