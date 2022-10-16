import app from '../app.js';

import request from 'supertest';

describe('GET /platos', () =>{

    test('should respond with a 200 status code', async () =>{
        const response = await request(app).get('/platos').send();
        expect(response.statusCode).toBe(200);
    });

    describe('given a platos ID', () =>{
        test('should return an json object with the information of the given ID', async() =>{
            const plato_ID = 18;

            const response = await request(app).get(`/platos/${plato_ID}`).expect(200);
        })

        test('should return a status code 404', async() =>{
            const plato_ID = 1000000;

            const response = await request(app).get(`/platos/${plato_ID}`).send();
            expect(response.statusCode).toBe(400);
        })
    });
});

describe('POST /platos', () =>{

    describe('given a nombre_plato, precio and descripcion', () =>{
        test('should respond with a 200 status code', async () =>{
            const response = await request(app).post('/platos').send({
                nombre_plato: "test nombre",
                precio: 123,
                descripcion: "test description"
            });
            expect(response.statusCode).toBe(200);
        });
    
        test('should have a content-type:application/json in header', async () =>{
            const response = await request(app).post('/platos').send();
            expect(response.headers["content-type"]).toEqual(expect.stringContaining("json"));
        });
    
        test('should respond with a plato ID', async () =>{
            const response = await request(app).post('/platos').send({
                nombre_plato: "test nombre",
                precio: 123,
                descripcion: "test description"
            });
            expect(response.body.id).toBeDefined();
        });
    })

    describe('when nombre, precio y descripción are missing', () =>{
        test('should respond with a 400 status code', async () =>{
            const fields = [
                {},
                {nombre_plato: 'test plato'},
                {precio: 123},
                {descripcion : "test description"}
            ]
            
            for (const body of fields){
                const response = await request(app).post('/platos').send(body);
                expect(response.statusCode).toBe(400);
            }
        });
    });

});