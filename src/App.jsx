import { useState } from "react";
import "./App.css";

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

  //추가된 리스트가 왜 밑으로 붙는건지?(오른쪽에 붙히고싶음)
  //완료 버튼 눌렀을때 Done필드로 들어가야하는데 왜안되는건지?????????(boolean값 변경은 한거같은데)

  const workingLists = lists.filter((list) => !list.isDone);
  const doneLists = lists.filter((list) => list.isDone);

  return (
    <div>
      <div className="Top">My Todo List</div>
      <div className="Addform">
        제목
        <input
          value={title}
          onChange={onTitleChangeHandler}
          className="Formlabel"
          type="text"
        />
        내용
        <input
          value={body}
          onChange={onBodyChangeHandler}
          className="Formlabel"
          type="text"
        />
        <button onClick={onClickHandler} className="Addbutton">
          추가하기
        </button>
      </div>
      <h2 className="List-title">Working.. 🔥</h2>
      <div style={{ display: "flex", gap: 20 }}>
        {workingLists.map(function (item) {
          return (
            <div key={item.id} className="List-wrapper">
              <div className="Todo-container">
                <h2>{item.title}</h2>
                <div>{item.body}</div>
                <div className="Button-set">
                  <button
                    onClick={() => clickRemoveButtonHandler(item.id)}
                    className="Todo-delete-button"
                  >
                    삭제하기
                  </button>
                  <button
                    onClick={() => clickCompleteButtonHandler(item.id)}
                    className="Todo-complete-button"
                  >
                    완료
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <h2 className="List-title">Done..! 🎉</h2>
      <div style={{ display: "flex", gap: 20 }}>
        {doneLists.map(function (item) {
          return (
            <div key={item.id} className="List-wrapper">
              <div className="Todo-container">
                <h2>{item.title}</h2>
                <div>{item.body}</div>
                <div className="Button-set">
                  <button
                    onClick={() => clickRemoveButtonHandler(item.id)}
                    className="Todo-delete-button"
                  >
                    삭제하기
                  </button>
                  <button
                    onClick={() => clickCancelButtonHanler(item.id)}
                    className="Todo-complete-button"
                  >
                    취소
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
