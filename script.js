/* movie quotes api fetch
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e41c2950bamsh87b13cf18050365p16b40djsnc1880d0106ba',
		'X-RapidAPI-Host': 'movies-quotes.p.rapidapi.com'
	}
};

fetch('https://movies-quotes.p.rapidapi.com/list', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

// online movie database api fetch 
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e41c2950bamsh87b13cf18050365p16b40djsnc1880d0106ba',
		'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
	}
};

fetch('https://online-movie-database.p.rapidapi.com/auto-complete?q=game%20of%20thr', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

    */

var userInput = "";
var userInputparsed = userInput.split("");
var userInputParsedAPI = userInputparsed.join("%20");
