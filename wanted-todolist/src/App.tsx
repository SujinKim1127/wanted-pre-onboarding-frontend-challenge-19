import styled from "styled-components";
import Input from "./components/Input/Input";
import Button from "./components/Button/Button";
import List from "./components/List/List";

function App() {
  return (
    <Container>
      <HeadBox>
        <Input />
        <Button />
      </HeadBox>
      <List />
    </Container>
  );
}

const Container = styled.div``;

const HeadBox = styled.div``;

export default App;
