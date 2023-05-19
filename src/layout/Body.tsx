import styled from "styled-components";
import GitGraph from "./GitGraph";
import Lesson from "./Lesson";

export default function Body() {
  return (
    <Styled>
      <GitGraph />
      <Lesson />
    </Styled>
  );
}

const Styled = styled.div`
  width: 100%;
  height: calc(100% - 4rem - 3rem);
  display: flex;
`;
