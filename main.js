const { app, BrowserWindow, Menu } = require('electron');
const shell = require('electron').shell
let win
function createWindow() {
    // Create the browser window.
    win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    })

    
    Menu.setApplicationMenu(menu);
    win.loadFile('./src/index.html')
    win.on('closed', () => {
        win = null
    })
}

var menu = Menu.buildFromTemplate([
    {
        label: 'Menu',
        submenu: [
            {
                label: 'Adjust Notification Value'
            },
            {
                label: 'Coin Market Cap',
                click() {
                    shell.openExternal('https://coinmarketcap.com/');
                }
            },
            { type: 'separator' },
            {
                label: 'Exit',
                click() {
                    app.quit()
                }
            },
        ]
    },
    {
        label:"About"
    },
    {
        label:"Refresh",
        click(){
            app.relaunch();
        }
    }

]);
app.on('ready', createWindow)
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})
app.on('activate', () => {
    if (win === null) {
        createWindow()
    }
})