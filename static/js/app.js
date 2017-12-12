document.querySelector("img").addEventListener("click", function() {
	console.log(document.querySelector("h2").innerHTML)
	document.querySelector("h2").innerHTML = "Sharp Sauce for Broiled Meats"
	document.querySelector("span").innerHTML = "No. 21"
	document.querySelector("p").innerHTML = `
		Chop fine an onion and a pennyworth of mixed pickles; put these into a saucepan with half-a-gill of vinegar, a tea-spoonful of mustard, a small bit of butter, a large table-spoonful of bread-raspings, and pepper and salt to season; boil all together on the fire for at least six minutes; then add a gill of water, and allow the sauce to boil again for ten minutes longer. This sauce will give an appetizing relish to the coarsest meats or fish when broiled or fried, and also when you are intending to make any cold meat into a hash or stew. In the latter case, the quantity of water and raspings must be doubled.
	`
})