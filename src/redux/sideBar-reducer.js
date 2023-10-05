let initialState = {
  friendsData: [
    {id: 1, name: 'Sveta', avatar: '/images/svetaAva.jpg'},
    {id: 2, name: 'Kolya', avatar: '/images/kolyaAva.jpg'},
    {id: 3, name: 'Sam', avatar: '/images/samAva.jpg'}
  ]
}

const sideBarReducer = (state = initialState, action) => {
  return state;
}

export default sideBarReducer;