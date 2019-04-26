// our local environmental config file - gitignored
require("dotenv").config();

// gitignored keys for apis
var keys = require("./keys.js");

// axios required for calls to the various API's
const axios = require('axios');

// file system interaction package
const fs = require('fs');

// moment npm for date formatting
var moment = require('moment');

// omdb url
//"http://www.omdbapi.com/?q=songTitle&apikey=trilogy";

//var spotify = new Spotify(keys.spotify);
//console.log(process.argv[2]);

//concert-this

//function to bandsintown api
//axios get call 
/* 
function concertThis() {

    //axios call to 

}
 */

 // Then run a request with axios to the OMDB API with the movie specified
axios.get("http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&apikey=trilogy").then(
    function(response) {
      console.log("The movie's rating is: " + response.data.imdbRating);
    }
  );
  


//spotify-this-song
//movie-this
//do-what-it-says 

