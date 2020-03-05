var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var querystring = require("querystring");
var mailchimpClientId = "861393510919";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("views"));

app.get("/", function(req, res) {
  res.send("Hello world");
});

// app.get("/mailchimp/auth/authorize", function(req, res) {
//   res.redirect(
//     "https://login.mailchimp.com/oauth2/authorize?" +
//       querystring.stringify({
//         response_type: "code",
//         client_id: mailchimpClientId,
//         redirect_uri: "http://127.0.0.1:3000/mailchimp/auth/callback"
//       })
//   );
// });

app.listen(3000, function() {
  console.log("Example app listening on port 3000!");
});
