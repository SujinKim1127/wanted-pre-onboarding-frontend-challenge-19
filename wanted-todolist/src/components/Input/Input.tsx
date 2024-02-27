import styled from "styled-components";
import { ChangeEvent } from "react";

interface IProps {
  input: string;
  setInput: (string: string) => void;
}

const Input = ({ input, setInput }: IProps) => {
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  return (
    <InputBox
      placeholder="input"
      value={input}
      onChange={(e) => handleOnChange(e)}
    ></InputBox>
  );
};

const InputBox = styled.input`
  padding-left: 10px;
  width: 8rem;
  height: 2rem;
`;

export default Input;
