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

let count = 3;

function App() {
  const [input, setInput] = useState<string>(""); //todo: useRef 로 변경
  const [commandHistory, setCommandHistory] = useState<Array<string>>(['git commit -m "asd"', 'git commit -m "123"', 'git commit -m "qwe"']);
  const [commitHistory, setCommitHistory] = useState<Array<Commit>>([
    { id: 1, message: "asd" },
    { id: 2, message: "123" },
    { id: 3, message: "qwe" }
  ]);
  const [isValidCommand, setIsValidCommand] = useState<boolean>(true);

  function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    setInput(event.target.value);
  }

  function onKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      const valid = execute(input);

      setIsValidCommand(valid);
      if (valid) {
        setCommitHistory((history) => [...history, new Commit(count++, input)]); //todo: input 이 아니라 메세지만 입력하도록

        setInput("");
      }
    }
  }

  return (
    <AppWrapper>
      <h1>Hello</h1>
      <div>
        {[...commitHistory].reverse().map((commit) => (
          <div className="commit" key={commit.id}>
            <span>
              {commit.id} {commit.message}
            </span>
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
        <ErrorText style={{ display: isValidCommand ? "none" : "block" }}>올바르지 않은 명령어입니다.</ErrorText>
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
`;

export default App;
