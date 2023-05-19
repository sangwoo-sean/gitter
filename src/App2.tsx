import styled from "styled-components";
import Head from "./layout/Head";
import Body from "./layout/Body";
import Footer from "./layout/Footer";

export default function App2() {
  return (
    <Styled>
      <Head />
      <Body />
      <Footer />
    </Styled>
  );
}
const Styled = styled.div`
  height: 100vh;
  overflow: hidden;
`;
