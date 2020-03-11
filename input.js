const constants = require("./constants");

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

};

const handleUserInput = function(key) {

  switch (key.toUpperCase()) {
  case constants.KEY_MOVE_UP:
    connection.write(`${constants.CMD_MOVE}up`);
    break;
  case constants.KEY_MOVE_DOWN:
    connection.write(`${constants.CMD_MOVE}down`);
    break;
  case constants.KEY_MOVE_LEFT:
    connection.write(`${constants.CMD_MOVE}left`);
    break;
  case constants.KEY_MOVE_RIGHT:
    connection.write(`${constants.CMD_MOVE}right`);
    break;
  case constants.KEY_CHAT_1:
    connection.write(`${constants.CMD_SAY}j00 suxx0r!!!`);
    break;
  case constants.KEY_CHAT_2:
    connection.write(`${constants.CMD_SAY}pwned`);
    break;
  case constants.KEY_EXIT:
    process.exit();
    break;
  }

};

module.exports = { setupInput };
