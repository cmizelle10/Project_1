var userInput = "He is the chosen one";
var userInputParsed = userInput.split(" ");
var word = ("");
var userInputParsedAPI = userInputParsed.join("%20");
apiString = 'https://movie-quote.p.rapidapi.com/movie/' + userInputParsedAPI;
var apiCall1 = async function(string1) {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '3ebc1f76c0mshef9eda572bd8879p1d1b63jsn7d3240cccc5a',
            'X-RapidAPI-Host': 'movie-quote.p.rapidapi.com'
        }
    };
    let response = await fetch(string1, options)
    let data = await response.json()
    //  console.log(data[0])
    var dataresponse = data[0].title
    getMovie(dataresponse)
}
// var test = apiCall1(apiString);
// console.log(test);
var getMovie = function(apiResult) {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '3ebc1f76c0mshef9eda572bd8879p1d1b63jsn7d3240cccc5a',
            'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
        }
    };
     fetch(`https://online-movie-database.p.rapidapi.com/title/find?q=${apiResult}`, options)
        .then(response => response.json())
        .then(response => console.log(response.results))
        .catch(err => console.error(err));
}
apiCall1(apiString);
