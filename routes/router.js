const router = require('express').Router();

const servicesRouter = require('./services');
const partyRouter = require('./parties');

router.use('/', partyRouter);
router.use('/', servicesRouter);

module.exports = router;