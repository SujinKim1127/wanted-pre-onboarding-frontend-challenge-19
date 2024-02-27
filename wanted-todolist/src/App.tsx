import styled from "styled-components";
import Input from "./components/Input/Input";
import Button from "./components/Button/Button";
import List from "./components/List/List";
import { useState } from "react";

function App() {
  const [input, setInput] = useState<string>("");
  return (
    <Container>
      <HeadBox>
        <Input input={input} setInput={setInput} />
        <Button text="add" />
      </HeadBox>
      <ListContainer>
        <List />
      </ListContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100vw;
`;

const HeadBox = styled.div`
  display: flex;
`;

const ListContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border: 1px solid black;
  border-radius: 10px;
  width: 30rem;
  padding: 1rem;
`;

export default App;
