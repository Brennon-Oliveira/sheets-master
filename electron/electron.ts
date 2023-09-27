import { app, ipcMain } from 'electron';
import killPort from 'kill-port';
import { MainWindow } from './windows/main-windows';
import { createMenuBar } from './menu-bar/menu-bar';
import Intern from './core/Intern';

console.log('Init');
const url = process.env.ELECTRON_APPLICATION_URL || `http://localhost:3000`;
const portMatch = url.match(/:([0-9]+)/);
const port = portMatch ? +portMatch[1] : 3000;

let mainWindow: MainWindow;

app.on('ready', () => {
	mainWindow = new MainWindow();
	mainWindow.init(url, port);
	createMenuBar();
});

app.on('window-all-closed', async () => {
	await killPort(port);
	if (process.platform !== 'darwin') {
		app.quit();
	}
});
