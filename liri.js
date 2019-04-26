require("dotenv").config();

var keys = require("./keys.js");

var spotify = new Spotify(keys.spotify);
console.log(process.argv[2]);

//concert-this
//spotify-this-song
//movie-this
//do-what-it-says 