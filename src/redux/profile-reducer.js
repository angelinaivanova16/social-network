const ADD_POST = "ADD-POST";
const UPDATE_POST_TEXT = "UPDATE-POST-TEXT";

const profileReducer = (state, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        ava: "/images/kolyaAva.jpg",
        message: state.newPostText,
        likes: 0,
      };
      state.postsData.push(newPost);
      state.newPostText = "";
      return state;
    case UPDATE_POST_TEXT:
      state.newPostText = action.newText;
      return state;
    default:
      return state;
  }
};

export let addPostActionCreator = () => ({ type: ADD_POST });
export let updatePostTextActionCreator = (text) => ({
  type: UPDATE_POST_TEXT,
  newText: text,
});

export default profileReducer;
