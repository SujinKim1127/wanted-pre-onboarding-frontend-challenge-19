import styled from "styled-components";
import Input from "./components/Input/Input";
import Button from "./components/Button/Button";
import { useState } from "react";
import ListContainer from "./components/List/ListContainer";

function App() {
  const [input, setInput] = useState<string>("");

  return (
    <Container>
      <HeadBox>
        <Input input={input} setInput={setInput} />
        <Button text="add" />
      </HeadBox>
      <ListContainer />
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

export default App;
