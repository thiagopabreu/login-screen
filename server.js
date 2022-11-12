const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')

const PORT = 3000 || process.env.PORT;
const HOST = '0.0.0.0';
const app = express();

app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


app.get('/', (req, res) => {
    res.send('Hello World teste');
})

app.listen(PORT, HOST)