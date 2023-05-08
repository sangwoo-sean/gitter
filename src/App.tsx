import "./App.css";
import styled from "styled-components";

function App() {
  class Commit {
    id: string;
    message?: string;

    constructor(id: string, message?: string) {
      this.id = id;
      this.message = message;
    }
  }

  return (
    <AppWrapper>
      <h1>Hello</h1>
      <input type="text" />
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
