import { BrowserWindow } from 'electron';

export default abstract class Window {
	protected abstract window: BrowserWindow;
	abstract init(url: string, port: number): void;
}
