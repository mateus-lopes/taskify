import { User } from 'firebase/auth'

export interface IUser {
    uid: string
    email: string
    name: string
    photoUrl: string
    loggedIn: boolean
}

export interface IUserStore {
    state: IUser
    login: (email: string, password: string) => Promise<User>
    register: (userData: IUserData) => Promise<User>
    logout: () => Promise<void>
    getUserData: () => Promise<void>
    isAuthenticated: boolean

}

export interface IUserData {
    name: string
    email: string
    photoUrl: string
    password: string
}

export interface IUserLogin {
    email: string
    password: string
}


