
fetch("https://edamam-food-and-grocery-database.p.rapidapi.com/parser?ingr=apple"{
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "edamam-food-and-grocery-database.p.rapidapi.com",
		"x-rapidapi-key": "220a73f2e6msh0eaa76439d0b2b5p16b231jsna6f7a5b78fcb"
	}
}).then(response => {
	const data = response.json();
    console.log(data);
})
.then(data => {
	console.log(data);
	document.getElementById('para-output-1').innerText = 'data.'
	
})
.catch(err => {
	console.error(err);
});