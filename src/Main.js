var SpotifyWebApi = require('spotify-web-api-node');

var scopes = ['playlist-modify-private'],
  redirectUri = 'http://127.0.0.1:5500/Testing/index.html',
  clientId = 'f3ec916c906f484c9ab9d3e8038aba05',
  state = 'some-state-of-my-choice';

// Setting credentials can be done in the wrapper's constructor, or using the API object's setters.
var spotifyApi = new SpotifyWebApi({
  redirectUri: redirectUri,
  clientId: clientId
});

// Create the authorization URL
var authorizeURL = spotifyApi.createAuthorizeURL(scopes, state);

// https://accounts.spotify.com:443/authorize?client_id=5fe01282e44241328a84e7c5cc169165&response_type=code&redirect_uri=https://example.com/callback&scope=user-read-private%20user-read-email&state=some-state-of-my-choice
console.log(authorizeURL);

// spotifyApi.setAccessToken('<your_access_token>');

// spotifyApi.createPlaylist('My playlist', { 'description': 'My description', 'public': true })
//   .then(function(data) {
//     console.log('Created playlist!');
//   }, function(err) {
//     console.log('Something went wrong!', err);
//   });