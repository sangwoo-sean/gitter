import styled from "styled-components";
import Head from "./layout/Head";
import Body from "./layout/Body";
import Footer from "./layout/Footer";
import Modal from "react-modal";
import { useState } from "react";

Modal.setAppElement("#root");

const modalStyle = {
  content: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "20rem",
    height: "10rem",
    textAlign: "center" as const,
    display: "flex",
    flexDirection: "column" as const,
    justifyContent: "space-between"
  }
};

export default function App2() {
  const [modalShow, setModalShow] = useState<boolean>(false);

  return (
    <Styled>
      <Head />
      <Body />
      <Footer />
      {modalShow && (
        <Modal isOpen={true} contentLabel={"example"} style={modalStyle}>
          <h1>정답입니다!</h1>
          <div>
            <StyledButton>재도전</StyledButton>
            <StyledBlackButton>다음으로</StyledBlackButton>
          </div>
        </Modal>
      )}
    </Styled>
  );
}
const Styled = styled.div`
  height: 100vh;
  overflow: hidden;
`;

const StyledButton = styled.button`
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  margin: 1.5rem;
  cursor: pointer;
`;

const StyledBlackButton = styled(StyledButton)`
  background: black;
  color: white;
`;
