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
 - will return upcoming concert dates for chosen band

``` node liri.js spotify-this-song <song name here> ```

<img src="https://github.com/zenwattage/liri-node-app/blob/master/spotify-this.JPG" width="450">

``` node liri.js movie-this  <movie title>```

- will return info for the movie chosen

``` node liri.js do-what-it-says ```

- will return spotify-this-song search for the song name in random.txt



  


## Support

Please [open an issue](https://github.com/zenwattage/liri-node-app/issues/new) for support.

## Contributing

Please contribute using [Github Flow](https://guides.github.com/introduction/flow/). Create a branch, add commits, and [open a pull request](https://github.com/zenwattage/liri-node-app/compare).
Window size: 1280 x 773
Viewport size: 1280 x 636