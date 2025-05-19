import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

app.get('/webhook-test', async (req, res) => {

    const response = await fetch(`https://gustavofloriano.app.n8n.cloud/webhook-test/830aaf37-55fe-4149-9fb9-477ffbc1e605`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })

    if(!response.ok){
        res.status(500).json('cannot get info');
    }

    let data = await response.json()
    console.log(data);
    res.json(data);
})

app.listen(8000, () => {
    console.log('server running at http://localhost:8000');
})