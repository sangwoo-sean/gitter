const ALLOWED_COMMANDS = ["commit"];

function execute(command: string): boolean {
  if (!command) return false;

  const args = command.split(" ");

  if (args.length < 3) return false;

  if (args[0] !== "git") return false;

  if (!ALLOWED_COMMANDS.includes(args[1])) return false;

  return true;
}

export default execute;
