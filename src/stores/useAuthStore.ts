import { create } from 'zustand';
import { UseAuthStore } from '../types/stores';

export const useAuthStore = create<UseAuthStore>(set => ({
	isAuth: true,
	setIsAuth: isAuth => set({ isAuth }),
}));
