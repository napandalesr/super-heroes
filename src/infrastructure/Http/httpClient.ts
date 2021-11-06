import axios from 'axios';
const headers = {
  'Content-Type': 'application/json'
};
axios.defaults.baseURL = process.env.REACT_APP_API_HOST;
axios.defaults.headers=headers;

export default axios;