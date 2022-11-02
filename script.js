var searchButton = document.getElementById("searchbutton");
var target = document.querySelector('.tryme');
var actorsName = document.querySelector('.actor-name');
var runTime = document.querySelector('.run-time');
var year = document.querySelector('.release-date');

var apiCall1 = async function(apiStringArg) {
    let apiString = 'https://movie-quote.p.rapidapi.com/movie/' + apiStringArg;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '5ebb6aa8efmshfac7a21f2e6f2f3p1d6515jsnc1ece5cfcc62',
            'X-RapidAPI-Host': 'movie-quote.p.rapidapi.com'
        }
    }
    let response = await fetch(apiString, options)
    let data = await response.json()
    console.log(data)
    var dataresponse = data[0].title
    getMovie(dataresponse)
}

var getMovie = async function(apiResult) {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'e41c2950bamsh87b13cf18050365p16b40djsnc1880d0106ba',
            'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
        }
    }
    let response = await fetch(`https://online-movie-database.p.rapidapi.com/title/find?q=${apiResult}`, options)
    let data = await response.json();
    actors = [];
    for (let i = 0; i < data.results[0].principals.length; i++) {
        actorI = data.results[0].principals[i]["legacyNameText"];
        actors.push(actorI);
      }
    console.log("Main Actors: " + actors)
    console.log("Running Time: " + data.results[0].runningTimeInMinutes)
    console.log("Year: " + data.results[0].year)
    var run = data.results[0].runningTimeInMinutes;
    var date = data.results[0].year;
    var imgresponse = data.results[0].image["url"];
    var movieImg = document.createElement('img');
    movieImg.setAttribute('src', imgresponse);
    var card = document.createElement('div');
    card.setAttribute('class', 'img-class');
    card.append(movieImg);
    target.append(card);
    actorsName.append(actors);
    runTime.append(run +" Minutes");
    year.append(date);
    
}

searchButton.addEventListener("click", function() {
    
    var input = document.querySelector('#user-input').value;
    var userInput = input.toString();
    var userInputParsed = userInput.split(" ");
    
    var userInputParsedAPI = userInputParsed.join("%20");
    apiCall1(userInputParsedAPI)

    }
        
    
);
