// our local environmental config file - gitignored
require("dotenv").config();

// gitignored keys for apis
var keys = require("./keys.js");

// axios required for calls to the various API's
const axios = require('axios');

// node-spotify-api for search and request methods 
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

//console.log(process.argv[2]);

//concert-this

//function to call bandsintown api
//axios get call 
/* 
function concertThis(artist) {
    //axios call to  bandsintown api
    axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp")
        .then(function (response) {
            //console.log(response);
            //console.log(response.data);
            //iterate over response object to get name/location/date of event
            for (key of response.data) {
                console.log("Appearing at the: " + key.venue.name);
                console.log("              At: " + key.venue.city + ', ' + key.venue.region);
                console.log("              On: " + moment(key.datetime).format("MM/DD/YYYY"));
                console.log("\n");
            }
        }).catch(function (error) {
            console.log(error);
        });
}
 */
//concertThis("Blink182");


//get name of artist
var artistName = function(artist) {
    return artist.name;
};

//spotify-this-song
//spotify
function spotifyThisSong(song) {

    //* If no song is provided then your program will default to "The Sign" by Ace of Base.
    if (song === "") {
        song = "The Sign";
    }


    spotify
        .search(
        {
            type: "track",
            query: song
        },
        function (err, data) {
            if (err) {
                console.log("Error occurred: " + err);
                return;
            }

            var tracks = data.tracks.items;

            for (var i = 0; i < tracks; i++) {
                console.log(i);

                console.log("Artist: " + songs[i].artists.map(artistName));
                console.log("Song: " + songs[i].name);
                console.log("Preview URL: " + songs[i].preview_url);
                console.log("Album: " + songs[i].album.name);
            }
        }
        );
};








//movie-this

function movieThis(movie) {

    //default movie = Mr Nobody
// <http://www.imdb.com/title/tt0485947/>
if(movie = "") {
    movie = "Mr Nobody";
}
// Then run a request with axios to the OMDB API with the movie specified
axios.get("http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy").then(
    function (response) {
        console.log(response.data);
        console.log("The movie's rating is: " + response.data.imdbRating);
    })
    .catch(function (error) {
        console.log(error);
    }
    );//end of spotify-this
};








+
//user choice 

function userChoice (caseData, functionData){
    switch (caseData) {
    case "concert-this":
        concertThis(functionData);
        break;
    case "spotify-this-song":
        spotifyThisSong(functionData);
        break;
    case "movie-this":
        movieThis(functionData);
        break;
    // case "do-what-it-says":
    //     doWhatItSays(functionData);
    //     break;
    default:
        console.log("My responses are limited.");
    }
};

//get choice to pass to userChoice
function getChoice(argOne, argTwo) {
    userChoice(argOne, argTwo);
};

getChoice(process.argv[2], process.argv.slice(3).join(" "));