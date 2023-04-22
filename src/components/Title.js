import styled from "styled-components";

export default function Title() {
  return (
    <>
      <Title>
        <h3>My todo list</h3>
        <h4>React</h4>
      </Title>
    </>
  );
}

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
`;
