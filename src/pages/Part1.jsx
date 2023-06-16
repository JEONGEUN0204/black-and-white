import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";

import Modal from "../componets/Modal";
import Button from "../componets/Button";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #353b48;
  height: 100vh;
  font-family: "Orbit";
`;

const PlayContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #353b48;
  height: 100vh;
  width: 100%;
  font-family: "Orbit";
`;
const ResultBox = styled.div`
  width: 50%;
  height: 100vh;
  background-color: white;
  padding: 30px 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;

  & .result-title {
    font-size: 35px;
    margin-bottom: 50px;
  }
`;

const PlayerBox = styled.div`
  width: 100%;

  & > .title {
    margin-bottom: 20px;
  }
  & > .box {
    display: flex;
  }
`;
const SmallBox = styled.div`
  width: 40px;
  height: 40px;
  background-color: ${(props) => props.color};
  color: ${(props) => props.fontColor};
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid gray;
`;

const ScoreBox = styled.table`
  margin-top: 60px;
  border: 2px solid #fbc531;

  & > thead {
    font-size: 20px;
  }

  & th,
  td {
    border: 2px solid #fbc531;
    padding: 10px 20px;
    text-align: center;
  }
`;
const PlayBox = styled.div`
  width: 50%;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  & > .title {
    font-size: 35px;
    margin-bottom: 150px;
    margin-top: 30px;
    color: white;
  }
  & > .button {
    width: 150px;
    height: 40px;
    border-radius: 10px;
    position: absolute;
    top: 50%;
    left: 40%;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

function Part1() {
  const [toggle, setToggle] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const name = searchParams.get("name");
  const [color, setColor] = useState(new Array(2));
  const [box, setBox] = useState([
    { black: 5, white: 4 },
    { black: 5, white: 4 },
  ]);
  const [score, setScore] = useState([0, 0]);
  const [win, setWin] = useState(-1);
  const [card, setCard] = useState([
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
  ]);
  const [number, setNumber] = useState([0, 0]);
  const [turn, setTurn] = useState(1);
  const [count, setCount] = useState(0);
  const [interval, setInterval] = useState(false);

  useEffect(() => {
    name ? setToggle(false) : setToggle(true);
  }, [searchParams]);

  useEffect(() => {
    if (count !== 0) {
      if (count % 2 === 0) {
        handleRoundResult();
      } else {
        setTurn(turn === 1 ? 2 : 1);
      }
    }
  }, [count]);

  const clickCard = (num) => {
    if (window.confirm(`${num}을 선택하시겠습니까?`)) {
      setCount(count + 1);
      let tempCard = [...card];
      tempCard[turn - 1].splice(num - 1, 1);
      setCard([...tempCard]);
      let tempNumber = [...number];
      tempNumber[turn - 1] = num;
      setNumber([...tempNumber]);
      let tempBox = [...box];
      let tempColor = [...color];
      if (num % 2 === 0) {
        tempBox[turn - 1].white--;
        tempColor[turn - 1] = "white";
      } else {
        tempBox[turn - 1].black--;
        tempColor[turn - 1] = "black";
      }
      setBox([...tempBox]);
      setColor([...tempColor]);
      setInterval(true);
    }
  };

  const handleRoundResult = () => {
    let tempScore = [...score];
    if (number[0] > number[1]) {
      setWin(1);
      setTurn(1);
      tempScore[0]++;
    } else if (number[0] < number[1]) {
      setWin(2);
      setTurn(2);
      tempScore[1]++;
    } else {
      setWin(0);
    }
    setScore([...tempScore]);
  };

  const handleReset = () => {
    if (count % 2 === 0) {
      setColor(new Array(2));
      setWin(-1);
    }
    setInterval(false);
  };

  return (
    <>
      {toggle ? (
        <Modal link={"/part1"} />
      ) : (
        // <Container>
        //   {!player ? (
        //     <>
        //       <Link to={`/part1?name=${name}&player=1`}>
        //         <Button text={"Player1"} marginBottom={"10px"} />
        //       </Link>
        //       <Link to={`/part1?name=${name}&player=2`}>
        //         <Button text={"Player2"} />
        //       </Link>
        //     </>
        //   ) : (
        <PlayContainer>
          <ResultBox>
            <div className="result-title">Result</div>
            <div>
              <div>
                <PlayerBox style={{ marginBottom: "30px" }}>
                  <div className="title">Player1 : {color[0]}</div>
                  <div className="box">
                    {new Array(box[0].black).fill(0).map(() => {
                      return <SmallBox color={"black"} />;
                    })}
                    {new Array(box[0].white).fill(0).map(() => {
                      return <SmallBox color={"white"} />;
                    })}
                  </div>
                </PlayerBox>
                <PlayerBox style={{ marginBottom: "60px" }}>
                  <div className="title">Player2 : {color[1]}</div>
                  <div className="box">
                    {new Array(box[1].black).fill(0).map(() => {
                      return <SmallBox color={"black"} />;
                    })}
                    {new Array(box[1].white).fill(0).map(() => {
                      return <SmallBox color={"white"} />;
                    })}
                  </div>
                </PlayerBox>
              </div>
              <div style={{ textAlign: "center", fontSize: "25px" }}>
                {win !== -1 &&
                  (win === 0 ? "비겼습니다" : `Player${win}이 이겼습니다.`)}
              </div>
            </div>

            <ScoreBox>
              <thead>
                <tr>
                  <th colspan="2">Score</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Player1</td>
                  <td>Player2</td>
                </tr>
                <tr>
                  <td>{score[0]}</td>
                  <td>{score[1]}</td>
                </tr>
              </tbody>
            </ScoreBox>
          </ResultBox>
          <PlayBox>
            {interval ? (
              <div className="button" onClick={handleReset}>
                Next
              </div>
            ) : (
              <>
                <div className="title">Player{turn}</div>
                <div style={{ display: "flex" }}>
                  {card[turn - 1].map((item) => {
                    return (
                      <SmallBox
                        color={item % 2 === 0 ? "white" : "black"}
                        fontColor={item % 2 === 0 ? "black" : "white"}
                        onClick={() => clickCard(item)}
                      >
                        {item}
                      </SmallBox>
                    );
                  })}
                </div>
              </>
            )}
          </PlayBox>
        </PlayContainer>
        //   )}
        // </Container>
      )}
    </>
  );
}

export default Part1;
