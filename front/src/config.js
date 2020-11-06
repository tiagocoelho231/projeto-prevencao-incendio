import axios from 'axios';

export const endpoint = 'http://127.0.0.1:3030';

export const API = axios.create({
  baseURL: endpoint
});
