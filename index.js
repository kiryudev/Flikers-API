const express = require('express');
const axios = require('axios');
const app = express();

app.get('/api/react', (req, res) => {
    const { link, type, cookie } = req.query;
    axios.post("https://flikers.net/android/android_get_react.php", {
        post_id: link,
        react_type: type,
        version: "v1.7"
    }, {
        headers: {
            'User-Agent': "Dalvik/2.1.0 (Linux; U; Android 12; V2134 Build/SP1A.210812.003)",
            'Connection': "Keep-Alive",
            'Accept-Encoding': "gzip",
            'Content-Type': "application/json",
            'Cookie': cookie
        }
    })
        .then(dat => { res.json(dat.data); })
        .catch(e => {
            console.error(e);
            res.json({ error: 'an error occurred' });
        });
});

const port = Math.floor(Math.random() * (6000 - 3000 + 1)) + 3000;
app.listen(port, () => { console.log(`Live | ${port}`); });
