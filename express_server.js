const express = require('express')
const fs = require('fs')

const app = express()

//set ejs template engine
app.set('view engine', 'ejs')

app.get('/', function(req, res) {
    res.render('index', { title: 'Home' })
})

app.get('/contact', function(req, res) {
	res.render('contact', {title: 'contact me'});
})

app.get('/about', (req, res) => {
    res.render('about', { title: 'About' })
})

app.get('/about-new', (req, res) => {
    res.redirect('/about')
})

app.get('/api', (req, res) => {
    const data = {
        name: 'samu'
    }

    const outside = "working from outside"

    fs.writeFileSync('./files/output.txt', data.toString())

    fs.readFile('./files/output.txt', (error, data) => {
    	console.log(data)
    	console.log(outside)
    	console.log(new Date())
    })
    
    console.log(new Date())
    console.log('working...')

    res.json(data)
})

app.use((req, res) => {
    res.status(404).render('404')
})


//1st phase - even though first phase when it delays
//set immediate will run
//so they basically its first phase when the seconds is zero
setTimeout(() => {
	console.log('set timeout working')
}, 1000)

//3rd phase
setImmediate(() => {console.log('second phase executing')})

console.log('working');

app.listen(8000)