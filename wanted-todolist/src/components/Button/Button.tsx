import styled from "styled-components";

interface BProps {
  text: string;
}

const Button = ({ text }: BProps) => {
  return <Container>{text}</Container>;
};

const Container = styled.div`
  border: 1px solid black;
  border-radius: 5px;
  margin-left: 3rem;
  width: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Button;
