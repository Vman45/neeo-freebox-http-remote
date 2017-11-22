const http = require('http');
const config = require('./config');
const convertInput = require('./convertInput');

const generateUrl = (button, long = false) => {
    let url = `http://${config.PLAYER_ID}.freebox.fr/pub/remote_control?code=${config.REMOTE_API_CODE}&key=${button}`;
    if(long) {
        url += `&long=true`
    }

    return url;
}

const sendButton = (button, cb, long = false) => {
    if(cb === undefined) {
        cb = () =>{}
    }

    http.get(generateUrl(button, long), cb)

}

module.exports.onButtonPressed = (name, deviceId) => {
    convertInput(name).then( (button) => sendButton(button) ).catch( (e) => console.warn(e));
}