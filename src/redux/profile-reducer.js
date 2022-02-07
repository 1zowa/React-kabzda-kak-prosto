const ADDPOST = 'ADD-POST';
const UPDATE_POST = 'UPDATE_ADD_POST';
const SET_PROFILE_USERS = 'SET_PROFILE_USERS';

let initialState = {
    myPostData: [
        {comment: "Hello, what's up?"},
        {comment: "How did u do this?"},
        {comment: "I,m so glad to see u here"},
    ],
    postText: '',
    profile: null,
}

const profileReducer = (state = initialState, action) => {
    let stateCopy = {...state}
    switch (action.type) {
        case ADDPOST :
            let newPost = {"comment": state.postText}
            stateCopy.postText = '';
            stateCopy.myPostData = [...state.myPostData]
            stateCopy.myPostData.push(newPost)
            return stateCopy
        case UPDATE_POST :
            stateCopy.postText = action.postText;
            return stateCopy
        case SET_PROFILE_USERS:
            stateCopy.profile = action.profile
            return stateCopy
        default:
            return state
    }
}

export const postCreator = () => ({type: ADDPOST});
export const updatePostCreator = (postText) => {
    return {
        type: UPDATE_POST,
        postText: postText
    }
}
export const SetProfileUsers = (profile) => ({type: SET_PROFILE_USERS,profile})

export default profileReducer;
