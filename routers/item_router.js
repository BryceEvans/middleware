const express = require('express');

const router = express.Router();

router.use((req, res, next) => {
    next();
});

router.get('/', (req, res) => {
    res.json({ items: [
        { name: 'coffee beans', i_id: 1 },
        { name: 'more coffee beans', i_id: 2 },
        { name: 'some tea', i_id: 3 },
        { name: 'chocolate syrup', i_id: 4 },
    ]});
});

router.post('/', (req, res) => {
    const item = req.body;
    res.status(200).json({ created: item });
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    res.json({ deleted: id })
})



module.exports = router;

