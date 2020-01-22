const searchForm = document.getElementById('searchForm');
const results = document.getElementById('results');

// Listen for Form Submit
searchForm.addEventListener('submit', handleSearchSubmit);

// Handle Form Submit
function handleSearchSubmit(event) {
  // get search input when the submit button is pressed
  const input = document.getElementById('query');
  const query = input.value;
  // stop page reload
  event.preventDefault();
  // log the search value in the search box
  // console.log(query.value);

  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
    .then((dataStream) => dataStream.json())
    .then((dataObj) => {
      // console.log(dataObj);
      input.value = "";
      render(dataObj.meals)
    })
    .catch((err) => console.log(err));
}

// Render Results to DOM
function render(recipesArr) {
  results.innerHTML = "";
  const cards = recipesArr.map((recipe) => {
    return getTemplate(recipe)
  }).join('');

  results.insertAdjacentHTML("afterbegin", cards);

}

function getTemplate(recipeObj) {
  return `
  <div class="col-md-4 mb-3">
    <div class="card">
      <img src="${recipeObj.strMealThumb}" alt="${recipeObj.strMeal}" height="250" />
    </div>
    <div class="card-body">
      <h5>${recipeObj.strMeal}</h5>
      <p>${recipeObj.strInstructions}</p>
      <a class="btn btn-primary" href="${recipeObj.strSource}">See Details</a>
    </div>
  </div>
  `;
}
