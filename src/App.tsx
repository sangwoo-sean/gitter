import "./App.css";
import styled from "styled-components";
import { useState } from "react";
import execute from "./git";

class Commit {
  id: number;
  message?: string;

  constructor(id: number, message?: string) {
    this.id = id;
    this.message = message;
  }
}
const ALLOWED_COMMANDS = ["commit", "checkout"];

function App() {
  const [input, setInput] = useState<string>(""); //todo: useRef 로 변경
  const [commandHistory, setCommandHistory] = useState<Array<string>>([]);
  const [commitHistory, setCommitHistory] = useState<Array<Commit>>([new Commit(0, "")]);
  const [isValidCommand, setIsValidCommand] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string | undefined>("올바르지 않은 명령어입니다.");
  const [head, setHead] = useState<number>(0);

  function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    setInput(event.target.value);
  }

  function onKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter" && input) {
      const args = input.split(" ");
      if (args.length < 2) {
        setIsValidCommand(false);
        return;
      }

      const [GIT, operation, ...options] = args;

      if (GIT !== "git") {
        setIsValidCommand(false);
        return;
      }

      if (!ALLOWED_COMMANDS.includes(operation)) {
        setIsValidCommand(false);
        return;
      }

      const result = execute(operation, options);

      setIsValidCommand(true);
      if (result.status === "fail") {
        setErrorMessage(result.error_message);
        setIsValidCommand(false);
      } else {
        if (result.status === "success") {
          //nothing
        } else if (result.status === "add_history") {
          const message = result.message?.replace(/^"|"$/g, "");
          setHead((head) => head + 1);
          setCommitHistory((history) => [...history, new Commit(commitHistory.length, message)]);
        } else if (result.status === "amend_history") {
          setCommitHistory((history) => {
            const last_history = history[history.length - 1];
            last_history.message = result.message;
            return [...history];
          });
        } else if (result.status === "checkout") {
          if (result.commit !== undefined) setHead(result.commit);
        }
        setCommandHistory((history) => [...history, input]);
        setInput("");
      }
    }
  }

  return (
    <AppWrapper>
      <h1>Hello</h1>
      <div>
        {[...commitHistory].reverse().map((commit) => (
          <div className="commit" key={commit.id} style={{ position: "relative" }}>
            {commit.id === head && <HeadIndicator>head→</HeadIndicator>}
            <CommitId>{commit.id}</CommitId>
            <CommitMessage>{commit.message}</CommitMessage>
          </div>
        ))}
      </div>
      <div style={{ position: "relative" }}>
        <ul>
          {commandHistory.map((command, index) => (
            <li key={index}>{command}</li>
          ))}
        </ul>
        <input type="text" value={input} onChange={onChange} onKeyDown={onKeyDown} />
        <ErrorText style={{ display: isValidCommand ? "none" : "block" }}>{errorMessage}</ErrorText>
      </div>
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  height: 90vh;
`;

const ErrorText = styled.span`
  color: red;
  position: absolute;
  white-space: nowrap;
`;

const HeadIndicator = styled.div`
  position: absolute;
  right: 50px;
`;

const CommitId = styled.span`
  margin-left: -20px;
`;

const CommitMessage = styled.span`
  margin-left: 40px;
`;

export default App;
