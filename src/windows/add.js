const electron = require('electron');
const remote = electron.remote;

const closeBtn = document.getElementById('close');

closeBtn.addEventListener('click',function(e){
    const windows = remote.getCurrentWindow();
    windows.close();
})