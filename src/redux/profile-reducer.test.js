import profileReducer, { addPostActionCreator } from "./profile-reducer";
// import { ReactDOM } from "react";
// import App from "../App";
// import React from "react";

it ('length of posts should be incremented', () => {
  // 1. test data
  let action = addPostActionCreator('hello');

  let state = {
    postsData: [
      {
        id: 1,
        ava: "/images/svetaAva.jpg",
        message: "Do not give up, the beginning is always the hardest.",
        likes: 20,
      },
      {
        id: 2,
        ava: "/images/mashaAva.jpg",
        message: "Hi! Never stop dreaming.",
        likes: 30,
      },
    ],
  };

  // 2. action
  let newState = profileReducer(state, action);

  // 3. expectation(ожидания). Мы хотим проверить, если редьюсер работает правильно, 
  // то после диспача этого action`a постов будет 3 штуки уже.
  expect(newState.postsData.length).toBe(3);
});