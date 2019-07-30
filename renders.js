const electron = require('electron');
const path = require('path');
const BrowserWindow = electron.remote.BrowserWindow;

const notifyBtn = document.getElementById('notifyBtn');
notifyBtn.addEventListener('click', function (event) {
        const ModalPath = path.join('file://', __dirname, '/windows/add.html');
        console.log(ModalPath);
        let add_win = new BrowserWindow({
            width: 400,
            height: 280,
            frame: false,
            webPreferences: {
                nodeIntegration: true
            }
        });
        add_win.on('close', function () {
            add_win = null;
        })
        add_win.loadURL(ModalPath);
        add_win.show();
});


