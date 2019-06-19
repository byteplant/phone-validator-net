import PhoneValidator from '..'

const { WORKING_APIKEY } = process.env
const PHONE = '01728150130'
const PHONE_ES = '934124602'

if (WORKING_APIKEY === undefined) {
  throw Error(
    `'WORKING_APIKEY' needs to be provided using environment variables`,
  )
}

test('Create instance of PhoneValidator', () => {
  expect(() => PhoneValidator('')).toThrow()

  expect(PhoneValidator(WORKING_APIKEY)).toBeInstanceOf(Function)
})

test('Use instance to check phone number', async () => {
  const instance = PhoneValidator(WORKING_APIKEY)
  const call = instance({
    phone: PHONE,
  })

  expect(call).toBeInstanceOf(Promise)

  const response = await call

  expect(response).toMatchObject({
    countrycode: 'DE',
    formatinternational: '+49 172 8150130',
    formatnational: '0172 8150130',
    linetype: 'MOBILE',
    location: 'Germany',
    status: 'VALID_CONFIRMED',
  })

  const response2 = await instance({
    countrycode: 'es',
    mode: 'express',
    phone: PHONE_ES,
  })

  expect(response2).toMatchObject({
    countrycode: 'ES',
    formatinternational: '+34 934 12 46 02',
    formatnational: '934 12 46 02',
    linetype: 'FIXED_LINE',
    location: 'Barcelona',
    status: 'VALID_UNCONFIRMED',
  })
})
