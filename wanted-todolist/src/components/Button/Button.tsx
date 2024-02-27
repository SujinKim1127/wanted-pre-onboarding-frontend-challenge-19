import styled from "styled-components";

interface BProps {
  text: string;
  onClick: () => void;
}

const Button = ({ text, onClick }: BProps) => {
  return <Container onClick={onClick}>{text}</Container>;
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
