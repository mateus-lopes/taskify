import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core';
import { useAuth } from '@vueuse/firebase'
import { IAuth } from '@/auth/interfaces/auth';
import { auth } from '@/core/plugins/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/core/plugins/firebase';
import { db } from '@/core/plugins/firebase';
import { getDoc, doc } from 'firebase/firestore';

export const useAuthStore = defineStore('auth', () => {
  const initialAuthState: IAuth = {
    id: null,
    name: '',
    email: '',
    isLogged: false,
  };

  const state = useStorage<IAuth>('user', initialAuthState);
  const { isAuthenticated, user } = useAuth(auth)
  console.log(isAuthenticated, user.value)

  const login = async (email: string, password: string) => {
    await auth.signInWithEmailAndPassword(email, password);
  }
  const logout = async () => {
    await auth.signOut();
  }
  const register = async (email: string, password: string) => {
    await auth.createUserWithEmailAndPassword(email, password);
  }
  const updateProfile = async (name: string) => {
    await auth.currentUser?.updateProfile({
      displayName: name
    });
  }
  const resetPassword = async (email: string) => {
    await auth.sendPasswordResetEmail(email);
  }
  
  onAuthStateChanged(auth, async (firebaseUser) => {
    state.value.id = firebaseUser?.email;

    if (state.value.id) {
      try {
        const userDoc = await getDoc(doc(db, 'users', state.value.id));
        if (userDoc.exists()) {
          const userData = userDoc.data();
          user.value = {
            ...state.value,
            name: userData?.name,
            email: userData?.email,
            photoUrl: userData?.photoUrl,
            isLogged: true,
          };
        }
      } catch (error) {
        console.log('Erro ao buscar dados do usuário:', error.message);
      }
    }
  });

  return { state, isAuthenticated, user, login, logout, register, updateProfile, resetPassword };
});