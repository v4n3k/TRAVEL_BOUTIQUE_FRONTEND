import axios from 'axios';

const isDev = process.env.NODE_ENV === 'dev';

const ip = isDev ? 'localhost' : '103.88.243.252';

const baseURL = `http://${ip}:4200/api`;

console.log(baseURL);

export const api = axios.create({
	baseURL,
});
