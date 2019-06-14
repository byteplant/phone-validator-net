import axios from 'axios'

import { isValidAPIKey } from './isValidAPIKey'

const API_URL = 'https://api.phone-validator.net/api/v2/verify'

export interface IPhoneInput {
  countrycode?: string
  mode?: 'extensive' | 'express'
  phone: string
}

// => http://www.phone-validator.net/telefon-nummer-online-ueberpruefen-api.html
type EStatus =
  | 'VALID_CONFIRMED'
  | 'VALID_UNCONFIRMED'
  | 'INVALID'
  | 'RATE_LIMIT_EXCEEDED'
  | 'API_KEY_INVALID_OR_DEPLETED'

type ELinetype =
  | 'FIXED_LINE'
  | 'MOBILE'
  | 'VOIP'
  | 'TOLL_FREE'
  | 'PREMIUM_RATE'
  | 'SHARED_COST'
  | 'PERSONAL_NUMBER'
  | 'PAGER'
  | 'UAN'
  | 'VOICEMAIL'

export interface IPhoneResponse {
  status: EStatus
  linetype: ELinetype
  location: string
  countrycode: string
  formatnational: string
  formatinternational: string
}

const phoneValidatorInstance = async (
  apiKey: string,
  { countrycode = 'de', mode = 'extensive', phone }: IPhoneInput,
): Promise<IPhoneResponse> => {
  const serializedPhone = encodeURIComponent(phone)
  const url = `${API_URL}?PhoneNumber=${serializedPhone}&CountryCode=${countrycode}&Mode=${mode}&APIKey=${apiKey}`

  const { data } = await axios.get(url)
  return data
}

export default (apiKey: string) => {
  if (!isValidAPIKey(apiKey)) {
    throw new Error('No valid API Key!')
  }
  return (phone: IPhoneInput) => phoneValidatorInstance(apiKey, phone)
}
