import styled from "styled-components";

interface FooterProps {
  level: number;
  levelUp: () => void;
  levelDown: () => void;
}

export default function Footer(props: FooterProps) {
  const { level, levelUp, levelDown } = props;

  return (
    <Styled>
      <StyledButton onClick={levelDown}>&lt;</StyledButton>
      <LevelIndicator>{level}</LevelIndicator>
      <StyledButton onClick={levelUp}>&gt;</StyledButton>
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
