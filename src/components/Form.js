import React from "react";
import { useState } from "react";
import styled from "styled-components";

export default function Form() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const onTitleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const onBodyChangeHandler = (event) => {
    setBody(event.target.value);
  };

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

  return (
    <Addform>
      제목
      <Formlabel value={title} onChange={onTitleChangeHandler} type="text" />
      내용
      <Formlabel value={body} onChange={onBodyChangeHandler} type="text" />
      <Addbutton onClick={onClickHandler}>추가하기</Addbutton>
    </Addform>
  );
}

const Addform = styled.div`
  align-items: center;
  display: flex;
  gap: 20px;
  background-color: #eee;
  margin: 0 auto;
  padding: 30px;
  border-radius: 12px;
`;

const Formlabel = styled.input`
  font-weight: 700;
  height: 40px;
  width: 240px;
  border: none;
  border-radius: 12px;
  padding: 0 12px;
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
