const ADD_TODO = "ADD_TODO";

const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload: payload,
  };
};

const initialState = [
  {
    id: 1,
    title: "리액트 공부하기",
    body: "리액트 기초를 공부해봅시다.",
    isDone: false,
  },
  {
    id: 2,
    title: "리덕스 공부하기",
    body: "리덕스 기초를 공부해봅시다.",
    isDone: false,
  },
];

// const todos = (state = initialState, action) => {
//     switch (action.type){
//         case
//     }
// }
