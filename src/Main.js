var Spotify = require('spotify-web-api-js');
var s = new Spotify();

var spotifyApi = new SpotifyWebApi();


spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE', function (err, data) {
    if (err) console.error(err);
    else console.log('Artist albums', data);
  });
  
  // get Elvis' albums, using Promises through Promise, Q or when
  spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE').then(
    function (data) {
      console.log('Artist albums', data);
    },
    function (err) {
      console.error(err);
    }
  );

  var prev = null;

function onUserInput(queryTerm) {
  // abort previous request, if any
  if (prev !== null) {
    prev.abort();
  }

  // store the current promise in case we need to abort it
  prev = spotifyApi.searchTracks(queryTerm, { limit: 5 });
  prev.then(
    function (data) {
      // clean the promise so it doesn't call abort
      prev = null;

      // ...render list of search results...
    },
    function (err) {
      console.error(err);
    }
  );
}

// passing a callback - get Elvis' albums in range [20...29]
spotifyApi.getArtistAlbums(
    '43ZHCT0cAZBISjO8DG9PnE',
    { limit: 10, offset: 20 },
    function (err, data) {
      if (err) console.error(err);
      else console.log('Artist albums', data);
    }
  );
  
  // using Promises through Promise, Q or when - get Elvis' albums in range [20...29]
  spotifyApi
    .getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE', { limit: 10, offset: 20 })
    .then(
      function (data) {
        console.log('Album information', data);
      },
      function (err) {
        console.error(err);
      }
    );


    // get multiple albums
spotifyApi.getAlbums(['5U4W9E5WsYb2jUQWePT8Xm', '3KyVcddATClQKIdtaap4bV']).then(
    function (data) {
      console.log('Albums information', data);
    },
    function (err) {
      console.error(err);
    }
  );
  
  // get an artists
  spotifyApi.getArtist('2hazSY4Ef3aB9ATXW7F5w3').then(
    function (data) {
      console.log('Artist information', data);
    },
    function (err) {
      console.error(err);
    }
  );
  
  // get multiple artists
  spotifyApi
    .getArtists(['2hazSY4Ef3aB9ATXW7F5w3', '6J6yx1t3nwIDyPXk5xa7O8'])
    .then(
      function (data) {
        console.log('Artists information', data);
      },
      function (err) {
        console.error(err);
      }
    );
  
  // get albums by a certain artist
  spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE').then(
    function (data) {
      console.log('Artist albums', data);
    },
    function (err) {
      console.error(err);
    }
  );
  
  // search tracks whose name, album or artist contains 'Love'
  spotifyApi.searchTracks('Love').then(
    function (data) {
      console.log('Search by "Love"', data);
    },
    function (err) {
      console.error(err);
    }
  );
  
  // search artists whose name contains 'Love'
  spotifyApi.searchArtists('Love').then(
    function (data) {
      console.log('Search artists by "Love"', data);
    },
    function (err) {
      console.error(err);
    }
  );
  
  // search tracks whose artist's name contains 'Love'
  spotifyApi.searchTracks('artist:Love').then(
    function (data) {
      console.log('Search tracks by "Love" in the artist name', data);
    },
    function (err) {
      console.error(err);
    }
  );