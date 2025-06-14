import axios from 'axios';

const isDev = process.env.NODE_ENV === 'dev';

const ip = isDev ? 'localhost' : '103.88.243.252';
const protocol = isDev ? 'http' : 'https';

const baseURL = `${protocol}://${ip}:4200/api`;

export const api = axios.create({
	baseURL,
	withCredentials: true,
});
