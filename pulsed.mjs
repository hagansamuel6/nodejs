import { Pulser } from './pulser.mjs'

const pulser = new Pulser();

pulser.on('pulse', (...data) => {
    console.log(`${new Date().toISOString()} pulse received ${data[1]}`)
})

pulser.start();