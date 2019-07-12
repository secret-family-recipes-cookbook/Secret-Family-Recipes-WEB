const request = require('supertest');

const server = require('../api/server.js');

describe('recipes-router.js', () => {

    describe('/', () => {
        it('should return status 200', async () => {
            const res = await request(server).get('/');
            expect(res.status).toBe(200);
        });

        
    })
})