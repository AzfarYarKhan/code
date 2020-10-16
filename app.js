var request = require("request");
var express = require('express');
var app = express();
app.use(express.json());


app.post("/api/createzoommeeting", (req, res) => {

  var options = {
    method: "POST",
    url: 'https://api.zoom.us/v2/users/me/meetings',
    body: {
      topic: "test create meeting",
      type: 1,
      settings: {
        host_video: "true",
        participant_video: "true"
      }
    },
	auth: {
            'bearer': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOm51bGwsImlzcyI6ImNRR2pQRXFkUV82blBBUUduMzJNbmciLCJleHAiOjE2MDMyNzk1OTAsImlhdCI6MTYwMjY3NDc4OX0.r_0yUrlJ11U5pmTxPM6mE7-Mqb9GPlo6y0kPDGpCSNY'
    },
    headers: {
      "User-Agent": "Zoom-api-Jwt-Request",
      "content-type": "application/json"
    },
    json: true
  };

request(options, function (error, response, body) {
    if (error) throw new Error(error);

    console.log(body);
    res.send("create meeting result: " + JSON.stringify(response.body.start_url));
	});


});

app.get('/',function(req,res){
  res.send("hello ");
});

var distDir = __dirname + "/dist/";
 app.use(express.static(distDir));

const PORT = process.env.PORT || 3000;
app.listen(PORT);