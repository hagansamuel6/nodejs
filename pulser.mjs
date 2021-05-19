import EventEmitter from 'events'

export class Pulser extends EventEmitter {
    start() {
        setInterval(() => {
            console.log(`${new Date().toISOString()} >>>>> pulse`)
            this.emit('pulse', "sample data", "sample data two")
            console.log(`${new Date().toISOString()} <<<<< pulse`);
        }, 1000)
    }
}

const pulser = new Pulser()
pulser.on('pulse', (...data) => {
    console.log(`working  ${data}`);
});
pulser.start();

