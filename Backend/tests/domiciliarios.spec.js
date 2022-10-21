import app from '../app.js';

import request from 'supertest';

const buildDomiciliario = ({
    id = 2,
    nombreDomiciliario = 'Esteban Vasquez',
    disponible = 'Si',
    activo = 'Si'
} = {}) => ({
    id,
    nombreDomiciliario,
    disponible,
    activo
})

describe('GET /domiciliarios', () =>{

    test('should respond with a 200 status code', async () =>{
        const response = await request(app).get('/domiciliarios').send();
        expect(response.statusCode).toBe(200);
    });

    test('should get all domiciliarios', async () =>{
        const Domiciliario = buildDomiciliario();
        const response = await request(app).get('/domiciliarios').send();
        expect(response.body).toEqual([Domiciliario]);
    });

    describe('given a domiciliarios ID', () =>{
        test('should respond with a 200 status code', async() =>{
            const Domiciliario_ID = 2;

            const response = await request(app).get(`/Domiciliarios/${Domiciliario_ID}`).expect(200);
        })

        test('should return a status code 404', async() =>{
            const Domiciliario_ID = 1000000;

            const response = await request(app).get(`/Domiciliarios/${Domiciliario_ID}`).send();
            expect(response.statusCode).toBe(404);
        })
    });
});

describe('POST /domiciliarios', () =>{

    describe('given a nombreDomiciliario, disponible and activo', () =>{
        test('should respond with a 200 status code', async () =>{
            const response = await request(app).post('/domiciliarios').send({
                nombreDomiciliario: 'test nombre',
                disponible: 'Si',
                activo: 'No'
            });
            expect(response.statusCode).toBe(200);
        });
    
        test('should have a content-type:application/json in header', async () =>{
            const response = await request(app).post('/domiciliarios').send();
            expect(response.headers["content-type"]).toEqual(expect.stringContaining("json"));
        });
    
        test('should respond with a domiciliario ID', async () =>{
            const response = await request(app).post('/domiciliarios').send({
                nombreDomiciliario: 'test nombre2',
                disponible: 'No',
                activo: 'No'
            });
            expect(response.body.id).toBeDefined();
        });

        test('should respond with a 400 status code', async () =>{
            const response = await request(app).post('/domiciliarios').send({
                nombreDomiciliario: 'Esteban Vasquez',
                disponible: 'Si',
                activo: 'Si'
            });
            expect(response.statusCode).toBe(400);
        });
    })

    describe('when nombreDomiciliario disponible and activo are missing', () =>{
        test('should respond with a 400 status code', async () =>{
            const fields = [
                {},
                {nombreDomiciliario: 'test nombre'},
                {disponible: 'Si'},
                {activo: 'No'}
            ]
            
            for (const body of fields){
                const response = await request(app).post('/domiciliarios').send(body);
                expect(response.statusCode).toBe(400);
            }
        });
    });

});

describe('PUT /domiciliarios', () =>{

    describe('given a domiciliarios ID to update', () =>{
        test('should respond with a 404 status code', async() =>{
            const Domiciliario_ID = 70;

            const response = await request(app).put(`/domiciliarios/${Domiciliario_ID}`).expect(404);
        });

        test('should have a content-type:application/json in header', async () =>{
            const Domiciliario_ID = 2;

            const response = await request(app).put(`/domiciliarios/${Domiciliario_ID}`).send({
                nombreDomiciliario: 'David Arango',
                disponible: 'No',
                activo: 'Si'
            });
            expect(response.headers["content-type"]).toEqual(expect.stringContaining("json"));
        });

    });
});