const {app, BrowserWindow} = require('electron');

// Keep a reference to window so our GC doesn't catch it
let window;

function createWindow() {
    window = new BrowserWindow({ width: 480, height: 58, frame: false, resizable: true, maximizable: false, fullscreenable: false, title: "Shinobu.io" });

    window.loadURL(`file://${__dirname}/index.html`);

    window.on('closed', () => {
        window = null;
    });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin')
        app.quit();
});

app.on('activate', () => {
    if (window === null)
        createWindow();
});
