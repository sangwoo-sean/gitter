import styled from "styled-components";
import GitGraph from "./GitGraph";
import Lesson from "./Lesson";
import { useState } from "react";
import { Branch, Commit } from "../util/git";

const firstCommit = new Commit(1, null);
const secondCommit = new Commit(2, firstCommit);
const HEAD = new Branch("HEAD", secondCommit);
const mainBranch = new Branch("main", firstCommit);
mainBranch.move(secondCommit);
secondCommit.branches = [HEAD, mainBranch];

const lg = [
  [firstCommit, null],
  [secondCommit, null]
];

const rightCommit = new Commit(1, null);
rightCommit.branches = [new Branch("HEAD", rightCommit), new Branch("main", rightCommit)];
const rg = [[rightCommit, null]];

export default function Body() {
  const [leftGraph, setLeftGraph] = useState<Array<Array<Commit | null>>>(lg);
  const [rightGraph, setRightGraph] = useState<Array<Array<Commit | null>>>(rg);

  return (
    <Styled>
      <GitGraph leftGraph={leftGraph} rightGraph={rightGraph} />
      <Lesson />
    </Styled>
  );
}

const Styled = styled.div`
  width: 100%;
  height: calc(100% - 4rem - 3rem);
  display: flex;
`;
