const ALLOWED_COMMANDS = ["commit"];

interface executeResult {
  valid: boolean;
  message?: string;
  error_message: string;
}

function execute(command: string): executeResult {
  let valid = true;
  let message: string | undefined;
  let error_message = "올바르지 않은 명령어입니다.";

  if (!command) valid = false;

  const args = command.split(" ");
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

  return { valid, message, error_message };
}

export default execute;
