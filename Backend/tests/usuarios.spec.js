import app from '../app.js';

import request from 'supertest';

describe('GET /usuarios', () =>{

    test('should respond with a 200 status code', async () =>{
        const response = await request(app).get('/usuarios').send();
        expect(response.statusCode).toBe(200);
    });

});