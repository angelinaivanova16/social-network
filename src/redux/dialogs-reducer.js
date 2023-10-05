const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_MESSAGE_TEXT = "UPDATE-MESSAGE-TEXT";

let initialState = {
  dialogsData: [
    { id: 1, name: "Sveta", avatar: "/images/svetaAva.jpg" },
    { id: 2, name: "Kolya", avatar: "/images/kolyaAva.jpg" },
    { id: 3, name: "Victor", avatar: "/images/victorAva.jpg" },
    { id: 4, name: "Masha", avatar: "/images/mashaAva.jpg" },
    { id: 5, name: "Sam", avatar: "/images/samAva.jpg" },
  ],
  messagesData: [
    { id: 1, message: "Hi" },
    { id: 2, message: "Yo" },
    { id: 3, message: "I`m so happy for you!" },
    { id: 4, message: "Today is gonna be a good day." },
  ],
  newMessageText: "",
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        id: 5,
        message: state.newMessageText,
      };
      state.messagesData.push(newMessage);
      state.newMessageText = "";
      return state;
    case UPDATE_MESSAGE_TEXT:
      state.newMessageText = action.newText2;
      return state;
    default:
      return state;
  }
};

export let addMessageActionCreator = () => ({ type: ADD_MESSAGE });
export let updateMessageTextActionCreator = (body) => ({
  type: UPDATE_MESSAGE_TEXT,
  newText2: body,
});

export default dialogsReducer;
