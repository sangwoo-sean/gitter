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
  }

  //명령어(2번째거)가 commit 일때 뒤의 옵션들을 모두 가져와서
  // --amend 옵션이 있는지확인후
  // 옵션이 있다면 prompt() 로 새로운 메세지 입력받아서 메세지 수정하기

  return { valid, message, error_message };
}

export default execute;
