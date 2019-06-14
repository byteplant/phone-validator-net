import PhoneValidator from '..'

const WORKING_APIKEY = 'pv-72529d9a6f4a94b56e26b5a9d39b60e9'
const PHONE119 = '01728150130'

test('Create instance of PhoneValidator', () => {
  expect(() => PhoneValidator('')).toThrow()

  expect(PhoneValidator(WORKING_APIKEY)).toBeInstanceOf(Function)
})

test('Use instance to check eMails', async () => {
  const instance = PhoneValidator(WORKING_APIKEY)
  const call = instance({
    phone: PHONE119,
  })

  expect(call).toBeInstanceOf(Promise)

  const response = await call

  expect(response).toMatchObject({
    ratelimit_remain: 0,
    ratelimit_seconds: 1,
    status: 'API_KEY_INVALID_OR_DEPLETED',
  })

  const response2 = await instance({
    countrycode: 'es',
    mode: 'express',
    phone: PHONE119,
  })

  expect(response2).toMatchObject({
    ratelimit_remain: 0,
    ratelimit_seconds: 1,
    status: 'API_KEY_INVALID_OR_DEPLETED',
  })
})
