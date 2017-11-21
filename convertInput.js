const freeboxCodes = {
    'PLAY PAUSE TOGGLE': 'play',
    'SKIP FORWARD':  'next',
    REVERSE: 'bwd',    
    FORWARD:  'fwd',
    PREVIOUS:  'prev',
    NEXT:  'next',
    INFO: 'info',

    'FUNCTION BLUE': 'blue',
    'FUNCTION GREEN': 'green',
    'FUNCTION RED': 'red',
    'FUNCTION YELLOW': 'yellow',

    'CURSOR UP': 'up',
    'CURSOR DOWN': 'down',
    'CURSOR LEFT': 'left',
    'CURSOR RIGHT': 'right',
    'CURSOR ENTER': 'ok',

    ENTER: 'ok',
    HOME: 'home',
    MENU: 'green',
    BACK: 'red',

    'POWER TOGGLE': 'power',

    'VOLUME UP': 'vol_inc',
    'VOLUME DOWN': 'vol_dec',
    'MUTE TOGGLE': 'mute',
    'CHANNEL DOWN': 'prgm_dec',
    'CHANNEL UP': 'prgm_inc',

    'DIGIT 1': '1',
    'DIGIT 2': '2',
    'DIGIT 3': '3',
    'DIGIT 4': '4',
    'DIGIT 5': '5',
    'DIGIT 6': '6',
    'DIGIT 7': '7',
    'DIGIT 8': '8',
    'DIGIT 9': '9',
    'DIGIT 0': '0',

    RECORD: 'record',
    'CHANNEL LIST': 'list',
    HELP: 'help',
    TV: 'tv'
}

module.exports = (input) => {
    return freeboxCodes[input];
}