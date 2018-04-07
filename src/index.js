const BroadlinkServer = require('broadlink-rm-server');
const config = require('./config/server.json');
const commands = require('./config/commands.json');

const PORT = config.port || 1880;
const SERVER = config.server || '127.0.0.1';

let app = BroadlinkServer(commands);
app.listen(PORT, SERVER);

console.log(`Server running on http://${SERVER}:${PORT}`);
