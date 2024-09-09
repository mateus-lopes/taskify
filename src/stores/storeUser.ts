import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core';
import { IUserStore, IUser, IUserLogin, IUserData } from '../types/typeUser';
import { serviceGetUserData, serviceLogout, serviceLogin, serviceRegister } from '../service/serviceUser';

export const useUserStore = defineStore<"user", IUserStore>(
  "user",
  () => {
  const initialState: IUser = {
    uid: '',
    email: '',
    name: '',
    photoUrl: '',
    loggedIn: false,
  };

  const state = useStorage<IUser>('user', initialState);
  const isAuthenticated = initialState.loggedIn;
  
  const login = async (email: string, password: string) => {
    serviceLogin(email, password).then(user => {
      Object.assign(state.value, { ...state.value, uid: user.uid, email: user.email, loggedIn: true });
    });
  }

  const register = async (userData: IUserData) => {
    serviceRegister(userData).then(user => {
      Object.assign(state.value, { ...state.value, uid: user.uid, email: user.email, loggedIn: true });
    });
  }
 
  const logout = async () => {
    serviceLogout().then(() => {
      Object.assign(state.value, initialState);
    });
  }

  const getUserData = async () => {
    serviceGetUserData(state.value.email).then(userData => {
      Object.assign(state.value, {
        ...state.value,
        name: userData.name,
        photoUrl: userData.photoUrl,
      });
    });
  }
  
  return { state, login, register, logout, getUserData, isAuthenticated };
});