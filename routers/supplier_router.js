const express = require('express');

const router = express.Router();

router.use((req, res, next) => {
    next();
});

router.get('/', (req, res) => {
    res.json({ suppliers: [
        { name: 'coffee roaster', s_id: 1 },
        { name: 'food vendor', s_id: 2 },
        { name: 'tea distributor', s_id: 3 },
    ]});
});

router.post('/', (req, res) => {
    const supplier = req.body;
    res.status(200).json({ created: supplier });
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    res.json({ deleted: id })
})

module.exports = router;