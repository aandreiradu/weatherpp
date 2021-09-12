

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}


const STORMGLASS_API_KEY = process.env.STORMGLASS_API_KEY;
const axios = require('axios');
const express = require('express');
const app = express();


app.use(express.json());
app.use(express.static('public'));



app.post('/weather', (req, res) => {
    console.log(req.body);
    const valInput = req.body.valueInput;
    const urlFetch = `http://api.weatherstack.com/forecast?access_key=${STORMGLASS_API_KEY}&query=${req.body.valueInput}`;
    const params = {
        access_key: '12c9459077cd00c76609e3934afe7929',
        query: valInput
    }

    axios.get(urlFetch, params)
        .then(response => {
            res.json(response.data)

        });
});


const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})
