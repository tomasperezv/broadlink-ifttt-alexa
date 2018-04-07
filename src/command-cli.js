const commands = require('./config/commands.json');
const server = require('./config/server.json');
const requestInterface = require('http');
const querystring = require('querystring');

if (process.argv.length < 3) {
  console.log('Missing command name');
  console.log('Usage: node command-cli my_command');
  return;
}

const targetCommand = commands.find((entry) => entry.command === process.argv[2]);

if (typeof targetCommand === 'undefined') {
  const availableCommands = commands.map((c) => c.command).join(' ');

  console.log(`Command ${process.argv[2]} not found. Available commands: ${availableCommands}`);
  console.log('Usage: node command-cli my_command');

  return;
}

const data = querystring.stringify({
  'secret' : targetCommand.secret,
});

const options = {
  host: 'localhost',
  port: server.port,
  path: `/command/${targetCommand.command}`,
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Content-Length': data.length
  }
};

const req = requestInterface.request(options, (response) => {
  let body = '';
  response.setEncoding('utf8');
  response.on('data', (chunk) => {
    body += chunk;
  });

  response.on('end', () => {
    console.log(body);
  });
});

req.write(data);
req.end();
