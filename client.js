const net = require("net");

const constants = require("./constants");

/**
 * Establishes connection with the game server
 */
const connect = function() {

  const conn = net.createConnection({
    host: constants.NET_HOST,
    port: constants.NET_PORT
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {

    console.log("connected to snek");
    conn.write(`${constants.CMD_NAME}ASS`);

  });

  // let snekTimer = 0;

  conn.on("connect", () => {

    // snekTimer = setInterval(() => conn.write("Move: up"), 500);

    // console.log("Snek donuts!!!");
    // for (let i = 0; i < 10; i++) {
    //   conn.write("Move: up");
    //   conn.write("Move: up");
    //   conn.write("Move: up");
    //   conn.write("Move: right");
    //   conn.write("Move: right");
    //   conn.write("Move: right");
    //   conn.write("Move: down");
    //   conn.write("Move: down");
    //   conn.write("Move: down");
    //   conn.write("Move: left");
    //   conn.write("Move: left");
    //   conn.write("Move: left");
    // }

  });

  conn.on("data", (data) => {

    console.log(data);

  });

  conn.on("end", () => {

    console.log("snek gone")
    process.exit();

  });

  conn.on("error", (error) => {

    console.log(error);
    // clearTimeout(snekTimer);
    process.exit();

  });

  return conn;
}

module.exports = { connect };
