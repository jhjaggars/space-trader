import { Router } from 'express';

var router = Router();

router.get('/merchants/:id', async (req, res) => {
    res.send({});
});

router.post('/merchants/:id', async (req, res) => {
    res.send(req.body);
});

module.exports = router;