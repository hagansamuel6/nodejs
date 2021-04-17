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

