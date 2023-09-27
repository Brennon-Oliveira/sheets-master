import { app, BrowserWindow, ipcMain } from 'electron';
import killPort from 'kill-port';
let mainWindow: BrowserWindow;

const url = process.env.ELECTRON_APPLICATION_URL || `http://localhost:3000`;
const portMatch = url.match(/:([0-9]+)/);
const port = portMatch ? +portMatch[1] : 3000;

app.on('ready', () => {
	console.log('app ready');
	mainWindow = new BrowserWindow({
		width: 2048,
		height: 1080,
		webPreferences: {
			nodeIntegration: true,
			contextIsolation: false,
		},
	});

	mainWindow.loadURL(url);

	mainWindow.on('closed', async () => {
		console.log('closed');
		await killPort(port);
	});
});

app.on('window-all-closed', async () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});
