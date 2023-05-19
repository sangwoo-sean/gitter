import styled from "styled-components";
import LeftGraph from "./LeftGraph";
import RightGraph from "./RightGraph";

export default function GitGraph() {
  return (
    <Styled>
      <LeftGraph />
      <RightGraph />
    </Styled>
  );
}

const Styled = styled.div`
  flex: 1;
  display: flex;
`;
