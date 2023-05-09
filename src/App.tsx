import "./App.css";
import styled from "styled-components";
import { useState } from "react";
import execute from "./git";

function App() {
  const [input, setInput] = useState<string>("");
  const [history, setHistory] = useState<Array<string>>([]);
  const [isValidCommand, setIsValidCommand] = useState<boolean>(true);
  const [count, setCount] = useState<number>(1);

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
      <div>
        <div className="commit">
          <span>4</span>
        </div>
        <div className="commit">
          <span>3</span>
        </div>
        <div className="commit">
          <span>2</span>
        </div>
        <div className="commit">
          <span>1</span>
        </div>
      </div>
      <div>
        <ul>
          {history.map((command, index) => (
            <li key={index}>{command}</li>
          ))}
        </ul>
        <input type="text" value={input} onChange={onChange} onKeyDown={onKeyDown} />
        <ErrorText style={{ display: isValidCommand ? "none" : "inline" }}>올바르지 않은 명령어입니다.</ErrorText>
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
`;

export default App;
