const ADDPOST = 'ADD-POST';
const UPDATE_POST = 'UPDATE_ADD_POST'

let initialState = {
    myPostData: [
    { comment: "Hello, what's up?" },
    { comment: "How did u do this?" },
    { comment: "I,m so glad to see u here" },
    ],
    postText: 'it-kamasutra'
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDPOST :
            let newPost = { "comment": state.postText }
            state.postText = ''
            state.myPostData.push(newPost)
            return state
        case UPDATE_POST :
            state.postText = action.postText;
            return state
        default: return state
    }
}

export const postCreator = () => ({ type: ADDPOST });
export const updatePostCreator = (postText) => {
    return {
        type: UPDATE_POST,
        postText: postText
    }
}

export default profileReducer;
