const apiUrl = "https://rickandmortyapi.com/api/character";

async function fetchCharacters() {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) throw new Error("Failed to fetch characters");
    const data = await response.json();
    displayCharacters(data.results);
  } catch (error) {
    document.getElementById("characters").innerHTML = `<p>Error: ${error.message}</p>`;
  }
}

function displayCharacters(characters) {
  const container = document.getElementById("characters");
  container.innerHTML = ""; // Clear existing content
  characters.forEach(character => {
    const card = document.createElement("div");
    card.className = "character-card";
    card.innerHTML = `
      <img src="${character.image}" alt="${character.name}">
      <h3>${character.name}</h3>
      <p>Status: ${character.status}</p>
      <p>Species: ${character.species}</p>
    `;
    container.appendChild(card);
  });
}

// Fetch characters on page load
fetchCharacters();
