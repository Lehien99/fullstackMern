export interface IAuthenState {

    isLoading: boolean,

    // isAuthenticated: boolean

    errMessage: string,

    usernameInfo: IUserInfo

}

export interface IUserInfo {

    username: string,

    keep: 'keep' | 'unkeep'

}

export const initialAuthenState: IAuthenState = {

    isLoading: false,

    errMessage: '',

    // isAuthenticated: false,

    usernameInfo: { username: '', keep: 'unkeep' }
}

// response

export interface IAuthDTResponse {

    username: string

    keep: 'keep' | 'unkeep'

}
export interface IAuthResponse {

   EM: string,

   EC: number,

   DT:IAuthDTResponse

}