import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import Modal from "../componets/Modal";

const Container = styled.div``;
function Part2() {
  const [toggle, setToggle] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    searchParams.get("name") ? setToggle(false) : setToggle(true);
  }, [searchParams]);
  return <>{toggle ? <Modal link={"/part2"} /> : <Container></Container>}</>;
}

export default Part2;
