export interface IAUTHUSERDATA {
    id: string,
    email: string,
    username: string,
}


export interface IAUTHUSERS {
    id: string,
    username: string,
    email: string,
    passsword: string,
}


export interface IAUTHSTATE {
    isLoggedIn?: boolean,
    userData: IAUTHUSERDATA | null,
    users: IAUTHUSERS[],
    isLoading: boolean,
    error: string,
} 