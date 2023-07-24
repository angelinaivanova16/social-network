let state = {
  profilePage: {
    postsData: [
      {id: 1, message: 'Do not give up, the beginning is always the hardest.', likes: 20},
      {id: 2, message: 'It is my first post. Never stop dreaming.', likes: 30}
    ]
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
}

export default state;