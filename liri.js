// our local environmental config file - gitignored
require("dotenv").config();

// axios required for calls to the various API's
const axios = require('axios');
// file system interaction package
const fs = require('fs');
// gitignored keys for apis
var keys = require("./keys.js");
// moment npm for date formatting
var moment = require('moment');

//moment().format();

//var spotify = new Spotify(keys.spotify);
console.log(process.argv[2]);

//concert-this
//spotify-this-song
//movie-this
//do-what-it-says 

