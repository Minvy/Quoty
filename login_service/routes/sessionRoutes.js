const router = require('express').Router();
const passport = require('passport');

router.get('/getUser', (req, res) => {
    res.status(200).send(req.user);
});

module.exports = router;