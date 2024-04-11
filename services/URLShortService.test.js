const urlShortModel = require('../schemas/urlShort');
const urlShortService = require('../services/URLShortService');

const validResponse = {
    "originalUrl": "https://facebook.com",
    "hash": "hjjfP0w1S",
    "_id": "66179a5561318e8834deea67",
    "createdAt": "2024-04-11T08:07:49.990Z",
    "updatedAt": "2024-04-11T08:07:49.990Z",
    "__v": 0
}

describe('createShortUrl()', () => {
    beforeAll(() => {
        jest.clearAllMocks();
        jest.resetAllMocks();
    })

    it('should successfully create a short URL', async () => {
        jest.spyOn(urlShortModel, 'create')
            .mockImplementationOnce(() => Promise.resolve({ errors: undefined, toObject: () => validResponse }));

        const res = await urlShortService.createShortUrl(urlShortModel, 'https://google.com');

        expect(res).toBe(validResponse);
    });

    it('should error out', async () => {
        jest.spyOn(urlShortModel, 'create')
            .mockImplementationOnce(() => Promise.resolve({ errors: { message: 'Error saving object' } } ));

        try {
            await urlShortService.createShortUrl(urlShortModel);
        } catch (err) {
            expect(err).toBeDefined();
            return;
        }

        expect(false).toBeTruthy();
    });
});

describe('getShortUrlByHash()', () => {
    beforeAll(() => {
        jest.clearAllMocks();
        jest.resetAllMocks();
    })

    it('should successfully get a short URL', async () => {
        jest.spyOn(urlShortModel, 'findOne')
            .mockImplementationOnce(() => Promise.resolve({ toObject: () => validResponse }));

        const res = await urlShortService.getShortUrlByHash(urlShortModel);

        expect(res).toBe(validResponse);
    });
});
    