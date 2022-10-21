import app from '../app.js';

import request from 'supertest';

/*describe('GET /', () =>{

    test('should respond with a 200 status code', async () =>{
        const response = await request(app).get('/').send();
        expect(response.statusCode).toBe(200);
    });

    test('should return success message', async () =>{
        const response = await request(app).get('/').send();
        expect(response.body).toEqual({msg : 'Hello World!'});
    });

    test('should have a content-type:application/json in header', async () =>{
        const response = await request(app).get('/').send();
        expect(response.headers["content-type"]).toEqual(expect.stringContaining("json"));
    });
});*/