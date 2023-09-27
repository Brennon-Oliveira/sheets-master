
import electron from 'electron';

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow: electron.BrowserWindow;

const ipcMain = electron.ipcMain

ipcMain.on('teste', (event, arg) => {
    console.log(arg)
})

app.on("ready", () => {
    mainWindow = new BrowserWindow({
        width: 2048,
        height: 1080,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        }
    });

    mainWindow.loadURL(process.env.ELECTRON_APPLICATION_URL ||`http://localhost:3000`);
    mainWindow.webContents.openDevTools();
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})
