const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE = 'UPDATE_MESSAGE'

let initialState = {
    chatsData: [
        { id: 1, text: 'First Chat', image: "https://w1.pngwing.com/pngs/451/948/png-transparent-robot-avatar-android-robotics-artificial-intelligence-television-technology.png" },
        { id: 2, text: 'Second Chat', image: 'https://img2.freepng.ru/20180203/ese/kisspng-robot-clip-art-cartoon-pictures-of-people-talking-5a7629834e5913.1390353315176933153209.jpg' },
        { id: 3, text: 'Third Chat', image: 'https://img2.freepng.ru/20180218/ltq/kisspng-robot-free-content-clip-art-robot-cliparts-5a89b3229c1f47.6555274515189737306395.jpg' },
        { id: 4, text: 'Fourth Chat', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQprUvvKe8mClQxJkjRHUlQsaU4Sds1ksyMElq27fo-v25PnFUh4wK0_bd9u1f0S8iJLbo&usqp=CAU' },
        { id: 5, text: 'Fifth Chat', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3iTUjysRtszUSUOqDtk0VPcYo1F59G4oKDWcaO_BOZyyYs-v07OjixYV0zN_0Fthd-x0&usqp=CAU' },
        { id: 6, text: 'Sixth Chat', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuvqrVkEbyqxnBX4U3caxnyRBoLrVWtDTFzCQGWEDfEgVtUTpPtrQrzr3CuBTuCc_h61U&usqp=CAU' },
    ],
    messageData: [
        { message: 'Sixth text', user: '6' },
        { message: 'Sixth text', user: 'me6' },
        { message: 'Sixth text', user: '6' },
        { message: 'Fifth text', user: 'me5' },
        { message: 'Fifth text', user: '5' },
        { message: 'Fifth text', user: 'me5' },
        { message: 'Fifth text', user: '5' },
        { message: 'Fourth text', user: '4' },
        { message: 'Fourth text', user: '4' },
        { message: 'Fourth text', user: '4' },
        { message: 'Third text', user: '3' },
        { message: 'Third text', user: 'me3' },
        { message: 'Third text', user: '3' },
        { message: 'Second text', user: '2' },
        { message: 'Second text', user: '2' },
        { message: 'First text', user: 'me1' },
        { message: 'First text', user: '1' },
        { message: 'First text', user: '1' },
        { message: 'First text', user: 'me1' },
    ],
    messageField: '',
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE :
            let newMessage = {
                "message": state.messageField,
                "user": `me${action.id}`
            }
            state.messageField = ''
            state.messageData.unshift(newMessage)
            return state
        case UPDATE_MESSAGE :
            state.messageField = action.body;
            return state
        default: return state
    }
}

export const MessageCreator = (id) => ({ type: ADD_MESSAGE, id: id });
export const updateMessageCreator = (body) => {
    return {
        type: UPDATE_MESSAGE,
        body: body
    }
}


export default dialogsReducer;