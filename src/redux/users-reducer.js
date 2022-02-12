import {UsersAPI} from "../API/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SETUSERS = 'SETUSERS';
const MOREUSERS = 'MOREUSERS';
const ADDUSERS = 'ADDUSERS';
const FETCHING = 'FETCHING';
const TOOGLE_FOLLOW_PROGRESS = 'TOOGLE_FOLLOW_PROGRESS';

let initialState = {
    users: [],
    page: 1,
    isFetching: false,
    isFollowingInProgress: [],
}

const usersReducer = (state = initialState, action) => {
    let stateCopy = {...state}
    switch (action.type) {
        case FOLLOW :
            stateCopy.users = [...state.users]
            state.users.map( (elem,index) => {
                if(elem.id === action.id) {
                    stateCopy.users[index] = elem
                    stateCopy.users[index].followed = true
                }
            })
            return stateCopy;
        case UNFOLLOW :
            stateCopy.users = [...state.users]
            state.users.map( (elem,index) => {
                if(elem.id === action.id) {
                    stateCopy.users[index] = elem
                    stateCopy.users[index].followed = false
                }
            })
            return stateCopy
        case SETUSERS :
            stateCopy.page = 1;
            stateCopy.users = [...action.list]
            return stateCopy
        case ADDUSERS:
            stateCopy.users = [...state.users,...action.list]
        case MOREUSERS :
            stateCopy.page = state.page+1
            return stateCopy;
        case FETCHING:
              stateCopy.isFetching = action.isFetching
            return stateCopy;
        case TOOGLE_FOLLOW_PROGRESS:
            return state.isFetching
                ? {...state,isFollowingInProgress:[...state.isFollowingInProgress,action.id]}
                : {...state,isFollowingInProgress: state.isFollowingInProgress.filter( elem => elem !== action.id)}
        default:
            return state
    }
}

export const follow = (id) => ({type: FOLLOW, id})
export const unfollow = (id) => ({type: UNFOLLOW, id})
export const SetUsers = (list) => ({type: SETUSERS, list})
export const AddUsers = (list) => ({type: ADDUSERS, list})
export const MoreUsers = () => ({type: MOREUSERS})
export const isFetchingAC = (isFetching) =>({type:FETCHING, isFetching})
export const toggleFollowingProgress = (followProgres,id) => ({type:TOOGLE_FOLLOW_PROGRESS, followProgres,id})
export const getUsers = () => {
    return function (dispatch) {
        dispatch(isFetchingAC(true))
        UsersAPI.getUsers()
            .then(data => {
                dispatch(SetUsers(data.items))
                dispatch(isFetchingAC(false))
            })
    }
}
export const moreUsers = (page) => {
    return function (dispatch) {
        dispatch(isFetchingAC(true))
        dispatch(MoreUsers())
        setTimeout(() => {
            UsersAPI.getUsers(++page)
                .then(data => {
                    dispatch(AddUsers(data.items))
                    dispatch(isFetchingAC(false))
                })
        }, 0)
    }
}
export const followUnfollow = (id) => {
    return function (dispatch) {
        dispatch(isFetchingAC(true))
        dispatch(toggleFollowingProgress(true,id))
        UsersAPI.checkFollowing(id)
            .then(data => {
                data
                    ? UsersAPI.follingDelete(id)
                        .then( dataDelete => {
                            dataDelete.resultCode === 0
                            && dispatch(unfollow(id))
                            dispatch(isFetchingAC(false))
                            dispatch(toggleFollowingProgress(false,id))
                        })
                    : UsersAPI.followingPost(id)
                        .then(dataPost => {
                            dataPost.resultCode === 0
                            && dispatch(follow(id))
                            dispatch(isFetchingAC(false))
                            dispatch(toggleFollowingProgress(false,id))
                        })
            })
    }

}

export default usersReducer;