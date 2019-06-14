export const isValidAPIKey = (apikey: string): boolean =>
  apikey.substring(0, 3) === 'pv-' &&
  /^[a-f0-9]{32}$/g.test(apikey.substring(3))
