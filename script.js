var searchButton = document.getElementById("searchbutton");
var target = document.querySelector('.tryme');
var actorsName = document.querySelector('.actor-name');
var runTime = document.querySelector('.run-time');
var year = document.querySelector('.release-date');
var title = document.querySelector('.movie-title')
var textArea = document.querySelector('.textarea');
var movieImg = document.createElement('img');
var card = document.createElement('div');

var reverseString = function(string) {
    var string2 = string.split(" ");
    var string3 = "";
    for (let i = string2.length - 1; i >= 0; i--) {
         string3 = string3.concat(string2[i], " ")
    }
    return string3;
}

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
        if (i === 0) {
            actorI = data.results[0].principals[i]["legacyNameText"].replace(",", "")
            actorI = reverseString(actorI);
        }

        else {
            actorI = data.results[0].principals[i]["legacyNameText"].replace(",", "") + " "; 
            actorI = reverseString(actorI);
        }
       
        actors.push(actorI);
      }
    var movieTitle = data.results[0].title;
    var run = data.results[0].runningTimeInMinutes;
    var date = data.results[0].year;
    var imgresponse = data.results[0].image["url"];
    movieImg.setAttribute('src', imgresponse); 
    card.setAttribute('class', 'img-class');
    card.remove();
    card.append(movieImg);
    target.append(card);
    title.textContent = "";
    actorsName.textContent = "";
    runTime.textContent = "";
    year.textContent = "";
    title.append(movieTitle);
    actorsName.append(actors);
    actorsName.textContent = actorsName.textContent.replaceAll(" ,", ",");
    runTime.append(run +" Minutes");
    year.append(date);
    
}

searchButton.addEventListener("click", (e) => {
    var input = document.querySelector('#user-input').value;
    var userInput = input.toString();
    var userInputParsed = userInput.split(" ");
    var history = {quote: input.trim()};
    localStorage.setItem("history", JSON.stringify(history));
    textArea.append(history["quote"] + " ");
    var userInputParsedAPI = userInputParsed.join("%20");
    apiCall1(userInputParsedAPI)
})


        
    

