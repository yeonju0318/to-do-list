//action value
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const COMPLETE_TODO = "COMPLETE_TODO";

//Action Creator
export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload: payload,
  };
};

export const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload: payload,
  };
};

export const compelteTodo = (payload) => {
  return {
    type: COMPLETE_TODO,
    payload: payload,
  };
};

// Initial state
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
    isDone: true,
  },
];

//Reducer

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case DELETE_TODO:
      return state.filter((item) => item.id !== action.payload);
    case COMPLETE_TODO:
      return state.map((item) => {
        if (item.id === action.payload) {
          return { ...item, isDone: !item.isDone };
        } else {
          return item;
        }
      });

    default:
      return state;
  }
};

//export default reducer
export default todos;
