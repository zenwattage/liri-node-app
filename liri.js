
// our local environmental config file - gitignored
require("dotenv").config();

// gitignored keys for apis
var keys = require("./keys.js");

// axios required for calls to the various API's
const axios = require("axios");

// node-spotify-api for search and request methods 
var Spotify = require("node-spotify-api");

//color for terminal output
var colors = require('colors');

// file system interaction package
const fs = require("fs");

// moment npm for date formatting
var moment = require("moment");


//create spotify object with keys linked
var spotify = new Spotify(keys.spotify);


//get name of artist
var artistName = function (artist) {
    return artist.name;
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
                console.log("No info for band: ".red + artist.red);
                return;
            }

            console.log("\n"+ artist.rainbow + "'s upcoming shows are: ".rainbow);

            //iterate over response object to get name/location/date of event
            for (var i = 0; i < bandData.length; i++) {
                var show = bandData[i];

                // Print data about each concert
                // If a concert doesn't have a region, display the country instead
                // Use moment to format the date
                console.log(i);
                console.log(show.venue.city.cyan +
                    "," +
                    (show.venue.region || show.venue.country).blue +
                    " at " +
                    show.venue.name.blue +
                    " " +
                    moment(show.datetime).format("MM/DD/YYYY").magenta
                );
            }
        }).catch(function (error) {
            console.log(" ¯\_(ツ)_/¯ ".rainbow + error);
        });
}


//spotify-this-song
//spotify
function spotifyThisSong(songName) {
    //* If no song is provided then your program will default to "The Sign" by Ace of Base.
    if (songName === "") {
        songName = "The Sign";
    }

    spotify.search(
        {
          type: "track",
          query: songName
        },
        function(err, data) {
          if (err) {
            console.log(" ¯\_(ツ)_/¯ ".rainbow + error);
            return;
          }
    
          var songs = data.tracks.items;
    
          for (var i = 0; i < songs.length; i++) {
            console.log(i);
            //map each artist index to aristName
            console.log("Artist: ".blue + songs[i].artists.map(artistName));
            console.log("Song name: ".blue + songs[i].name.cyan);
            console.log("Preview song: ".green + songs[i].preview_url);
            console.log("Album: " + songs[i].album.name.blue);
            console.log("  ٩(⁎❛ᴗ❛⁎)۶ ".rainbow);
          }
        }
      );
};

//movie-this

function movieThis(movie) {

    //default movie = Mr Nobody
    // <http://www.imdb.com/title/tt0485947/>
    if (movie === "") {
        movie = "Mr Nobody";
    }

    var omdbURL = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&tomatoes=true&apikey=trilogy";

    axios.get(omdbURL).then(
        function (response) {
      var movieData = response.data;
        
      console.log("\n    ( ಠ ͜ʖರೃ)   Welcome to Movie Line  ( ಠ ͜ʖರೃ) ".rainbow);
      console.log("\nYou searched for: ".grey + movieData.Title);
      console.log("Made in: ".grey + movieData.Year);
      console.log("Rated: ".gray + movieData.Rated.blue);
      console.log("IMDB Rating: ".gray + movieData.imdbRating.yellow);
      console.log("Country: ".gray + movieData.Country.blue);
      console.log("Language: ".grey + movieData.Language.magenta);
      console.log("Plot: ".gray + movieData.Plot.cyan);
      console.log("Actors: ".gray + movieData.Actors.magenta);
      console.log("Rotten Tomatoes: ".red + movieData.Ratings[1].Value);
    }).catch(function (error) {
        console.log(" ¯\_(ツ)_/¯ ".rainbow + error);
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
            console.log(" ¯\_(ツ)_/¯ ".rainbow);
    }
};

//get choice to pass to userChoice
function getChoice(argOne, argTwo) {
    userChoice(argOne, argTwo);
};

getChoice(process.argv[2], process.argv.slice(3).join(" "));