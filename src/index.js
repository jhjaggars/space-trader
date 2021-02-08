import 'dotenv/config';
import cors from 'cors';
import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello Project!');
});


let planets = {
    1: {
        id: 1,
        name: 'Terra',
        description: 'A temperate planet with moderate amounts of resources. Heavily populated with late-stage civilizations.',
    },
};


let merchants = {
    0: {
        id: 0,
        name: 'Simple Stan\'s Mercantile',
        description: 'Trades in useful refined, yet inexpensive materials.',
        inventory: [
            {
                id: 'item:battery',
                name: 'battery',
                price: 120,
                quantity: 2480,
            },
        ],
    }
};


app.get('/survey', (req, res) => {
    let d = {
        planet: planets[1],
        help: `GET /survey returns basic information about where you are, including which planetary body you may be orbiting`,
    };
    return res.send(d);
});

app.get('/dock', (req, res) => {
    return res.send(
        `GET /dock lands your vessel and gets basic information about this location.`
    );
});

app.get('/merchants/:id', (req, res) => {
    return res.send(merchants[req.params.id]);
});

app.post('/merchants/:id', (req, res) => {
    return res.send(req.body);
});

app.listen(port, () => {
    console.log(`Express app listening on port ${port}.`);
});
