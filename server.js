

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
    // console.log(valInput);
    // let q = {};
    // q.latitude = req.body.latitude;
    // q.longitude = req.body.longitude;
    // const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${q.latitude}&lon=${q.longitude}&appid=5fe3837e88d574226bd9f9e3c67eef86`;
    // // const options = { method: 'GET', header: { Accept: 'application/json' } };

    // axios({
    //     url: url

    // }).then(response => {
    //     // let p = {};
    //     // p.method = response.method;
    //     // p.status = response.status;
    //     // p.statusText = response.statusText;

    //     // console.log(p);
    //     console.log(response);
    //     response => response.json()
    // }).catch(err => console.log('error' + err));
    const urlFetch = `http://api.weatherstack.com/forecast?access_key=12c9459077cd00c76609e3934afe7929&query=${req.body.valueInput}`;
    const params = {
        access_key: '12c9459077cd00c76609e3934afe7929',
        query: valInput
    }

    axios.get(urlFetch, params)
        .then(response => {
            res.json(response.data)
            // const status = response.status;
            // const statusText = response.statusText;

            // if ((status == 200 || status == '200') && statusText === 'OK') {
            //     console.log('a mers coaie');
            // }
        });
});



// app.listen(5000, () => {
//     console.log('server started');
// });

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})
