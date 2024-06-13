import axios from 'axios';
import { BASE_URL, TOKENCYBERSOFT, getAuthToken } from '../../constant/constant';

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${getAuthToken()}`,
    TokenCybersoft: TOKENCYBERSOFT,
    'Content-Type': 'application/json'
  },
});
