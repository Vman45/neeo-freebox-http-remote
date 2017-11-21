'use strict';
const neeoapi = require('neeo-sdk');
const controller = require('./controller');

const freebox = neeoapi.buildDevice('Freebox http')
.setManufacturer('Free')
.addAdditionalSearchToken('freebox')
.addAdditionalSearchToken('revolution')
.setType('DVB')

// Then we add the capabilities of the device
.addButton({ name: 'POWER TOGGLE', label: 'Power' })
.addButton({ name: 'PLAY PAUSE TOGGLE', label: 'Play/Pause' })
.addButton({ name: 'HELP', label: 'Infos flux' })
.addButtonGroup('VOLUME')
.addButtonGroup('Numpad')
.addButtonGroup('Controlpad')
.addButtonGroup('Color Buttons')
.addButtonGroup('Menu and Back')
.addButtonGroup('Channel Zapper')
.addButtonGroup('Transport Search')
.addButtonGroup('Transport Scan')
.addButtonGroup('Record')
.addButtonHandler(controller.onButtonPressed);

let startServer = (brain) => {
    neeoapi.startServer({
        brain,
        port: 6336,
        name: 'freebox-http-remote',
        devices: [freebox]
      })
      .then(() => {
        console.log('# READY! use the NEEO app to search for "Freebox http".');
      })
      .catch((error) => {
        //if there was any error, print message out to console
        console.error('ERROR!', error.message);
        process.exit(1);
      });
}

const brainIp = process.env.BRAINIP;

if (brainIp) {
  console.log('- use NEEO Brain IP from env variable', brainIp);
  startServer(brainIp);
} else {
  console.log('- discover one NEEO Brain...');
  neeoapi.discoverOneBrain()
    .then((brain) => {
      console.log('- Brain discovered:', brain.name);
      startServer(brain);
    });
}