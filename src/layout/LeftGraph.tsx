import styled from "styled-components";

export default function LeftGraph() {
  return (
    <Styled>
      <StyledTitle>To Be</StyledTitle>
      <div>graph here</div>
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
