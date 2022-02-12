import {authAPI, UsersAPI} from "../API/api";

const Set_Auth_User = 'Set_Auth_User'
const Set_Auth_User_Photo =  'Set_Auth_User_Photo'

let initialState = {
    isAuth: false,
    userId: null,
    email: null,
    login: null,
    photos: {
        small: null,
        large: null,
    }
}

const authReducer = (state = initialState,action) => {
    let stateCopy = {...state}

    switch (action.type) {
        case Set_Auth_User :
            stateCopy.userId = action.data.userId
            stateCopy.email = action.data.email
            stateCopy.login = action.data.login
            stateCopy.isAuth = true
            return stateCopy;
        case Set_Auth_User_Photo:
            stateCopy.photos = {...state.photos}
            stateCopy.photos.small = action.photos.small
            stateCopy.photos.large = action.photos.large
            return stateCopy;
        default:
            return state
    }
}

export const SetAuthUser = (userId,login,email) => ({type:Set_Auth_User, data:{userId,login,email}})
export const SetAuthUserPhoto = (small,large) => ({type:Set_Auth_User_Photo, photos:{small,large}})
export const getMyProfile = () => {
    return function (dispatch) {
        authAPI.getMyProfile()
            .then( data => {
                if(data.resultCode === 0) {
                    let {id,login,email } = data.data
                    UsersAPI.getProfile(id)
                        .then( data => {
                            let {small,large} = data.photos
                            dispatch(SetAuthUserPhoto(small,large))
                        })
                    dispatch(SetAuthUser(id,login,email))
                }
            })
    }
}



export default authReducer;