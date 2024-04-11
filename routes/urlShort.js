var express = require('express');
const validUrl = require('valid-url');
var router = express.Router();
const urlShortService = require('../services/URLShortService');

router.post('/', async function(req, res) {
  	const payload = req.body;

	if (!validUrl.isWebUri(payload.url)) {
		return res.status(400).json({error: 'Invalid URL specified: ' + payload.url})
	}

	try {
		const urlShort = await urlShortService.createShortUrl(payload.url);

		res.status(201).json(urlShort);
	} catch (err) {
		console.error(err);
		return res.sendStatus(500);
	}
});

router.get('/:hash', async function(req, res) {
    const hash = req.params.hash;

	if (!hash) {
		return res.sendStatus(404);
	}

	try {
		const urlShort = await urlShortService.getShortUrlByHash(hash);

		if (!urlShort) {
			return res.sendStatus(404);
		}

		return res.send(urlShort);
	} catch (err) {
		console.error(err);
		return res.sendStatus(500);
	}

});

router.get('/redirect/:hash', async function(req, res, next) {
    const hash = req.params.hash;

	if (!hash) {
		return res.sendStatus(404);
	}

	try {
		const urlShort = await urlShortService.getShortUrlByHash(hash);

		if (!urlShort) {
			return res.sendStatus(404);
		}

		res.redirect(301, urlShort.originalUrl);
		next();
	} catch (err) {
		console.error(err);
		return res.sendStatus(500);
	}

});

module.exports = router;
