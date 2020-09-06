const express = require('express');
const app = express();
const router = express.Router();
const request = require('request');
const querystring = require('querystring');
const SpotifyWebApi = require('spotify-web-api-node');

const client_id = '2c90e3e48c404dd893930f88abca590a'; // Your client id
const client_secret = 'b6f6422c14ff4f44862a0c83968c0a69'; // Your secret
const redirect_uri = 'http://localhost:8888/callback'; // Or Your redirect uri

const stateKey = 'spotify_auth_state';
const spotifyApi = new SpotifyWebApi();


const generateRandomString = (length) => {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
};

app.get('/login', (req, res) => {
    let scope = '';
    let state = generateRandomString(16);
    // localStorage.setItem('State', stateKey);
    res.redirect('https://accounts.spotify.com/authorize?' +
        querystring.stringify({
            response_type: 'code',
            client_id: client_id,
            scope: scope,
            redirect_uri: redirect_uri,
            state: state
        }));
});

app.get('/callback', function(req, res) {

    // your application requests refresh and access tokens
    // after checking the state parameter

    let code = req.query.code || null;
    let state = req.query.state || null;
    // let storedState = localStorage.getItem("State") ? localStorage.getItem("State") : null;

    if (state === null) {
        res.redirect('/#' +
            querystring.stringify({
                error: 'state_mismatch'
            }));
    } else {
        // localStorage.removeItem("State");
        let authOptions = {
            url: 'https://accounts.spotify.com/api/token',
            form: {
                code: code,
                redirect_uri: redirect_uri,
                grant_type: 'authorization_code'
            },
            headers: {
                'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
            },
            json: true
        };
        request.post(authOptions, function(error, response, body) {
            if (!error && response.statusCode === 200) {

                let access_token = body.access_token,
                    refresh_token = body.refresh_token;

                let options = {
                    url: 'https://api.spotify.com/v1/search?q=artist:Drake',
                    headers: { 'Authorization': 'Bearer ' + access_token },
                    json: true
                };
                spotifyApi.setAccessToken(access_token)
                spotifyApi.searchArtists("drake").then(
                    function(data) {
                        console.log("found", data.body.artists.items)
                    }
                )

                // use the access token to access the Spotify Web API
                // request.post(options, function(error, response, body) {
                //     if (error) {
                //         console.log(error)
                //     } else {
                //         console.log(body);
                //     }
                // });

                // we can also pass the token to the browser to make requests from there
                res.redirect('http://localhost:8888/#' +
                    querystring.stringify({
                        access_token: access_token,
                        refresh_token: refresh_token
                    }));
            } else {
                res.redirect('/#' +
                    querystring.stringify({
                        error: 'invalid_token'
                    }));
            }
        });
    }
});

app.listen(8888);