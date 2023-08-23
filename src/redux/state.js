let store = {
  _state: {
    profilePage: {
      postsData: [
        {id: 1, ava: '/images/svetaAva.jpg', message: 'Do not give up, the beginning is always the hardest.', likes: 20},
        {id: 2, ava: '/images/mashaAva.jpg', message: 'Hi! Never stop dreaming.', likes: 30}
      ],
      newPostText: '',
    },
  
    dialogsPage: {
      dialogsData: [
        {id: 1, name: 'Sveta', avatar: '/images/svetaAva.jpg'},
        {id: 2, name: 'Kolya', avatar: '/images/kolyaAva.jpg'},
        {id: 3, name: 'Victor', avatar: '/images/victorAva.jpg'},
        {id: 4, name: 'Masha', avatar: '/images/mashaAva.jpg'},
        {id: 5, name: 'Sam', avatar: '/images/samAva.jpg'}
      ],
      messagesData: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Yo'},
        {id: 3, message: 'I`m so happy for you!'},
        {id: 4, message: 'Today is gonna be a good day.'}
      ]
    },
  
    sideBar: {
      friendsData: [
        {id: 1, name: 'Sveta', avatar: '/images/svetaAva.jpg'},
        {id: 2, name: 'Kolya', avatar: '/images/kolyaAva.jpg'},
        {id: 3, name: 'Sam', avatar: '/images/samAva.jpg'}
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
    if (action.type === 'ADD-POST') {
      let newPost = {
        id: 5,
        ava: '/images/kolyaAva.jpg',
        message: this._state.profilePage.newPostText,
        likes: 0
      }
      this._state.profilePage.postsData.push(newPost);
      this._state.profilePage.newPostText ='';
      this._callSubscriber(this._state);
    } else if (action.type === 'UPDATE-POST-TEXT') {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    }
  },
  // addPost() {
  //   let newPost = {
  //     id: 5,
  //     ava: '/images/kolyaAva.jpg',
  //     message: this._state.profilePage.newPostText,
  //     likes: 0
  //   }
  //   this._state.profilePage.postsData.push(newPost);
  //   this._state.profilePage.newPostText ='';
  //   this._callSubscriber(this._state);
  // },
  // updatePostText(newText) {
  //   this._state.profilePage.newPostText = newText;
  //   this._callSubscriber(this._state);
  // },
}


export default store;