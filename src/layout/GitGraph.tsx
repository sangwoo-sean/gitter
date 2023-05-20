import styled from "styled-components";
import LeftGraph from "./LeftGraph";
import RightGraph from "./RightGraph";
import Commit from "../components/Commit";
import { Branch, Commit as CommitCls } from "../util/git";

interface GitGraphProps {
  leftGraph: Array<Array<CommitCls | null>>;
  rightGraph: Array<Array<CommitCls | null>>;
}

export default function GitGraph(props: GitGraphProps) {
  const { leftGraph, rightGraph } = props;

  const drawCommit = (commit: CommitCls | null) => {
    if (!commit) return <Commit exist={false} id={null}></Commit>;

    return <Commit branches={commit.branches} id={commit.id}></Commit>;
  };

  return (
    <Styled>
      <LeftGraph>
        {leftGraph.reverse().map((commits, index) => (
          <tr key={index}>
            {commits.map((commit, inner_index) => (
              <StyledTd key={inner_index}>{drawCommit(commit)}</StyledTd>
            ))}
          </tr>
        ))}
      </LeftGraph>
      <RightGraph>
        {rightGraph.reverse().map((commits, index) => (
          <tr key={index}>
            {commits.map((commit, inner_index) => (
              <StyledTd key={inner_index}>{drawCommit(commit)}</StyledTd>
            ))}
          </tr>
        ))}
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
