import killPort from 'kill-port';
import Window from '../window';
import { BrowserWindow } from 'electron';
import { on } from 'events';
import Intern from '../core/Intern';

export class MainWindow extends Window {
	protected window!: BrowserWindow;
	constructor() {
		super();
		this.create();
	}

	create(): void {
		this.window = new BrowserWindow({
			width: 2048,
			height: 1080,
			webPreferences: {
				nodeIntegration: true,
				contextIsolation: false,
			},
		});
		this.listeners();
	}

	init(url: string, port: number): void {
		this.window.loadURL(url);

		this.window.on('closed', async () => {
			await killPort(port);
		});
	}

	private listeners(): void {
		console.log('Listeners');
		Intern.getInstance().on('open-inspector', () => {
			console.log('Open inspector');
			this.openInspector();
		});
	}

	openInspector() {
		console.log(this.window);
		this.window.webContents.openDevTools();
	}
}
