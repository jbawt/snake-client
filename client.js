const net = require('net');

const connect = function() {
  const conn = net.createConnection({ 
    host: '135.23.222.131',
    port: 50542
  });

  conn.setEncoding('utf8'); 
  conn.on('data', (data) => {
    console.log(data);
  });
  conn.on('connect', () => {
    conn.write("Name: jtb");
  });
  conn.on('connect', () => {
    setInterval(() => {
      conn.write("Move: up");
    }, 500);
  });

  return conn;
};

module.exports = { connect };