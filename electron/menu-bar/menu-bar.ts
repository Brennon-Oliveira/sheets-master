import { Menu, app } from 'electron';
import Intern from '../core/Intern';

export function createMenuBar() {
	const menu = Menu.buildFromTemplate([
		{
			label: 'File',
			submenu: [{ role: 'quit' }],
		},
		{
			label: 'Editar',
			submenu: [{ role: 'undo' }, { role: 'redo' }],
		},
		{
			label: 'Window',
			submenu: [
				{
					label: 'Abrir inspetor',
					click: () => {
						console.log('Abrir inspetor - MENU');
						Intern.getInstance().emit('open-inspector');
					},
				},
			],
		},
	]);
	Menu.setApplicationMenu(menu);
}
