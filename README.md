# phone-validator-net

A small library providing a wrapper for [api.phone-validator.net](http://www.phone-validator.net/telefon-nummer-online-ueberpruefen-api.html)

## Installation

```shell
npm install phone-validator-net
```

## Usage

```js
import PhoneValidator from 'phone-validator-net'

// YOUR_API_KEY is a string
const validatorInstance = PhoneValidator(YOUR_API_KEY)

const responseObject = await validatorInstance(phoneObject) //validates phone object
//phone is a objekt like
// {
//   number: "+49173xxxxxxxxx",  //phone number to validate (string) | 0173xxxxxxx also possible with country code
//   countrycode: "de",        //two letter ISO 3166-1 country code (string) [optional]
//   mode: "extensive"           //'extensive' | 'express' (string) [optional; default 'extensive']
// }

/*
  responseObject looks like this:
  {
    status	              VALID_CONFIRMED, VALID_UNCONFIRMED, INVALID or error: DELAYED, RATE_LIMIT_EXCEEDED, API_KEY_INVALID_OR_DEPLETED
    linetype	            FIXED_LINE, MOBILE, VOIP, TOLL_FREE, PREMIUM_RATE, SHARED_COST, PERSONAL_NUMBER, PAGER, UAN, VOICEMAIL
    location	            geographical location (city, county, state)
    countrycode	          two letter ISO 3166-1 country code
    formatnational	      phone number in national format
    formatinternational	  phone number in international format
  }

  => http://www.phone-validator.net/telefon-nummer-online-ueberpruefen-api.html
*/
});
```

## Tests

```shell
npm test
```

## Release History

- 2.0.0 Rewrite in Typescript and using Promises
- 0.1.0 Initial release
