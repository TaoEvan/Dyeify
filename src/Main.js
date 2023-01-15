

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

var hueDictionary = {
  /*
  
  soul = brown,
  
  reggae = red,
  
  pop = yellow,
   // NO ROCK IS RED
  rock = green,
  
  British folk = orange,
  
  electronica & dance = pink,
  
  avant-garde = grey,
  
  jazz = purple,
  
  hip-hop = black,
  
  blues & country = blue,
  
  funk = another shade of blue,
  
  DJ Shadow & RZA = another shade of blue, and
  
  classical & soundtracks = yet another shade of blue.
  
  metal 
  
  */
  
    // red
  0.1:["Indie Rock"], //Red PEACH
  0.2:["Punk"], //Red PINK LIGHT
  0.3:["Rock"], //Red (shaded)
  0.4:["Classic Rock"], //Red (Clay REd/brownish red)
  0.5:["Indie Rock"], //Red dark brown red
  0.6:["Hard Rock"], //Red deep shade red 
  0.7:["Metal"], //Red grayish red 
  0.8:["Country"], //Red deep brown with red hint 
  0.9:["Emo"], //Red magma/purplish red 
  
  // orange 
  1.1:["Chillout"], // LIGHTEST
  1.2:["Ambient"], // True Light  
  1.3:["Electronic"], // TRUE 
  1.4:["Power Metal"], // light grey 
  1.5:["Techno"], // shade 
  1.6:["Electro"], // deep shade 
  1.7:["Metal"], // Grey 
  1.8:["Drum and bass"], // slight gray dark 
  1.9:["SOul"], // Deep Brown  ***SOUL
  
  //Yellow  ***POP
  2.1:["Jazz"],// LIGHTEST
  2.2:["Jazz"],// True Light  
  2.3:["Pop","Jazz"],// TRUE 
  2.4:["Jazz"],// light grey 
  2.5:["Jazz"],// shade 
  2.6:["Jazz"],// deep shade 
  2.7:["Metal"],// Grey 
  2.8:["Jazz"],// slight gray dark 
  2.9:["SOul"],// Deep Brown 
  
  // lime 
  3.1:["Jpop"],// LIGHTEST
  3.2:["Kpop"],// True Light  
  3.3:["Pop"],// TRUE 
  3.4:["R&B"],// light grey 
  3.5:["Indiepop"],// shade 
  3.6:["Funk"],// deep shade 
  3.7:["Metal"],// Grey 
  3.8:["Latin"],// slight gray dark 
  3.9:["Soul"],// Deep Brown 
  
  //green 
  4.1:["Christian"],// LIGHTEST
  4.2:["Lofi"],// True Light  
  4.3:["Chill Pop"],// TRUE 
  4.4:[""],// light grey 
  4.5:[""],// shade 
  4.6:[""],// deep shade 
  4.7:["Avant-garde"],// Grey 
  4.8:[""],// slight gray dark 
  4.9:[""],// Deep Brown 
  
  //neon green 
  5.1:[""],// LIGHTEST
  5.2:[""],// True Light  
  5.3:[""],// TRUE 
  5.4:[""],// light grey 
  5.5:[""],// shade 
  5.6:[""],// deep shade 
  5.7:[""],// Grey 
  5.8:[""],// slight gray dark 
  5.9:[""],// Deep Brown 
  
  // aqaua blue  
  6.1:[""],// LIGHTEST
  6.2:[""],// True Light  
  6.3:[""],// TRUE 
  6.4:[""],// light grey 
  6.5:[""],// shade 
  6.6:[""],// deep shade 
  6.7:[""],// Grey 
  6.8:[""],// slight gray dark 
  6.9:[""],// Deep Brown 
  
  //sky blue 
  7.1:[""],// LIGHTEST
  7.2:[""],// True Light  
  7.3:[""],// TRUE 
  7.4:[""],// light grey 
  7.5:[""],// shade 
  7.6:[""],// deep shade 
  7.7:[""],// Grey 
  7.8:[""],// slight gray dark 
  7.9:[""],// Deep Brown 
  
  // blue  
  8.1:["Blue & Country"],// LIGHTEST
  8.2:["Blue & Country"],// True Light  
  8.3:["Funk","Classical"],// TRUE 
  8.4:["BLues & Country"],// light grey 
  8.5:["DJ Shadow & RZA"],// shade 
  8.6:[""],// deep shade 
  8.7:[""],// Grey 
  8.8:[""],// slight gray dark 
  8.9:[""],// Deep Brown 
  
  // blue violet 
  9.1:["Classical"],// LIGHTEST
  9.2:[""],// True Light  
  9.3:["Jazz"],// TRUE 
  9.4:[""],// light grey 
  9.5:[""],// shade 
  9.6:[""],// deep shade 
  9.7:[""],// Grey 
  9.8:[""],//   slight gray dark 
  9.9:[""],// Deep Brown 
  
  // violet pink 
  10.1:[""],// LIGHTEST
  10.2:[""],// True Light  
  10.3:["Jazz"],// TRUE 
  10.4:["Rap"],// light grey 
  10.5:[""],// shade 
  10.6:[""],// deep shade 
  10.7:[""],// Grey 
  10.8:[""],// slight gray dark 
  10.9:[""],// Deep Brown 
  
  // pink 
  11.1:[""],// LIGHTEST
  11.2:[""],// True Light  
  11.3:[""],// TRUE 
  11.4:[""],// light grey 
  11.5:[""],// shade 
  11.6:[""],// deep shade 
  11.7:[""],// Grey 
  11.8:[""],// slight gray dark 
  11.9:[""],// Deep Brown 
  };

// 1-12
function mapHueValue(hueValue){
  local1 = hueValue+15;
  if (local1 > 360){local1 -= 360;}
  return (local1%30);
} 

function mapBrightNSat(brigtness,saturation){
  // if (brightness >= 95 ){
  //   return 100;
  // } else if (brightness <= 5 ){
  //   return 200;
  // } *Assume Staggered & Non linear Color Transition
  return (((brightness%33)+1)*((saturation%33)+1));
}

function evaluateGenre(hue,brightness,saturation){
 return (mapHueValue(hue) + 0.1*mapBrightNSat(brightness,saturation));
}

// https://accounts.spotify.com:443/authorize?client_id=5fe01282e44241328a84e7c5cc169165&response_type=code&redirect_uri=https://example.com/callback&scope=user-read-private%20user-read-email&state=some-state-of-my-choice
console.log(authorizeURL);

// spotifyApi.setAccessToken('<your_access_token>');

// spotifyApi.createPlaylist('My playlist', { 'description': 'My description', 'public': true })
//   .then(function(data) {
//     console.log('Created playlist!');
//   }, function(err) {
//     console.log('Something went wrong!', err);
//   });