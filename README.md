# broadlink-ifttt-alexa

A bridge between Amazon Alexa and Broadlink IFTTT

## Setup

1. Clone the repository
2. npm install

## Configure your commands

1. Create the configuration file from the included example  

  ```bash
  $ cp ./src/config/commands.json-example ./src/config/commands.json
  ```

2. Determine the MAC address of your Broadlink devices  

  You need to figure out the MAC address of your Broadlink device, for that
  you can check the access logs in your local network.

  You will see something like the following:

  ```
  IP=192.168.1.118   mac=34:EA:34:43:2F:23   nombre=RMPROPLUS-43-2f-23
  ```

  Update `./src/config/device.json` with the corresponding MAC address value.

3. Edit `./src/config/commands.json` base on your needs  

  To find a command, first of all run the commands learn server:

  ```bash
  $ node ./src/learn-commands-server.js
  ```

  Now, use the `command-learn-cli` script to trigger each of the individual command learn operations

  ```bash
  $ node ./src/learn-command-cli.js my_command_name mac_address
  ```
  The Broadlink device will initiate learning mode, there is a timeout of 20 seconds

  Point your remmote command and send the button

  Once the device process the data will generate the corresponding JSON for the new command

  Copy the JSON from the previous point and add it to `./src/config/commands.json` as a new entry in the array.

## Launch the server

```bash
$ node ./src/index.js
```

It will expose the commands under `https://localhost:PORT/command/command_name`

To test your commmands you can use the provided command line utility:

```bash
$ node ./src/command-cli.js my_command_name
```

## Reference

boradlinkkrm-ifttt
https://github.com/jor3l/broadlinkrm-ifttt
