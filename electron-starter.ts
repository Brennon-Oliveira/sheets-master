import net from 'net';
import { spawn, execSync } from 'child_process';
const port = process.env.PORT ? +process.env.PORT - 100 : 5000;

process.env.ELECTRON_APPLICATION_URL = `http://localhost:${port}`;

const client = new net.Socket();

let startedElectron = false;
const tryConnection = () =>
	client.connect({ port }, async () => {
		client.end();

		if (!startedElectron) {
			console.log('starting electron');
			execSync('bun run electron:tsc');
			startedElectron = true;
			const electronProcess = spawn('bun', ['run', 'electron']);
			electronProcess.stdout.pipe(process.stdout);
			electronProcess.stderr.pipe(process.stderr);
		}
	});

tryConnection();

client.on('error', (error) => {
	setTimeout(tryConnection, 1000);
});
