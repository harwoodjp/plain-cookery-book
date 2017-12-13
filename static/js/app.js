const charlesHtml = document.querySelector(".charles"),
	scrollNumberHtml = document.querySelector(".scroll .number"),
	scrollTitleHtml = document.querySelector(".scroll .title"),
	scrollTextHtml = document.querySelector(".scroll .text")

const f = fetch("/static/data/recipes.json").then(response => response.text())

f.then(recipe => {
	const recipes = JSON.parse(recipe)
	let randomIndex = Math.floor(Math.random() * recipes.length) + 1

	function renderNewRecipe(recipeIndex) {
		scrollNumberHtml.innerHTML = `No. ${recipes[recipeIndex].id}`
		scrollTitleHtml.innerHTML = `${recipes[recipeIndex].title}`
		scrollTextHtml.innerHTML = `${recipes[recipeIndex].text}`
	}

	renderNewRecipe(randomIndex)

	charlesHtml.addEventListener("click", function() {
		randomIndex = Math.floor(Math.random() * recipes.length) + 1
		renderNewRecipe(randomIndex)
	})

})