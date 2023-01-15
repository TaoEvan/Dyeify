/* Load the HTTP library */
var http = require('http');

/* Create an HTTP server to handle responses */

http
  .createServer(function(request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.write('Hello World');
    response.end();
  })
  .listen(8888);

var SpotifyWebApi = require('spotify-web-api-node');
var open = require('open');
var readline = require('readline-sync');

var scopes = ['playlist-modify-private'],
  redirectUri = 'https://localhost:8888/callback',
  clientId = 'f3ec916c906f484c9ab9d3e8038aba05',
  state = 'some-state-of-my-choice';

// Setting credentials can be done in the wrapper's constructor, or using the API object's setters.
var spotifyApi = new SpotifyWebApi({
  redirectUri: redirectUri,
  clientId: clientId
});

// Create the authorization URL
var authorizeURL = spotifyApi.createAuthorizeURL(scopes, state);

// spotifyApi.authorizationCodeGrant(code).then(
//   function(data) {
//     console.log('The token expires in ' + data.body['expires_in']);
//     console.log('The access token is ' + data.body['access_token']);
//     console.log('The refresh token is ' + data.body['refresh_token']);
// })

// https://accounts.spotify.com:443/authorize?client_id=5fe01282e44241328a84e7c5cc169165&response_type=code&redirect_uri=https://example.com/callback&scope=user-read-private%20user-read-email&state=some-state-of-my-choice
open(authorizeURL);

var token = readline.question('please input token');

console.log(token);

// spotifyApi.setAccessToken('AQCc96X56lUM7p2IcP_tCDuh3NIope2QZrODqHEqaMULiadwmFMNggBA0d5rcP7ZZpHzx1PlYtaVF2EjMrscP-gj-uY5Lq7aX_QPbDXoitS45THlJbHS0REhZV38s8VoIufv50e1qBGx3QvzSLLDjXWx1qvi1HHV-EibAEnRd2TuwndgflQ2LyPAXCHqXq7XmFmzj4Rbdgd9t4FS');

// spotifyApi.createPlaylist('My playlist', { 'description': 'My description', 'public': true })
//   .then(function(data) {
//     console.log('Created playlist!');
//   }, function(err) {
//     console.log('Something went wrong!', err);
//   });