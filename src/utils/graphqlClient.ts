import axios from 'axios'
import fallbackUrl from './path'

const WP_API_URL = process.env.WP_API_URL || fallbackUrl

const GraphQlClient = async (query, variables = {}, sessionToken = null) => {
  try {
    const headers = {
      'Content-Type': 'application/json',
      'woocommerce-session': sessionToken ? `Session ${sessionToken}` : ''
    }
    const response = await axios.post(WP_API_URL, { query, variables }, { headers })
    if (response.headers['woocommerce-session']) response.data.data['sessionToken'] = response.headers['woocommerce-session']
    return response.data

  } catch (err) {
    return {}
  }
}

export default GraphQlClient
