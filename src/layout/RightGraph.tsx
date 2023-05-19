import styled from "styled-components";
import Commit from "../components/Commit";

export default function RightGraph() {
  return (
    <Styled>
      <div>
        <table>
          <tbody>
            <tr>
              <StyledTd>
                <Commit>1</Commit>
              </StyledTd>
              <StyledTd>
                <Commit exist={false}></Commit>
              </StyledTd>
            </tr>
          </tbody>
        </table>
      </div>
    </Styled>
  );
}

const Styled = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 2rem;
`;
const StyledTd = styled.td`
  width: 2rem;
  height: 2rem;
  text-align: center;
`;
