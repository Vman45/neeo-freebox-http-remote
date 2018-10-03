'use strict';
const neeoapi = require('neeo-sdk');
const FreeboxController = require('./controller');

const controller = FreeboxController.build();

const freebox = neeoapi
  .buildDevice('Freebox http')
  .setManufacturer('Free')
  .addAdditionalSearchToken('freebox')
  .addAdditionalSearchToken('revolution')
  .setType('DVB')

  // Then we add the capabilities of the device
  .addButton({ name: 'HELP', label: 'Infos flux' })
  .addButton({ name: 'HOME', label: 'Home' })
  .addButtonGroup('POWER')
  .addButtonGroup('VOLUME')
  .addButtonGroup('Numpad')
  .addButtonGroup('Controlpad')
  .addButtonGroup('Color Buttons')
  .addButtonGroup('Menu and Back')
  .addButtonGroup('Channel Zapper')
  .addButtonGroup('Transport')
  .addButtonGroup('Transport Search')
  .addButtonGroup('Transport Scan')
  .addButton({ name: 'RECORD', label: 'Enregistrer' })
  .addButtonHandler((name, deviceId) => controller.onButtonPressed(name, deviceId));

module.exports = {
  devices: [ freebox ]
}