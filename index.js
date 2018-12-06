// We had this first to ensrue it was running...
// console.log('code is totally running!');

// create and epress server

// an endpoint got GET at /

// listen

const express = require('express');
const helmet = require('helmet');
const logger = require('morgan');
const middleware = require('./custom_middleware.js');

const supplierRouter = require('./routers/supplier_router.js');
const itemRouter = require('./routers/item_router.js');
// .js is optional

const server = express();

const PORT = 5050;

// middleware
// 1) Built in
// 2) 3rd party library
// 3) custom

server.use(express.json());
server.use(helmet());
server.use(logger('tiny'));

server.use(middleware.uppercase);

server.use('/api/suppliers', supplierRouter);
server.use('/api/items', itemRouter);

server.get('/', (req, res) => {
    res.json({message: "request received, yo!"})
});

// 2 resources: suppliers & items

// This gets complicated when you have a ton of these!!!!


server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});