import styled from "styled-components";

export default function Footer() {
  return (
    <Styled>
      <StyledButton>&lt;</StyledButton>
      <LevelIndicator>1</LevelIndicator>
      <StyledButton>&gt;</StyledButton>
    </Styled>
  );
}

const Styled = styled.div`
  border-top: 1px solid black;
  height: 3rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LevelIndicator = styled.h2`
  margin: 1rem;
`;
const StyledButton = styled.button`
  all: unset;
  margin: 1rem;
  padding: 0.5rem 1rem;
  font-size: 2rem;
  font-weight: bold;
  cursor: pointer;
`;
