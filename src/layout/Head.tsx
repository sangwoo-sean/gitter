import styled from "styled-components";

export default function Head() {
  return (
    <Styled>
      <h1>Level 1: Commit</h1>
      <StyledButtons>
        <StyledButton>List</StyledButton>
        <StyledButton>다시하기</StyledButton>
      </StyledButtons>
    </Styled>
  );
}

const Styled = styled.div`
  border-bottom: 1px solid black;
  height: 4rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const StyledButtons = styled.div`
  position: absolute;
  right: 0;
  display: flex;
`;

const StyledButton = styled.button`
  all: unset;
  margin: 1rem;
  padding: 0.5rem 1rem;
  border: 1px solid black;
  border-radius: 4px;
  cursor: pointer;
`;
