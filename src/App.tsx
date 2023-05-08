import "./App.css";
import styled from "styled-components";
import { useState } from "react";
import execute from "./git";

function App() {
  const [input, setInput] = useState<string>("");
  const [history, setHistory] = useState<Array<string>>([]);
  const [isValidCommand, setIsValidCommand] = useState<boolean>(true);

  function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    setInput(event.target.value);
  }

  function onKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      const valid = execute(input);

      setIsValidCommand(valid);
      if (valid) {
        setHistory((history) => [...history, input]);

        setInput("");
      }
    }
  }

  return (
    <AppWrapper>
      <h1>Hello</h1>
      <ul>
        {history.map((command, index) => (
          <li key={index}>{command}</li>
        ))}
      </ul>
      <input type="text" value={input} onChange={onChange} onKeyDown={onKeyDown} />
      <ErrorText style={{ display: isValidCommand ? "none" : "inline" }}>올바르지 않은 명령어입니다.</ErrorText>
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const ErrorText = styled.span`
  color: red;
`;

export default App;
