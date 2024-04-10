var express = require('express');
var router = express.Router();
const urlShortService = require('../services/URLShortService');

router.post('/l', function(req, res) {
  	res.send('respond with a resource');
});

router.get('/l/:hash', async function(req, res) {
    const hash = req.params.hash;

	if (!hash) {
		return res.sendStatus(400);
	}

	const urlShort = urlShortService.getShortUrlByHash(hash);

	if (!urlShort) {
		return res.sendStatus(404);
	}

	return res.send(urlShort);
});

module.exports = router;
