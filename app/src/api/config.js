import axios from 'axios';

const baseURL = "https://pokeapi.co/api/v2";

const config = {
   baseURL: baseURL,
   timeout: 100000,
   headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Pragma: 'no-cache',
   },
};

const api = axios.create(config);

export default api;