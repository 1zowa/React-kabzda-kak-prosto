import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
  _state: {
    profilePage: {
      myPostData: [
        { comment: "Hello, what's up?" },
        { comment: "How did u do this?" },
        { comment: "I,m so glad to see u here" },
      ],
      postText: 'it-kamasutra'
    },
    dialogsPage: {
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
    },
    sideBarPage: [
      { image: "https://img1.freepng.ru/20180418/tiw/kisspng-avatar-computer-icons-business-business-woman-5ad736ba07dc91.3109024815240536900322.jpg" },
      { image: "https://img2.freepng.ru/20180523/tha/kisspng-businessperson-computer-icons-avatar-clip-art-lattice-5b0508dc6a3a10.0013931115270566044351.jpg" },
      { image: "https://cdn-icons-png.flaticon.com/512/147/147144.png" }
    ],

  },

  getState() {
    return this._state;
  },

  _rerender() {
    console.log('State changed')
  },

  dispatch(action) {

    this._state.profilePage = profileReducer(this._state.profilePage,action)
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage,action)
    this._state.sideBarPage = sidebarReducer(this._state.sideBarPage, action)

    this._rerender(this._state)
  },

  subscribe(observer) {
    this._rerender = observer
  }

}

export default store