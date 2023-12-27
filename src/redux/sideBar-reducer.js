let initialState = {
  friendsData: [
    {id: 1, name: 'Sveta', avatar: '/social-network/images/svetaAva.jpg'},
    {id: 2, name: 'Roma', avatar: '/social-network/images/kolyaAva.jpg'},
    {id: 3, name: 'Sam', avatar: '/social-network/images/samAva.jpg'}
  ]
}

const sideBarReducer = (state = initialState, action) => {
  return state;
}

export default sideBarReducer;