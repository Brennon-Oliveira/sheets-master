const net = require('net');
const port = process.env.PORT ? +process.env.PORT-100 : 5000

process.env.ELECTRON_APPLICATION_URL = `http://localhost:${port}`

const exec = require("child_process").exec;
exec('bun run electron:tsc');

const client = net.Socket();

let startedElectron = false;
const tryConnection = ()=>client.connect({port}, () => {
    client.end();

    if(!startedElectron){
        console.log('starting electron');
        startedElectron = true;
        var spawn = require('child_process').spawn
        const electronProcess = spawn('bun', ['run', 'electron']);
        electronProcess.stdout.pipe(process.stdout)
    }
});

tryConnection();

client.on("error", (error)=>{
    setTimeout(tryConnection, 1000);
})


