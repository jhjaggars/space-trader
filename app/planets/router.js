import { Router } from 'express';

var router = Router();

router.get('/planets', async (req, res) => {
    res.send({});
})

module.exports = router;