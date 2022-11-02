console.log("!")

var searchButton = document.getElementById("searchbutton");
var target = document.querySelector('.tryme');
var word = ("");


var apiCall1 = async function(apiStringArg) {
    let apiString = 'https://movie-quote.p.rapidapi.com/movie/' + apiStringArg;
    console.log("apiString", apiString)

    //https://juanroldan1989-moviequotes-v1.p.rapidapi.com/api/v1/quotes?actor=Al%20Pacino
    //let apiString = 'https://movie-quote.p.rapidapi.com/movie/' + userInputParsedAPI;
    console.log("abc", apiString);
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'ffa3000414msh344555768ec4681p1303dfjsn649283dc7eec',
            'X-RapidAPI-Host': 'movie-quote.p.rapidapi.com'
        }
    }
    let response = await fetch(apiString, options)
    let data = await response.json()
    //  console.log(data[0])
    var dataresponse = data[0].title
    getMovie(dataresponse)
}
// var test = apiCall1(apiString);
// console.log(test);
var getMovie = async function(apiResult) {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '3ebc1f76c0mshef9eda572bd8879p1d1b63jsn7d3240cccc5a',
            'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
        }
    }
    let response = await fetch(`https://online-movie-database.p.rapidapi.com/title/find?q=${apiResult}`, options)
    console.log("response", response)
    let data = await response.json();
    console.log(data.results[0].image["url"]);
    var imgresponse = data.results[0].image["url"];
    console.log(imgresponse);
    var movieImg = document.createElement('img');
    movieImg.setAttribute('src', imgresponse);
    var card = document.createElement('div');
    card.setAttribute('class', 'img-class');
    card.append(movieImg);
    target.append(card);
        // .then(response => response.json())
        // .then(response => console.log(response.results))
        // .catch(err => console.error(err));
}

searchButton.addEventListener("click", function() {
    
    var input = document.querySelector('#user-input').value;
    var userInput = input.toString();
    var userInputParsed = userInput.split(" ");
    
    var userInputParsedAPI = userInputParsed.join("%20");
    console.log("userInputParsedAPI", userInputParsedAPI);
    apiCall1(userInputParsedAPI)

    }
        
    
);
/*
document.getElementById('')
console.log(init());
//searchButton.addEventListener("click", apiCall1(apiString));
// var movieImg = document.createElement('img');
// movieImg.append()
// movieImg.setAttribute('src', 'movieImg bg-primary h-100 text-white'); */
