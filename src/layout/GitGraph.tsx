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

  const drawCommit = (commit: CommitCls | null, row: number, col: number, graph: Array<Array<CommitCls | null>>) => {
    if (!commit) return <Commit exist={false} id={null}></Commit>;

    let toTop = false;
    let toTopLeft = false;
    let toTopRight = false;

    // draw line to top if commit exist
    if (row > 0 && !!graph[row - 1][col]) {
      toTop = true;
    }

    // draw line to top left if commit exist
    if (row > 0 && col > 0 && !!graph[row - 1][col - 1]) {
      toTopLeft = true;
    }

    // draw line to right if commit exist
    if (row > 0 && col + 1 < graph[0].length && !!graph[row - 1][col + 1]) {
      toTopRight = true;
    }

    return <Commit branches={commit.branches} id={commit.id} toTop={toTop} toTopLeft={toTopLeft} toTopRight={toTopRight}></Commit>;
  };

  const drawGraph = (graph: Array<Array<CommitCls | null>>) => {
    const reversedGraph = [...graph].reverse();

    return reversedGraph.map((commits, row) => (
      <tr key={row}>
        {commits.map((commit, col) => (
          <StyledTd key={col}>{drawCommit(commit, row, col, reversedGraph)}</StyledTd>
        ))}
      </tr>
    ));
  };

  return (
    <Styled>
      <LeftGraph>{drawGraph(leftGraph)}</LeftGraph>
      <RightGraph>{drawGraph(rightGraph)}</RightGraph>
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
