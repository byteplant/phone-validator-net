phone-validator-net
=========

A small library providing a wrapper for [api.phone-validator.net](http://www.phone-validator.net/telefon-nummer-online-ueberpruefen-api.html) with unirest

## Installation
  ```shell
  npm install phone-validator-net
  ```
## Usage
  ```js
  var phoneValidator = require('phone-validator-net')(apiKey);

  var phone1 = phoneValidator(phoneObject, callbackFunction(returnOfCallbackFunction){ //validates phone object
    //phone is a objekt like
    {
      number: "+49173xxxxxxxxx",  //phone number to validate (string) | 0173xxxxxxx also possible with country code
      countrycode: "de",        //two letter ISO 3166-1 country code (string) [optional]
      mode: "extensive"           //'extensive' | 'express' (string) [optional; default 'extensive']
    }

    returnOfCallbackFunction //object like following

    /*
    status	              VALID_CONFIRMED, VALID_UNCONFIRMED, INVALID or error: DELAYED, RATE_LIMIT_EXCEEDED, API_KEY_INVALID_OR_DEPLETED
    linetype	            FIXED_LINE, MOBILE, VOIP, TOLL_FREE, PREMIUM_RATE, SHARED_COST, PERSONAL_NUMBER, PAGER, UAN, VOICEMAIL
    location	            geographical location (city, county, state)
    countrycode	          two letter ISO 3166-1 country code
    formatnational	      phone number in national format
    formatinternational	  phone number in international format
    */
    // => http://www.phone-validator.net/telefon-nummer-online-ueberpruefen-api.html
  });
  ```

## Tests

  ```shell
  npm test
  ```

## Release History

* 0.1.0 Initial release
