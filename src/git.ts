const ALLOWED_COMMANDS = ["commit"];

interface executeResult {
  valid: boolean;
  message?: string;
}

function execute(command: string): executeResult {
  let valid = true;
  let message: string | undefined;

  if (!command) valid = false;

  const args = command.split(" ");

  if (args.length < 3) valid = false;

  if (args[0] !== "git") valid = false;

  if (!ALLOWED_COMMANDS.includes(args[1])) valid = false;

  if (args[2] === "-m" && args[3]) message = args[3].replaceAll('"', "");

  return { valid, message };
}

export default execute;
