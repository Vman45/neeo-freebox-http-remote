'use strict';

const http = require('http');
const config = require('./config');
const convertInput = require('./convertInput');

module.exports = class FreeboxPlayerController {
    constructor() {}

    static build() { return new FreeboxPlayerController(); }

    generateUrl(button, long = false) {
        let url = `http://${config.PLAYER_ID}.freebox.fr/pub/remote_control?code=${config.REMOTE_API_CODE}&key=${button}`;
        if (long) {
            url += `&long=true`
        }

        return url;
    }

    sendButton(button, callback, long = false) {
        if (callback === undefined) {
            callback = () => { }
        }

        http.get(this.generateUrl(button, long), callback)

    }

    onButtonPressed(name, deviceId){
        convertInput(name)
            .then((button) => this.sendButton(button))
            .catch((e) => console.warn(e));
    }

}
