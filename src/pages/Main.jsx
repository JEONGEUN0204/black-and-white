import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import Button from '../componets/Button';

const Container = styled.div`
  height: 100vh;
  background-color: #353b48;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-family: "Orbit";
  font-size: 20px;
`;

function Main() {
  return (
    <Container>
      <Link to="/part1">
        <Button marginBottom={'10px'} text={'흑과백1'}/>
      </Link>
      <Link to="/part2">
        <Button text={'흑과백2'}/>
      </Link>
    </Container>
  );
}

export default Main;
