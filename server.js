const express = require('express')
const app = express()
const PORT = 8000

app.get('/', (req, resp) => {
    resp.sendFile(__dirname + '/index.html')
})

/*
Return API help page.
*/
app.get('/api/', (req, resp) => {
    resp.sendFile(__dirname + '/usage.html')
})

/*
Return a random number between 1 and nsides.
*/
app.get('/api/:nsides', (req, resp) => {
    const n = Number(req.params.nsides)
    if (!n || n < 1) {
        resp.status(500).send('Parameter must be valid number greater than 0.')
        return
    }
    const result = Math.floor(Math.random() * n) + 1;
    const data = {'roll' : result}
    resp.json(data)
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server is now running on port ${PORT}.`)
})