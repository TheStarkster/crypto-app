const electron = require('electron');
const path = require('path');
const BrowserWindow = electron.remote.BrowserWindow

const notifyBtn = document.getElementById('notifyBtn');

let win
function createWindow() {
    // Create the browser window.
    win = new BrowserWindow({
        width: 400,
        height: 200,
        frame: false,
        webPreferences: {
            nodeIntegration: true
        }
    })
    win.loadFile('add.html')
}


notifyBtn.addEventListener('click', function (event) {
    createWindow()
})