const express = require('express');
const app = express();

app.listen(3000, ()=>{
    console.log('im listening doggo')
})

// //////////////////////////
// // Dependencies
// //////////////////////////
// const path = require("path");
// const express = require("express");
// const app = express();
// const PORT = process.env.PORT || 8000;
// require("dotenv").config();

// let SpotifyWebApi = require("spotify-web-api-node");

// let clientId = process.env.CLIENTID,
// clientSecret = process.env.CLIENTSECRET;

// const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/'+ `Spotify`;


//   // Middleware
// //////////////////////////

// app.use(express.json());
// app.use(express.static("build"));

// // Create the api object with the credentials
// let spotifyApi = new SpotifyWebApi({
//   clientId: clientId,
//   clientSecret: clientSecret,
// });

// const authTheApp = () => {
//   // Retrieve an access token.
//   spotifyApi.clientCredentialsGrant().then(
//     function (data) {
//       console.log("The access token expires in " + data.body["expires_in"]);
//       console.log("The access token is " + data.body["access_token"]);

//       // Save the access token so that it's used in future calls
//       spotifyApi.setAccessToken(data.body["access_token"]);
//     },
//     function (err) {
//       console.log("Something went wrong when retrieving an access token", err);
//     }
//   );
// };

// authTheApp();
// setInterval(authTheApp, 1200000);

// app.listen(PORT, () => console.log("Listening on port:", PORT));
