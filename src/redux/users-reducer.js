const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SETUSERS = 'SETUSERS';
const MOREUSERS = 'MOREUSERS';
const ADDUSERS = 'ADDUSERS';
const FETCHING = 'FETCHING';

let initialState = {
    users: [],
    page: 1,
    isFetching: false,
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
        default:
            return state
    }
}

export const checkFriendStatusAC = (text,id) => ({type: text, id: id})

export const SetUsers = (list) => ({type: SETUSERS, list})

export const AddUsers = (list) => ({type: ADDUSERS, list})

export const MoreUsers = () => ({type: MOREUSERS})

export const isFetchingAC = (isFetching) =>({type:FETCHING, isFetching: isFetching})

window.page = initialState.page
export default usersReducer;