import styled from "styled-components";

export default function RightGraph({ children }: React.PropsWithChildren) {
  return (
    <Styled>
      <div>
        <table>
          <tbody>{children}</tbody>
        </table>
      </div>
    </Styled>
  );
}

const Styled = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 2rem;
`;
