const express = require('express')
const app = express()
const PORT = 8000

app.get('/', (req, resp) => {
    resp.sendFile(__dirname + '/index.html')
})

app.get('/api/:nsides', (req, resp) => {
    console.log(req.params.nsides)
    let n = Number(req.params.nsides) 
    const data = {'roll' : n}
    resp.json(data)
})

app.listen(PORT, () => {
    console.log(`Server is now running on port ${PORT}.`)
})