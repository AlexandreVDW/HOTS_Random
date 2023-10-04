// Fonction pour trier les héros par nom
function sortHeroesByName() {
  heroes.sort((a, b) => a.nom.localeCompare(b.nom));
}

// Appeler la fonction pour trier les héros par nom initialement
sortHeroesByName();

// Fonction pour afficher les héros en fonction des filtres sélectionnés
function filterHeroes() {
  const genreFilter = document.querySelector('input[name="genre"]:checked').value;
  const roleFilter = document.querySelector('input[name="role"]:checked').value;

  // Supprimer tous les héros actuellement affichés
  const pool = document.querySelector(".pool");
  while (pool.firstChild) {
      pool.removeChild(pool.firstChild);
  }

  // Filtrer et afficher les héros en fonction des filtres sélectionnés
  heroes.forEach((objet) => {
      if ((genreFilter === "All" || objet.univers === genreFilter) &&
          (roleFilter === "All" || objet.roles === roleFilter)) {
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
      }
  });
}

// Fonction pour générer un héros aléatoire parmi ceux filtrés
function getRandomHero() {
  const filteredHeroes = heroes.filter((objet) => {
      const genreFilter = document.querySelector('input[name="genre"]:checked').value;
      const roleFilter = document.querySelector('input[name="role"]:checked').value;
      
      return (genreFilter === "All" || objet.univers === genreFilter) &&
          (roleFilter === "All" || objet.roles === roleFilter);
  });

  if (filteredHeroes.length === 0) {
      alert("Aucun héros ne correspond aux filtres sélectionnés.");
      return;
  }

  const randomIndex = Math.floor(Math.random() * filteredHeroes.length);
  const randomHero = filteredHeroes[randomIndex];

  // Afficher la boîte modale avec le héros aléatoire
  const modal = document.getElementById("myModal");
  const closeModalButton = document.querySelector(".close");
  const heroName = document.getElementById("random-hero-name");
  const heroImage = document.getElementById("random-hero-image");
  const heroUniverse = document.getElementById("random-hero-universe");
  const heroRoles = document.getElementById("random-hero-roles");

  heroName.textContent = randomHero.nom;
  heroImage.src = randomHero.image;
  heroUniverse.textContent = "Univers: " + randomHero.univers;
  heroRoles.textContent = "Rôles: " + randomHero.roles;

  modal.style.display = "block";

  closeModalButton.onclick = function() {
      modal.style.display = "none";
  };

  window.onclick = function(event) {
      if (event.target === modal) {
          modal.style.display = "none";
      }
  };
}

// Écouter les changements dans les boutons radio pour filtrer les héros
const genreFilters = document.querySelectorAll('.genre-filter');
genreFilters.forEach((filter) => {
  filter.addEventListener('change', filterHeroes);
});

const roleFilters = document.querySelectorAll('.role-filter');
roleFilters.forEach((filter) => {
  filter.addEventListener('change', filterHeroes);
});

// Écouter le clic sur le bouton "Random" et activer la génération aléatoire
const randomButton = document.getElementById('random-button');
randomButton.addEventListener('click', () => {
  randomButtonClicked = true;
  getRandomHero();
});

// Appeler la fonction pour afficher les héros initialement
filterHeroes();

