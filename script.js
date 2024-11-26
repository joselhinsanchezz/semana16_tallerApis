const apiUrl = "https://rickandmortyapi.com/api/character";

async function fetchCharacters() {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) throw new Error("Failed to fetch characters");
    const data = await response.json();
    displayCharacters(data.results);
  } catch (error) {
    document.getElementById("characters").innerHTML = `<p class="text-danger">Error: ${error.message}</p>`;
  }
}

function displayCharacters(characters) {
  const container = document.getElementById("characters");
  container.innerHTML = ""; // Clear existing content
  characters.forEach(character => {
    const card = `
      <div class="col-md-6 col-lg-4">
        <div class="card shadow-sm">
          <img src="${character.image}" class="card-img-top" alt="${character.name}">
          <div class="card-body">
            <h5 class="card-title">${character.name}</h5>
            <p class="card-text">Status: ${character.status}</p>
            <p class="card-text">Species: ${character.species}</p>
          </div>
        </div>
      </div>
    `;
    container.innerHTML += card;
  });
}

// Fetch characters on page load
fetchCharacters();
