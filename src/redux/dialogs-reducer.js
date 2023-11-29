const ADD_MESSAGE = "ADD-MESSAGE";

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
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        id: 5,
        message: action.message,
      };
      return {
        ...state,
        messagesData: [...state.messagesData, newMessage], // вместо метода push сразу при копировании массива добавила туда newMessage
        newMessageText: "",
      };
    default:
      return state;
  }
};

export let addMessageActionCreator = (message) => ({ type: ADD_MESSAGE, message });

export default dialogsReducer;
