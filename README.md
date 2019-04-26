# liri-node-app
~~SIRI~~ LIRI will search Spotify for songs, Bands in Town for concerts, and OMDB for movies.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Support](#support)
- [Contributing](#contributing)


## Installation

 We'll be sending requests using the `axios` package to the Bands in Town, Spotify and OMDB APIs.

 ```
 npm install 
 git add . && git commit -m 'installed node modules'
 git push

 ```

* [Node-Spotify-API](https://www.npmjs.com/package/node-spotify-api)

* [Axios](https://www.npmjs.com/package/axios)

* You'll use Axios to grab data from the [OMDB API](http://www.omdbapi.com) and the [Bands In Town API](http://www.artists.bandsintown.com/bandsintown-api)

* [Moment](https://www.npmjs.com/package/moment)

* [DotEnv](https://www.npmjs.com/package/dotenv)


## Usage
 ``` node liri.js concert-this <artist/band name here> ```

   * This will search the Bands in Town Artist Events API (`"https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"`) for an artist and render the following information about each event to the terminal:

     * Name of the venue

     * Venue location

     * Date of the Event (use moment to format this as "MM/DD/YYYY")

``` node liri.js spotify-this-song '<song name here> ```

   * This will show the following information about the song in your terminal/bash window

     * Artist(s)

     * The song's name

     * A preview link of the song from Spotify

     * The album that the song is from


## Support

Please [open an issue](https://github.com/zenwattage/liri-node-app/issues/new) for support.

## Contributing

Please contribute using [Github Flow](https://guides.github.com/introduction/flow/). Create a branch, add commits, and [open a pull request](https://github.com/zenwattage/liri-node-app/compare).
Window size: 1280 x 773
Viewport size: 1280 x 636