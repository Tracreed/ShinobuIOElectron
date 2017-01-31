const {app, BrowserWindow} = require('electron');

// Keep a reference to window so our GC doesn't catch it
let window;

function createWindow() {
    window = new BrowserWindow({ width: 400, height: 48, frame: true, resizable: true, maximizable: false, fullscreenable: false, title: "Shinobu.io" });

    window.loadURL(`file://${__dirname}/index.html`);

    window.openDevTools();

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
