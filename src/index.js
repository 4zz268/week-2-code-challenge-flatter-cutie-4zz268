document.addEventListener("DOMContentLoaded", () => {
  const characterBar = document.getElementById("character-bar");

  // Fetch characters from the API
  fetch("http://localhost:3000/characters")
    .then((response) => response.json())
    .then((characters) => {
      characters.forEach((character) => {
        // Create a span for each character
        const span = document.createElement("span");
        span.textContent = character.name;

        // Add click event to display character details
        span.addEventListener("click", () => displayCharacterDetails(character));

        // Append the span to the character bar
        characterBar.appendChild(span);
      });
    })
    .catch((error) => console.error("Error fetching characters:", error));
});

// Function to display character details
function displayCharacterDetails(character) {
  const nameElement = document.getElementById("name");
  const imageElement = document.getElementById("image");
  const voteCountElement = document.getElementById("vote-count");

  nameElement.textContent = character.name;
  imageElement.src = character.image;
  imageElement.alt = character.name;
  voteCountElement.textContent = character.votes;
}
