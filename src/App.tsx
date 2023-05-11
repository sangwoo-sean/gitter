import "./App.css";
import styled from "styled-components";
import { useState } from "react";

class Commit {
  id: number;
  message?: string;

  constructor(id: number, message?: string) {
    this.id = id;
    this.message = message;
  }
}
const ALLOWED_COMMANDS = ["commit"];

function App() {
  const [input, setInput] = useState<string>(""); //todo: useRef 로 변경
  const [commandHistory, setCommandHistory] = useState<Array<string>>([]);
  const [commitHistory, setCommitHistory] = useState<Array<Commit>>([{ id: 0, message: "" }]);
  const [isValidCommand, setIsValidCommand] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string>("올바르지 않은 명령어입니다.");

  function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    setInput(event.target.value);
  }

  function onKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      let valid = true;
      let message: string | undefined;
      let error_message = "올바르지 않은 명령어입니다.";

      if (!input) valid = false;

      const args = input.split(" ");
      if (args.length < 3) valid = false;

      const [GIT, operation, ...options] = args;

      if (GIT !== "git") valid = false;

      if (!ALLOWED_COMMANDS.includes(operation)) valid = false;

      if (operation === "commit") {
        if (options.includes("-m")) {
          const index = options.indexOf("-m");
          const message_index = index + 1;

          if (options.length < message_index + 1) {
            valid = false;
            error_message = "커밋 메세지를 입력하세요";
          } else {
            message = options[message_index].replaceAll('"', "");
          }
        }

        if (options.includes("--amend")) {
          const new_message = prompt("마지막 커밋에 대해 수정할 메세지를 입력하세요");
          console.log(new_message);
          // amend 면 커밋이 쌓이는게 아니라 마지막 커밋에 대해 수정해야함.
        }
      }

      setIsValidCommand(valid);
      if (valid) {
        setCommitHistory((history) => [...history, new Commit(commitHistory.length, message)]);
        setCommandHistory((history) => [...history, input]);

        setInput("");
      } else {
        setErrorMessage(error_message);
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

export default App;
