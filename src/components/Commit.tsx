import { styled } from "styled-components";

const BLUE_COLOR = "#7eb6ff";
const RED_COLOR = "#ff98d2";
const YELLOW_COLOR = "#fff979";

interface CommitProps {
  children?: React.ReactNode;
  toTop?: boolean;
  toTopRight?: boolean;
  toTopLeft?: boolean;
  exist?: boolean;
  branches?: Array<string>;
}

export default function Commit(props: CommitProps) {
  const { children, toTop = false, toTopRight = false, toTopLeft = false, exist = true, branches } = props;

  return (
    <div style={{ position: "relative" }}>
      {toTop && <LineToTop />}
      {toTopRight && <LineToTopRight />}
      {toTopLeft && <LineToTopLeft />}
      {exist ? (
        <>
          <StyledCommit>{children}</StyledCommit>
          <StyledBranches>
            {branches?.map((branch) => (
              <StyledBranch>{branch}</StyledBranch>
            ))}
          </StyledBranches>
        </>
      ) : (
        <EmptyCommit></EmptyCommit>
      )}
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

const StyledBranches = styled.div`
  height: 2rem;
  width: 3rem;
  position: absolute;
  top: 50%;
  left: -3rem;
  transform: translate(0, -50%);
`;

const StyledBranch = styled.div`
  font-size: 0.75rem;
  width: 100%;
  height: 1rem;
  background: ${YELLOW_COLOR};
  margin-bottom: 0.25rem;
  padding: 0.1rem 0;
  position: relative;
  font-weight: bold;

  &:after {
    content: "";
    width: 14px;
    height: 14px;
    position: absolute;
    top: 2.5px;
    right: -8px;
    transform: rotate(45deg);
    background: ${YELLOW_COLOR};
  }
`;
