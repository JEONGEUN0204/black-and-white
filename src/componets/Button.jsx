import styled from "@emotion/styled";

const ButtonBox = styled.div`
  background-color: #f5f6fa;
  width: 150px;
  height: 50px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom : 0)};
`;

function Button(props) {
  const { marginBottom, text } = props;
  return <ButtonBox marginBottom={marginBottom}>{text}</ButtonBox>;
}

export default Button;
