import styled from "styled-components";
import Button from "../Button/Button";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const ListContainer = () => {
  const todoLists = useSelector((state: RootState) => state.todo.todoLists);

  return (
    <Container>
      {todoLists.map((el, idx) => {
        return (
          <WrapperBox key={idx}>
            <TextBox>{el}</TextBox>
            <DeleteBox>
              <Button text="delete" />
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
`;

const TextBox = styled.div``;

const DeleteBox = styled.div``;

export default ListContainer;
