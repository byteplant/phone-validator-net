var unirest = require('unirest');
var hookUrl = "https://api.phone-validator.net/api/v2/verify";

module.exports = function(apikey) {
  if (!isValidAPIKey(apikey)) {
    throw new Error("No valid API Key!");
  }
  return function(phoneObject, cb){
    var countrycode = "de"
    var mode = "extensive"
    if (phoneObject.countrycode) countrycode = phoneObject.countrycode
    if (phoneObject.mode) mode = phoneObject.mode
    var url = hookUrl +"?"+
    "PhoneNumber="+phoneObject.number+
    "CountryCode="+countrycode+
    "Mode="+mode+
    "&APIKey="+apikey;
    unirest.get(url).end(function (response) {
      cb(response.body);
    });
  }
}

function isValidAPIKey(apikey) {
  if (apikey.substring(0, 3) == "pv-") {
    var regex = /^[a-f0-9]{32}$/g;
    return regex.test(apikey.substring(3));
  } else {
    return false;
  }
}
