import { useState } from "react";
import "./App.css";
import {
  TodoDeleteButton,
  TodoCompleteButton,
  Addbutton,
} from "./styled-components/buttons";
import Global from "./styled-components/global";
import {
  TodoContainer,
  Addform,
  Formlabel,
  Top,
} from "./styled-components/container";

function App() {
  const [lists, setLists] = useState([
    {
      id: 1,
      title: "리액트 공부하기",
      body: "리액트 기초를 공부해봅시다.",
      isDone: false,
    },
    {
      id: 2,
      title: "JS 공부하기",
      body: "너무 어렵다",
      isDone: true,
    },
  ]);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const onTitleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const onBodyChangeHandler = (event) => {
    setBody(event.target.value);
  };

  //추가하기 버튼 클릭
  function onClickHandler() {
    const newList = {
      id: lists.length + 1,
      title: title,
      body: body,
      isDone: false,
    };
    setLists([...lists, newList]);
    setTitle("");
    setBody("");
  }

  //삭제하기 버튼 클릭
  const clickRemoveButtonHandler = (id) => {
    const newLists = lists.filter((list) => list.id !== id);
    setLists(newLists);
  };

  //완료하기 버튼 클릭
  const clickCompleteButtonHandler = (id) => {
    const newLists = lists.map((list) => {
      if (list.id === id) {
        return { ...list, isDone: true };
      } else {
        return list;
      }
    });
    setLists(newLists);
  };

  //취소하기 버튼 클릭
  const clickCancelButtonHanler = (id) => {
    const newLists = lists.map((list) => {
      if (list.id === id) {
        return { ...list, isDone: false };
      } else {
        return list;
      }
    });
    setLists(newLists);
  };

  const workingLists = lists.filter((list) => !list.isDone);
  const doneLists = lists.filter((list) => list.isDone);

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
        {workingLists.map(function (item) {
          return (
            <div key={item.id}>
              <TodoContainer>
                <h2>{item.title}</h2>
                <div>{item.body}</div>
                <div>
                  <TodoDeleteButton
                    onClick={() => clickRemoveButtonHandler(item.id)}
                  >
                    삭제하기
                  </TodoDeleteButton>
                  <TodoCompleteButton
                    onClick={() => clickCompleteButtonHandler(item.id)}
                  >
                    완료
                  </TodoCompleteButton>
                </div>
              </TodoContainer>
            </div>
          );
        })}
      </Global>

      <h2>Done..! 🎉</h2>
      <Global>
        {doneLists.map(function (item) {
          return (
            <div key={item.id}>
              <TodoContainer>
                <h2>{item.title}</h2>
                <div>{item.body}</div>
                <div>
                  <TodoDeleteButton
                    onClick={() => clickRemoveButtonHandler(item.id)}
                  >
                    삭제하기
                  </TodoDeleteButton>
                  <TodoCompleteButton
                    onClick={() => clickCancelButtonHanler(item.id)}
                  >
                    취소
                  </TodoCompleteButton>
                </div>
              </TodoContainer>
            </div>
          );
        })}
      </Global>
    </div>
  );
}

export default App;
