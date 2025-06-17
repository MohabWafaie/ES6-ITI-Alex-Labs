const buttons = document.querySelectorAll("button[data-food]");
const resultsContainer = document.getElementById("results");

function fetchFoodData(query) {
  const url = `https://forkify-api.herokuapp.com/api/search?q=${query}`;

  return fetch(url)
    .then(response => {
      if (!response.ok) throw new Error("Failed to fetch data.");
      return response.json();
    });
}

function renderResults(data) {
  resultsContainer.innerHTML = "";

  data.recipes.forEach(recipe => {
    const card = document.createElement("div");
    card.classList.add("result-card");

    card.innerHTML = `
      <img src="${recipe.image_url}" alt="${recipe.title}" />
      <div class="content">
        <h3>${recipe.title}</h3>
        <a href="${recipe.source_url}" target="_blank">View Recipe</a>
        <div class="publisher">${recipe.publisher}</div>
      </div>
    `;

    resultsContainer.appendChild(card);
  });
}

buttons.forEach(button => {
  button.addEventListener("click", event => {
    event.preventDefault();

    const foodType = button.dataset.food;
    fetchFoodData(foodType)
      .then(data => renderResults(data))
      .catch(error => {
        resultsContainer.innerHTML = `<p style="color:red;">Error: ${error.message}</p>`;
      });
  });
});
