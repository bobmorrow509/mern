const express = require('express')
const router = express.Router()

router.get('/connection', (req, res) => res.json({ msg: 'Test Successful' }))

module.exports = router;
