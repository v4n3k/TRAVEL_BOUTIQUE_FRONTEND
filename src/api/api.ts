import axios from 'axios';

const isDev = process.env.NODE_ENV === 'dev';

const ip = isDev ? 'localhost:4200' : 'xn----9sbelapeid5cyafedff1g.xn--p1ai';
const protocol = isDev ? 'http' : 'https';

const baseURL = `${protocol}://${ip}/api`;

export const api = axios.create({
	baseURL,
	withCredentials: true,
});
