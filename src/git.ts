interface executeResult {
  status: string;
  message?: string;
  error_message?: string;
  commit?: number;
  name?: string;
}

function execute(operation: string, options: Array<string>): executeResult {
  if (operation === "commit") {
    if (options.includes("-m")) {
      const index = options.indexOf("-m");
      const message_index = index + 1;

      if (options.length < message_index + 1) {
        return { status: "fail", error_message: "커밋 메세지를 입력하세요" };
      }

      return { status: "add_history", message: options[message_index] };
    }

    if (options.includes("--amend")) {
      const new_message = prompt("마지막 커밋에 대해 수정할 메세지를 입력하세요");

      if (!new_message) {
        return { status: "fail", error_message: "amend 가 중단되었습니다." };
      }

      return { status: "amend_history", message: new_message };
    }
  } else if (operation === "checkout") {
    if (options.length !== 1 || isNaN(Number(options[0]))) {
      return { status: "fail", error_message: "올바르지 않은 명령어입니다." };
    }

    return { status: "checkout", commit: Number(options) };
  } else if (operation === "branch") {
    if (options.length !== 1) {
      return { status: "fail", error_message: "올바르지 않은 명령어입니다." };
    }

    return { status: "add_branch", name: options[0] };
  }

  return { status: "fail", error_message: "올바르지 않은 명령어입니다." };
}

export default execute;
