


// our local environmental config file - gitignored
require("dotenv").config();

// gitignored keys for apis
var keys = require("./keys.js");

// axios required for calls to the various API's
const axios = require("axios");

// node-spotify-api for search and request methods 
var Spotify = require("node-spotify-api");



// file system interaction package
const fs = require("fs");

// moment npm for date formatting
var moment = require("moment");

//bandsintown
//"https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"

//omdb
// http://www.omdbapi.com/?i=tt3896198&apikey=2e1c1418

//console.log(process.argv[2]);

// choice selections

console.log("-----The commands available are below -----");
console.log("\n   concert-this <band name>");
console.log("\n   spotify-this-song <song name> ");
console.log("\n   movie-this <movie name> ");
console.log("\n");
console.log("\n *** end of menu ***")
console.log("\n");

//create spotify object with keys linked
var spotify = new Spotify(keys.spotify);


//get name of artist
var artistName = function (artist) {
    return artist.name;
};

//spotify-this-song
//spotify
function spotifyThisSong(songName) {
    //* If no song is provided then your program will default to "The Sign" by Ace of Base.
    if (songName === undefined) {
        songName = "The Sign";
    }

    spotify.search(
        {
          type: "track",
          query: songName
        },
        function(err, data) {
          if (err) {
            console.log("Error occurred: " + err);
            return;
          }
    
          var songs = data.tracks.items;
    
          for (var i = 0; i < songs.length; i++) {
            console.log(i);
            //map each artist index to aristName
            console.log("artist(s): " + songs[i].artists.map(artistName));
            console.log("song name: " + songs[i].name);
            console.log("preview song: " + songs[i].preview_url);
            console.log("album: " + songs[i].album.name);
            console.log("-----------------------------------");
          }
        }
      );
};



//concert-this

//function to call bandsintown api
//axios get call 

function getThisBand(artist) {

    var bandURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
    //axios call to  bandsintown api
    axios.get(bandURL)
        .then(function (response) {

            var bandData = response.data;

            //output if there is no response data
            if (!bandData.length) {
                console.log("No info for band: " + artist);
                return;
            }

            console.log(artist + "'s upcoming shows are: ");

            //iterate over response object to get name/location/date of event
            for (var i = 0; i < bandData.length; i++) {
                var show = bandData[i];

                // Print data about each concert
                // If a concert doesn't have a region, display the country instead
                // Use moment to format the date
                console.log(
                    show.venue.city +
                    "," +
                    (show.venue.region || show.venue.country) +
                    " at " +
                    show.venue.name +
                    " " +
                    moment(show.datetime).format("MM/DD/YYYY")
                );
            }
        }).catch(function (error) {
            console.log(error);
        });
}

//movie-this

function movieThis(movie) {

    //default movie = Mr Nobody
    // <http://www.imdb.com/title/tt0485947/>
    if (movie === "") {
        movie = "Mr Nobody";
    }

    var omdbURL = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=full&tomatoes=true&apikey=trilogy";

    axios.get(omdbURL).then(
        function (response) {
      var jsonData = response.data;

      console.log("Title: " + jsonData.Title);
      console.log("Year: " + jsonData.Year);
      console.log("Rated: " + jsonData.Rated);
      console.log("IMDB Rating: " + jsonData.imdbRating);
      console.log("Country: " + jsonData.Country);
      console.log("Language: " + jsonData.Language);
      console.log("Plot: " + jsonData.Plot);
      console.log("Actors: " + jsonData.Actors);
      console.log("Rotten Tomatoes Rating: " + jsonData.Ratings[1].Value);
    });
};



//user choice 

function userChoice(caseData, functionData) {
    switch (caseData) {
        case "concert-this":
            getThisBand(functionData);
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