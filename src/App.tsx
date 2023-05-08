import "./App.css";
import styled from "styled-components";
import { useState } from "react";

function App() {
  const [input, setInput] = useState<string>("");
  const [history, setHistory] = useState<Array<string>>([]);

  class Commit {
    id: string;
    message?: string;

    constructor(id: string, message?: string) {
      this.id = id;
      this.message = message;
    }
  }

  function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    setInput(event.target.value);
  }

  function onKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      setHistory((history) => [...history, input]);
      setInput("");
    }
  }

  return (
    <AppWrapper>
      <h1>Hello</h1>
      <ul>
        {history.map((command) => (
          <li>{command}</li>
        ))}
      </ul>
      <input type="text" value={input} onChange={onChange} onKeyDown={onKeyDown} />
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export default App;
