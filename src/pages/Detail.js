import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Detail() {
  const params = useParams();
  const todo = useSelector((state) =>
    state.todos.find((todo) => todo.id === parseInt(params.id))
  );

  const navigate = useNavigate();

  return (
    <Boxlist>
      <Todobox>
        <Toptitle>
          <div>{`ID: ${todo.id}`}</div>
          <Buttonstyle
            onClick={() => {
              navigate("/");
            }}
          >
            이전으로
          </Buttonstyle>
        </Toptitle>
        <h2 style={{ padding: "0px 1em" }}>{todo.title}</h2>
        <div style={{ padding: "5em 30px" }}>{todo.body}</div>
      </Todobox>
    </Boxlist>
  );
}

export default Detail;

const Todobox = styled.div`
  width: 600px;
  height: 400px;
  border: 1px solid rgb(238, 238, 238);
  display: flex;
  flex-direction: column;
  -webkit-box-pack: justify;
  justify-content: space-between;
`;

const Boxlist = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  height: 100vh;
`;

const Buttonstyle = styled.button`
  border: 1px solid rgb(221, 221, 221);
  height: 40px;
  width: 120px;
  background-color: rgb(255, 255, 255);
  border-radius: 12px;
  cursor: pointer;
`;

const Toptitle = styled.div`
  display: flex;
  height: 80px;
  -webkit-box-pack: justify;
  justify-content: space-between;
  padding: 0px 24px;
  -webkit-box-align: center;
  align-items: center;
`;
