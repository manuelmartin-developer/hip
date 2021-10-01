import axios from 'axios'

const get = (url = '', headers = {}) => axios.get(url, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      ...headers
    }
  });

  export default { get };