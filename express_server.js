const express = require('express')

const app = express()

//set ejs template engine
app.set('view engine', 'ejs')

app.get('/', function(req, res) {
    res.render('index')
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.get('/about-new', (req, res) => {
    res.redirect('/about')
})

app.get('/api', (req, res) => {
    const data = {
        name: 'samu'
    }

    res.json(data)
})

app.use((req, res) => {
    res.status(404).render('404')
})



app.listen(8000)