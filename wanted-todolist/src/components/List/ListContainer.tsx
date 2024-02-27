import styled from "styled-components";
import Button from "../Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState, setTodoLists } from "../../store/store";
import { useState } from "react";

const ListContainer = () => {
  const [selectIdx, setSelectIdx] = useState<number>(-1);
  const todoLists = useSelector((state: RootState) => state.todo.todoLists);
  const dispatch = useDispatch<AppDispatch>();

  const handleOnClickDelete = () => {
    const updateTodoLists = [...todoLists];
    updateTodoLists.splice(selectIdx, 1);
    dispatch(setTodoLists(updateTodoLists));
  };

  return (
    <Container>
      {todoLists.map((el, idx) => {
        return (
          <WrapperBox key={idx}>
            <TextBox>{el}</TextBox>
            <DeleteBox>
              <Button
                text="delete"
                onClick={() => {
                  handleOnClickDelete();
                  setSelectIdx(idx);
                }}
              />
            </DeleteBox>
          </WrapperBox>
        );
      })}
    </Container>
  );
};

const Container = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border: 1px solid black;
  border-radius: 10px;
  width: 30rem;
  padding: 1rem;
`;

const WrapperBox = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;
`;

const TextBox = styled.div`
  width: 10rem;
`;

const DeleteBox = styled.div``;

export default ListContainer;
