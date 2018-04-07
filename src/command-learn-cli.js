const serverConfig = require('./config/server.json');
const requestInterface = require('http');
const querystring = require('querystring');

if (process.argv.length < 4) {
  console.log('Missing command name');
  console.log('Usage: node command-learn-cli my_command mac_address');
  return;
}

requestInterface.request(`http://${serverConfig.server}:${serverConfig.port}/learn/${process.argv[2]}/${process.argv[3]}`, (response) => {
  let data = '';
  response.on('data', (chunk) => {
    data += chunk;
  });

  response.on('end', () => {
    console.log(data);
  });

}).end();
