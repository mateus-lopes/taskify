import { getAuth, signInWithEmailAndPassword, signOut, User, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
import { IUserData, IUserLogin } from '@/types/typeUser';

const auth = getAuth();
const db = getFirestore();

export const serviceLogin = async (email: string, password: string): Promise<User> => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        return user;
    } catch (error) {
        console.error('service: Error logging in:', error);
        throw error;
    }
}

export const serviceLogout = async (): Promise<void> => {
    try {
        await signOut(auth);
    } catch (error) {
        console.error('service: Error logging out:', error);
        throw error;
    }
}

export const serviceRegister = async (userData: IUserData): Promise<User> => {
    try {
        await setDoc(doc(db, 'users', userData.email), userData);
        const userCredential = await createUserWithEmailAndPassword(auth, userData.email, userData.password);
        const user = userCredential.user;
        return user;
    } catch (error) {
        console.error('service: Error creating user:', error);
        throw error;
    }
};

export const serviceGetUserData = async (userId: string): Promise<any> => {
    try {
        const userDocRef = doc(db, 'users', userId);
        const userDocSnapshot = await getDoc(userDocRef);
        const userData = userDocSnapshot.data();
        return userData;
    } catch (error) {
        console.error('service: Error getting user data:', error);
        throw error;
    }
}
