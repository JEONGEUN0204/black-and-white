import styled from "@emotion/styled";
import { useState } from "react";

const InputBox = styled.input`
  height: 30px;
  width: ${(props) => props.width};
  padding-left: 10px;
  padding-right: 10px;
`;
function Input(props) {
  const { width, text, setText } = props;
  const onChange = (text) => {
    setText(text);
  };
  return (
    <InputBox
      onChange={(e) => onChange(e.target.value)}
      value={text}
      width={width}
    />
  );
}

export default Input;
