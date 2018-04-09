const BroadlinkServer = require('broadlink-rm-server');
const config = require('./config/server.json');
const commands = require('./config/commands.json');

const PORT = config.port || 1880;

let app = BroadlinkServer(commands, true);
app.listen(PORT);

console.log(`Server running on http://localhost:${PORT}`);
