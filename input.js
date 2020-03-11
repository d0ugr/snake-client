/**
 * Setup User Interface
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function() {

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  return stdin;

}

const handleUserInput = function(key) {

  if (key === "\x03") {
    process.exit();
  }

}

module.exports = { setupInput };
