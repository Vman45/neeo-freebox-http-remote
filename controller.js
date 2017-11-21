const remoteApiCode = process.env.REMOTE_CODE || '92501214';
const http = require('http');
const convertInput = require('./convertInput');

const generateUrl = (button, long = false) => {
    let url = `http://hd1.freebox.fr/pub/remote_control?code=${remoteApiCode}&key=${button}`;
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
    let button = convertInput(name);
    if(button) {
        sendButton(button)
    } else {
        console.warn(`Unknown remote input: ${name}`)
    }
}