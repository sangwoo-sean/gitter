import { useRef, useState } from "react";
import styled from "styled-components";

const ALLOWED_COMMANDS = ["commit", "checkout", "branch"];

export default function Lesson() {
  const input = useRef<HTMLInputElement>(null);
  const [invalid, setInvalid] = useState<boolean>(false);

  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && input.current && input.current.value) {
      const command = input.current.value;

      const args = command.split(" ");
      if (args.length < 2) {
        setInvalid(true);
        return;
      }

      const [GIT, operation, ...options] = args;

      if (GIT !== "git") {
        setInvalid(true);
        return;
      }

      if (!ALLOWED_COMMANDS.includes(operation)) {
        setInvalid(true);
        return;
      }
      setInvalid(false);

      if (command === "git commit") {
        console.log("success");
      } else {
        console.log("fail");
      }
    }
  };

  return (
    <Styled>
      <StyledInstruction>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam ipsum, sit quae harum dolores tenetur animi dignissimos est voluptatum,
        non quis accusantium? Enim, dolor consectetur officiis quam debitis placeat ut eligendi, repellat maxime corporis voluptatibus in doloribus,
        totam soluta magnam. Architecto nemo doloremque laboriosam officiis pariatur nisi nihil dolorum. Soluta, nostrum ullam. Cumque vero quo ipsam
        maxime incidunt sit hic cupiditate temporibus saepe quis voluptatibus ducimus earum, dolorem mollitia, obcaecati at! Ullam velit vitae
        officia, adipisci eius architecto ratione quo esse? Alias odio recusandae eaque incidunt perspiciatis, dolorum accusamus, quisquam quo vero
        officiis ullam maxime, dolore aut optio iste magnam.
      </StyledInstruction>
      <div>{invalid && <span style={{ color: "red" }}>올바르지 않은 명령어입니다</span>}</div>
      <div>
        <StyledInput type="text" style={{ width: "90%" }} onKeyDown={onKeyDown} ref={input} />
      </div>
    </Styled>
  );
}

const Styled = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
  border-left: 1px solid black;
`;

const StyledInput = styled.input`
  padding: 0.2rem 0.3rem;
`;

const StyledInstruction = styled.div`
  flex: 1;
  padding: 2rem;
`;
