import styled from "styled-components";
import Commit from "../components/Commit";

export default function LeftGraph() {
  return (
    <Styled>
      <StyledTitle>To Be</StyledTitle>
      <div>
        <table>
          <tbody>
            <tr>
              <StyledTd>
                <Commit>4</Commit>
              </StyledTd>
              <StyledTd></StyledTd>
            </tr>
            <tr>
              <StyledTd>
                <Commit toTop={true} exist={false}></Commit>
              </StyledTd>
              <StyledTd>
                <Commit toTopLeft={true}>3</Commit>
              </StyledTd>
            </tr>
            <tr>
              <StyledTd>
                <Commit toTop={true} toTopRight={true}>
                  2
                </Commit>
              </StyledTd>
              <StyledTd></StyledTd>
            </tr>
            <tr>
              <StyledTd>
                <Commit toTop={true}>1</Commit>
              </StyledTd>
              <StyledTd></StyledTd>
            </tr>
          </tbody>
        </table>
      </div>
    </Styled>
  );
}

const Styled = styled.div`
  flex: 1;
  border-right: 1px solid black;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 2rem;
`;

const StyledTitle = styled.h2`
  text-align: center;
  position: absolute;
  top: 1rem;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const StyledTd = styled.td`
  width: 2rem;
  height: 2rem;
  text-align: center;
`;
