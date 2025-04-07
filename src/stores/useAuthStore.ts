import { create } from 'zustand';
import { UseAuthStore } from '../types/stores';

export const useAuthStore = create<UseAuthStore>(set => ({
	token: null,
	setToken: token => set({ token }),

	userId: null,
	setUserId: userId => set({ userId }),

	isAuth: localStorage.getItem('isAuth') === 'true' ? true : false,
	setIsAuth: isAuth => {
		set({ isAuth });
		localStorage.setItem('isAuth', String(isAuth));
	},
}));
