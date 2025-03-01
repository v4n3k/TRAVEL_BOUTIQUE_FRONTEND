import axios from 'axios';

const baseURL = 'http://localhost:4200/api';

export const api = axios.create({
	baseURL,
});
