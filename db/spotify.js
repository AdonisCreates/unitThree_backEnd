const express = require("express");
const router = express.Router();
const request = require("request");
const querystring = require("querystring");
const SpotifyWebApi = require("spotify-web-api-node");

const spotifyApi = new SpotifyWebApi();

const client_id = process.env.CLIENT_ID; // Your client id
const client_secret = process.env.CLIENT_SECRET; // Your secret
const redirect_uri = "http://localhost:8888/callback"; // Or Your redirect uri

const generateRandomString = length => {
  let text = "";
  const possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

//Log In to Spotify API using CLient ID and Secret
router.get("/login", (req, res) => {
  let scope = "";
  let state = generateRandomString(16);
  // localStorage.setItem('State', stateKey);
  res.redirect(
    "https://accounts.spotify.com/authorize?" +
      querystring.stringify({
        response_type: "code",
        client_id: client_id,
        scope: scope,
        redirect_uri: redirect_uri,
        state: state
      })
  );
});

//calls back and grabs info...
router.get("/callback", function(req, res) {
  // your application requests refresh and access tokens
  // after checking the state parameter

  let code = req.query.code || null;
  let state = req.query.state || null;

  if (state === null) {
    res.redirect(
      "/#" +
        querystring.stringify({
          error: "state_mismatch"
        })
    );
  } else {
    let authOptions = {
      url: "https://accounts.spotify.com/api/token",
      form: {
        code: code,
        redirect_uri: redirect_uri,
        grant_type: "authorization_code"
      },
      headers: {
        Authorization:
          "Basic " +
          new Buffer(client_id + ":" + client_secret).toString("base64")
      },
      json: true
    };
    request.post(authOptions, function(error, response, body) {
      if (!error && response.statusCode === 200) {
        let access_token = body.access_token,
          refresh_token = body.refresh_token;

        spotifyApi.setAccessToken(access_token);
        spotifyApi.setRefreshToken(refresh_token);
        // res.redirect('/home')

        // // we can also pass the token to the browser to make requests from there
        // res.redirect('http://localhost:8888/#' +
        //     querystring.stringify({
        //         access_token: access_token,
        //         refresh_token: refresh_token
        //     }));
        res.redirect("/home");
      } else {
        res.redirect(
          "/#" +
            querystring.stringify({
              error: "invalid_token"
            })
        );
      }
    });
  }
});

router.get("/home", (req, res) => {
  res.send(
    "This is the home screen. To search for an artist, add to the url above a forward slash and the name of the artist you wish to find! It should look like 'localhost:8000/home/drake'!"
  );
});

router.get("/home/:searchTerm", (req, res) => {
  // switch (req.body.type) {
  //     case ('artist'):
  let specific = [];
  spotifyApi.searchTracks(req.params.searchTerm).then(function(data) {
    console.log(data.body.tracks);
    data.body.tracks.items.map(dataItem => {
      specific.push({
        name: dataItem.name,
        artists: dataItem.artists.map(artist => {
          return artist.name;
        }),
        albumURL: {
          albumName: dataItem.album.name,
          albumImg: dataItem.album.images.map(img => {
            return img.url;
          })
        }
      });
    });
    res.send(specific);
  });
});

module.exports = router;
