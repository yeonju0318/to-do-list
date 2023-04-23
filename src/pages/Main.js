import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { addTodo, compelteTodo, deleteTodo } from "../redux/modules/todos";
import { Link } from "react-router-dom";

function Main() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos); //스토어에서 todos배열을 선택해서 todo에 할당

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const onTitleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const onBodyChangeHandler = (event) => {
    setBody(event.target.value);
  };

  const onClickHandler = () => {
    const newID = Date.now() + Math.floor(Math.random() * 100);
    dispatch(
      addTodo({
        id: newID,
        title,
        body,
        isDone: false,
      })
    );
    setTitle("");
    setBody("");
  };

  // id 값을 통해 filtering된 새로운 배열을 반환
  const clickRemoveButtonHandler = (id) => {
    dispatch(deleteTodo(id));
  };
  // id를 통해 완료된 항목을 업데이트
  const clickCompleteButtonHandler = (id) => {
    dispatch(compelteTodo(id));
  };

  return (
    <div>
      <Top>My Todo List</Top>
      <Addform>
        제목
        <Formlabel value={title} onChange={onTitleChangeHandler} type="text" />
        내용
        <Formlabel value={body} onChange={onBodyChangeHandler} type="text" />
        <Addbutton onClick={onClickHandler}>추가하기</Addbutton>
      </Addform>
      <h2>Working.. 🔥</h2>
      <Global>
        {todos
          .filter((todo) => !todo.isDone)
          .map((todo) => (
            <div key={todo.id}>
              <TodoContainer>
                <Link to={`/Detail/${todo.id}`}>상세보기</Link>
                <h2>{todo.title}</h2>
                <div>{todo.body}</div>
                <div>
                  <TodoDeleteButton
                    onClick={() => clickRemoveButtonHandler(todo.id)}
                  >
                    삭제하기
                  </TodoDeleteButton>
                  <TodoCompleteButton
                    onClick={() => clickCompleteButtonHandler(todo.id)}
                  >
                    완료
                  </TodoCompleteButton>
                </div>
              </TodoContainer>
            </div>
          ))}
      </Global>
      <h2>Done..! 🎉</h2>
      <Global>
        {todos
          .filter((todo) => todo.isDone)
          .map((todo) => (
            <div key={todo.id}>
              <TodoContainer>
                <Link to={`/Detail/${todo.id}`}>상세보기</Link>
                <h2>{todo.title}</h2>
                <div>{todo.body}</div>
                <div>
                  <TodoDeleteButton
                    onClick={() => clickRemoveButtonHandler(todo.id)}
                  >
                    삭제하기
                  </TodoDeleteButton>
                  <TodoCompleteButton
                    onClick={() => clickCompleteButtonHandler(todo.id)}
                  >
                    취소
                  </TodoCompleteButton>
                </div>
              </TodoContainer>
            </div>
          ))}
      </Global>
    </div>
  );
}

export default Main;

//button

const TodoDeleteButton = styled.button`
  background-color: #fff;
  border: 2px solid tomato;
  border-radius: 8px;
  cursor: pointer;
  height: 40px;
  width: 50%;
  margin-top: 20px;
`;
const TodoCompleteButton = styled.button`
  background-color: #fff;
  border: 2px solid greenyellow;
  border-radius: 8px;
  cursor: pointer;
  height: 40px;
  width: 50%;
  margin-top: 20px;
`;

const Addbutton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: tomato;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  color: #fff;
  width: 140px;
  height: 40px;
  font-weight: 800;
`;

//container

const Addform = styled.div`
  align-items: center;
  display: flex;
  gap: 20px;
  background-color: #eee;
  margin: 0 auto;
  padding: 30px;
  border-radius: 12px;
`;

const TodoContainer = styled.div`
  border: 4px solid mistyrose;
  border-radius: 12px;
  padding: 12px 24px 24px;
  width: 270px;
`;

const Formlabel = styled.input`
  font-weight: 700;
  height: 40px;
  width: 240px;
  border: none;
  border-radius: 12px;
  padding: 0 12px;
`;

const Top = styled.div`
  align-items: center;
  display: flex;
  height: 50px;
  border: 1px solid #ddd;
  padding: 0 20px;
`;

//header

const Global = styled.div`
  display: flex;
  gap: 20px;
`;
