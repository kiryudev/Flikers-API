const express = require('express');
const axios = require('axios');
const app = express();

app.get('/api/react', async (req, res) => {
    const { link, type, cookie } = req.query;
    await axios.post("https://flikers.net/android/android_get_react.php", {
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
            res.json({ error: e });
        });
});

// const port = Math.floor(Math.random() * (6000 - 3000 + 1)) + 3000;
app.listen(process.env.PORT, () => { console.log('Live'); });
