import styled from "styled-components";
import LeftGraph from "./LeftGraph";
import RightGraph from "./RightGraph";
import Commit from "../components/Commit";

export default function GitGraph() {
  return (
    <Styled>
      <LeftGraph>
        <tr>
          <StyledTd>
            <Commit branches={["HEAD", "main"]}>2</Commit>
          </StyledTd>
          <StyledTd></StyledTd>
        </tr>
        <tr>
          <StyledTd>
            <Commit toTop={true}>1</Commit>
          </StyledTd>
          <StyledTd></StyledTd>
        </tr>
      </LeftGraph>
      <RightGraph>
        <tr>
          <StyledTd>
            <Commit branches={["HEAD", "main"]}>1</Commit>
          </StyledTd>
          <StyledTd></StyledTd>
        </tr>
      </RightGraph>
    </Styled>
  );
}

const Styled = styled.div`
  flex: 1;
  display: flex;
`;

const StyledTd = styled.td`
  width: 2rem;
  height: 2rem;
  text-align: center;
`;
