

var SpotifyWebApi = require('spotify-web-api-node');
var open = require('open');
var fs = require('fs');

var scopes = ['playlist-modify-private', 'playlist-modify-public'],
  redirectUri = 'http://127.0.0.1:5500/Dyeify/src/index.html',

  clientId = 'f3ec916c906f484c9ab9d3e8038aba05',
  clientSecret = '6bfe8ca08d914683a9c71d6d35655e3c',
  state = 'some-state-of-my-choice';

// Setting credentials can be done in the wrapper's constructor, or using the API object's setters.
var spotifyApi = new SpotifyWebApi({
  redirectUri: redirectUri,
  clientId: clientId,
  clientSecret: clientSecret
});

// Create the authorization URL
// var authorizeURL = spotifyApi.createAuthorizeURL(scopes, state);

function buttonAuth(){
  var authorizeURL = spotifyApi.createAuthorizeURL(scopes, state);
  fs.writeFile('Link.txt', authorizeURL, (err) => {

    // Make button disappear after pressing
    document.getElementById("button").style.display = "none";
    // In case of a error throw err.
    if (err) throw err;
})
}
buttonAuth();

function openLink() {
  window = Window;
  window.open("https://accounts.spotify.com/authorize?client_id=f3ec916c906f484c9ab9d3e8038aba05&response_type=code&redirect_uri=http://127.0.0.1:5500/Dyeify/src/index.html&scope=playlist-modify-private%20playlist-modify-public&state=some-state-of-my-choice");
}

var getArtist = function (genre){
  $.ajax({
      url: 'https://api.spotify.com/v1/Search/',   
      success: function (response) {  
          callback(response);
      }
  });
};

function x(){
console.log(getArtist);
}

var addplaylist = function (id,token) {
  spotifyApi.addTracksToPlaylist('5ieJqeLJjjI8iJWaxeBLuK', ["spotify:track:4iV5W9uYEdYUVa79Axb7Rh", "spotify:track:1301WleyT98MSxVHPZCA6M"])
  .then(function(data) {
    console.log('Added tracks to playlist!');
  }, function(err) {
    console.log('Something went wrong!', err);
  });
};

function getTopSong(songID){
  spotifyApi.getArtistTopTracks(songID,)
  .then(function(data){
    console.log(data.body);
    }, function(err) {
    console.log('Something went wrong!', err);
  });
}

function makePlaylist(name, desc){
  var playlist = spotifyApi.createPlaylist(name, { 'description': desc, 'public': true })
  .then(function(data) {
    console.log('Created playlist!');
  }, function(err) {
    console.log('Something went wrong!', err);
  });
}

function fillPlaylist(color){
  const colorDict = colorDict();
  hsl = colorDict.getHSLColour();
  genreKey = evaluateGenre(hsl[0], hsl[1], hsl[2]);
  genre = colorDict.hueDictionary(genreKey);
  artist = getArtist(genre);
  topSong = getTopSong(artist);
  spotifyApi.addTracksToPlaylist(playlist, topSong)
  .then(function(data) {
    console.log('Added tracks to playlist!');
  }, function(err) {
    console.log('Something went wrong!', err);
  });

}


// https://accounts.spotify.com:443/authorize?client_id=5fe01282e44241328a84e7c5cc169165&response_type=code&redirect_uri=https://example.com/callback&scope=user-read-private%20user-read-email&state=some-state-of-my-choice
// open(authorizeURL);


// var code = 'AQDSWjMykUfdMHBMs8kgdeBG6_ke6vZJy-4myxKS6Gymm-ooyzffAw1jU9k-PU8IqVqHdCKTu0IoGM1lny-0g7xa-OVHPsOzREOavNHHv1KiV0wwSj3HRH9xlmcOyQ_PkIgJ_0Upf0tuUywC0HjQODp6JBnI-RA9w9RBicS-dDmfnS1Ys25tFm3FJgA4BG5reWQJaH_-4oVPTSsEvoiwuHJwEUxWBIpmYgYp-ctWT1HxdpjwQzA78zknKs4yck3p';

// spotifyApi.authorizationCodeGrant(code).then(
//   function(data) {
//     console.log('The token expires in ' + data.body['expires_in']);
//     console.log('The access token is ' + data.body['access_token']);
//     console.log('The refresh token is ' + data.body['refresh_token']);

//     // Set the access token on the API object to use it in later calls
//     spotifyApi.setAccessToken(data.body['access_token']);
//     spotifyApi.setRefreshToken(data.body['refresh_token']);
//   },
//   function(err) {
//     console.log('Something went wrong!', err);
//   }
// );

// spotifyApi.setAccessToken('BQASBskpprbTXAAZ1vAF-DOSVLmDVBk37OEU3O3MT7QYXHokZT1eAUaMoVPf9cYbv0P5ICGPNp6hXN-4bMu2aTX3nkWB_0hhLzdsjCcQJ4vy9Kw210Sdt6BY19l_yy9pzzmYHmgn8Lc7ifRXLY7nSM5CuEQmmOM9u29Jo7u51hATOPnqiol2LsKQovI-ZpyvEVE9rrD1rmNJ9dEISzBwxTIlA6SSGrKn5M-q9DCj3C-Ar4ZkHewXiAgSbAT3PaEKd74');
