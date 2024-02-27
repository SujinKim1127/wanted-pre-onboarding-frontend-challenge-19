import styled from "styled-components";
import Input from "./components/Input/Input";
import Button from "./components/Button/Button";
import { useState } from "react";
import ListContainer from "./components/List/ListContainer";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState, setTodoLists } from "./store/store";

function App() {
  const [input, setInput] = useState<string>("");
  const dispatch = useDispatch<AppDispatch>();
  const todoLists = useSelector((state: RootState) => state.todo.todoLists);

  const handleOnClickAddBtn = () => {
    const updatedTodoLists = [...todoLists, input];
    dispatch(setTodoLists(updatedTodoLists));
    setInput("");
  };
  return (
    <Container>
      <HeadBox>
        <Input input={input} setInput={setInput} />
        <Button text="add" onClick={handleOnClickAddBtn} />
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
