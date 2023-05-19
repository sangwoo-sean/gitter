import { styled } from "styled-components";

const BLUE_COLOR = "#7eb6ff";
const RED_COLOR = "#ff98d2";

interface CommitProps {
  children?: React.ReactNode;
  toTop?: boolean;
  toTopRight?: boolean;
  toTopLeft?: boolean;
  exist?: boolean;
}

export default function Commit(props: CommitProps) {
  const { children, toTop = false, toTopRight = false, toTopLeft = false, exist = true } = props;

  return (
    <div style={{ position: "relative" }}>
      {toTop && <LineToTop />}
      {toTopRight && <LineToTopRight />}
      {toTopLeft && <LineToTopLeft />}
      {exist ? <StyledCommit>{children}</StyledCommit> : <EmptyCommit></EmptyCommit>}
    </div>
  );
}

const StyledCommit = styled.div`
  padding: 0.5rem;
  margin: 1rem;
  background: ${BLUE_COLOR};
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  text-align: center;
`;

const EmptyCommit = styled(StyledCommit)`
  background: transparent;
`;

const LineToTop = styled.div`
  position: absolute;
  left: 50%;
  bottom: 50%;
  transform: translate(-50%, 0);
  width: 10px;
  height: 5.5rem;
  background: ${BLUE_COLOR};
  z-index: -1;
`;

const LineToTopRight = styled.div`
  position: absolute;
  right: -20%;
  bottom: 50%;
  transform: translate(-50%, 0) rotate(45deg);
  width: 10px;
  height: 5.5rem;
  background: ${BLUE_COLOR};
  z-index: -1;
`;

const LineToTopLeft = styled.div`
  position: absolute;
  left: 0;
  bottom: 50%;
  transform: translate(-50%, 0) rotate(-45deg);
  width: 10px;
  height: 5.5rem;
  background: ${BLUE_COLOR};
  z-index: -1;
`;
