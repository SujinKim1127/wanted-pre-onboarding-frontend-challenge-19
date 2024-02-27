import styled from "styled-components";
import Button from "../Button/Button";

const List = () => {
  return (
    <Container>
      <TextBox></TextBox>
      <DeleteBox>
        <Button text="delete" />
      </DeleteBox>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
`;

const TextBox = styled.div``;

const DeleteBox = styled.div``;

export default List;
