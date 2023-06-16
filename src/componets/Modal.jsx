import styled from "@emotion/styled";
import { Link } from "react-router-dom";

import Input from "../componets/Input";
import { useState } from "react";

const Container = styled.div`
  background-color: gray;
  opacity: 0.5;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Orbit";
`;

const Box = styled.div`
  width: 300px;
  height: 300px;
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Button = styled.div`
  background-color: #2f3640;
  color: white;
  height: 20px;
  width: 50px;
  padding: 10px;
  border-radius: 10px;
  text-align: center;
  margin-top: 20px;
`;

const Text = styled.div`
  text-align: center;
  margin-bottom: 30px;
`;
function Modal(props) {
  const { link } = props;
  const [text, setText] = useState("");
  return (
    <Container>
      <Box>
        <Text>방 이름을 설정해주세요.</Text>
        <Input width={"80%"} setText={setText} text={text} />
        {text && (
          <Button>
            <Link to={`${link}?name=${text}`}>확인</Link>
          </Button>
        )}
      </Box>
    </Container>
  );
}

export default Modal;
