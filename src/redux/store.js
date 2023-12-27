import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sideBarReducer from "./sideBar-reducer";

let store = {
  _state: {
    profilePage: {
      postsData: [
        {id: 1, ava: '/social-network/images/svetaAva.jpg', message: 'Do not give up, the beginning is always the hardest.', likes: 20},
        {id: 2, ava: '/social-network/images/mashaAva.jpg', message: 'Hi! Never stop dreaming.', likes: 30}
      ],
      newPostText: '',
    },
  
    dialogsPage: {
      dialogsData: [
        {id: 1, name: 'Sveta', avatar: '/social-network/images/svetaAva.jpg'},
        {id: 2, name: 'Kolya', avatar: '/social-network/images/kolyaAva.jpg'},
        {id: 3, name: 'Victor', avatar: '/social-network/images/victorAva.jpg'},
        {id: 4, name: 'Masha', avatar: '/social-network/images/mashaAva.jpg'},
        {id: 5, name: 'Sam', avatar: '/social-network/images/samAva.jpg'}
      ],
      messagesData: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Yo'},
        {id: 3, message: 'I`m so happy for you!'},
        {id: 4, message: 'Today is gonna be a good day.'}
      ],
      newMessageText: '',
    },
  
    sideBar: {
      friendsData: [
        {id: 1, name: 'Sveta', avatar: '/social-network/images/svetaAva.jpg'},
        {id: 2, name: 'Kolya', avatar: '/social-network/images/kolyaAva.jpg'},
        {id: 3, name: 'Sam', avatar: '/social-network/images/samAva.jpg'}
      ]
    }
  },
  _callSubscriber() {
    console.log('lalala');
  }, 
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sideBar = sideBarReducer(this._state.sideBar, action);
    this._callSubscriber(this._state);
  },
}

export default store;