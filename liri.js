// our local environmental config file - gitignored
require("dotenv").config();

// gitignored keys for apis
var keys = require("./keys.js");

// axios required for calls to the various API's
const axios = require('axios');

// node-spotify-api for search and request methods (thanks Denis Molloy)
var Spotify = require('node-spotify-api');
//create spotify object with keys linked
var spotify = new Spotify(keys.spotify);

// file system interaction package
const fs = require('fs');

// moment npm for date formatting
var moment = require('moment');

//bandsintown
//"https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"

//omdb
// http://www.omdbapi.com/?i=tt3896198&apikey=2e1c1418

//default movie = Mr. Nobody
// <http://www.imdb.com/title/tt0485947/>


//console.log(process.argv[2]);

//concert-this

//function to call bandsintown api
//axios get call 

function concertThis(artist) {

    //axios call to  bandsintown api
    axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp")
    .then( function(response) {
        console.log(reponse);

    })


}


  


//spotify-this-song
spotify
  .request('https://api.spotify.com/v1/tracks/7yCPwWs66K8Ba5lFuU2bcx')
  .then(function(data) {
    console.log(data); 
  })
  .catch(function(err) {
    console.error('Error occurred: ' + err); 
  });


//movie-this

 // Then run a request with axios to the OMDB API with the movie specified
 axios.get("http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&apikey=trilogy").then(
    function(response) {
      console.log("The movie's rating is: " + response.data.imdbRating);
    }
  );


//do-what-it-says 


//control for which process.argv[2] gets entered
// choice = process.argv[2];
// if (choice === concert-this){
//     concertThis(artis)
// } else if (),etc


// or switch case
// switch(choice) {
//     case "concert-this":
//     concertThis(artist);
//     break;etc
// }