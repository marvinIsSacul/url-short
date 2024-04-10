const shortid = require('shortid');
const urlShortModel = require('../schemas/urlShort');

/**
 * Stores a new short URL
 * @param {string} url 
 */
async function createShortUrl(url) {
    const hash = shortid.generate();

    const res = await urlShortModel.create({
        hash,
        originalUrl: url,
    });

    if (res.errors) {
        console.error(res.errors);
        throw new Error('Error creating short URL');
    }

    return res.toObject();
}

/**
 * Gets a short URL by hash
 * @param {string} hash 
 * @returns 
 */
async function getShortUrlByHash(hash) {
    const data = await urlShortModel.findOne({ hash });

    if (data.$isEmpty) {
        return null;
    }

    return data.toObject();
}

module.exports = {
    getShortUrlByHash,
    createShortUrl,
};
