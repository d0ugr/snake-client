// Stores the active TCP connection object.
let connection;

/**
 * Setup User Interface
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function(conn) {

  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);

  return stdin;

}

const handleUserInput = function(key) {

  switch (key.toLowerCase()) {
    case "w":
      connection.write("Move: up");
      break;
    case "s":
      connection.write("Move: down");
      break;
    case "a":
      connection.write("Move: left");
      break;
    case "d":
      connection.write("Move: right");
      break;
    case "y":
      connection.write("Say: j00 suxx0r!!!");
      break;
    case "t":
      connection.write("Say: pwned");
      break;
      case "\x03":
      process.exit();
      break;
    }

}

module.exports = { setupInput };
