const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';

const dialogsReducer = (state, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        id: 5,
        message: state.newMessageText,
      }
      state.messagesData.push(newMessage);
      state.newMessageText ='';
      return state;
    case UPDATE_MESSAGE_TEXT:
      state.newMessageText = action.newText2;      
      return state;
    default:
      return state;
  };
}

export let addMessageActionCreator = () =>  ({ type: ADD_MESSAGE });
export let updateMessageTextActionCreator = (body) => ({ type: UPDATE_MESSAGE_TEXT, newText2: body });

export default dialogsReducer;