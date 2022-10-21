import app from '../app.js';

import request from 'supertest';

const buildDomiciliario = ({
    id = 2,
    nombre_Domiciliario = 'Esteban Vasquez',
    disponible = 1,
    activo = 1
} = {}) => ({
    id,
    nombre_Domiciliario,
    disponible,
    activo
});

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
            expect(response.body).toEqual({msg: 'El domiciliario no existe'});
        })
    });
});

describe('POST /domiciliarios', () =>{

    describe('given a nombreDomiciliario, disponible and activo', () =>{

        test('should respond with a 400 status code', async () =>{
            const response = await request(app).post('/domiciliarios').send({
                id: 3,
                nombreDomiciliario: 'Esteban Vasquez',
                disponible: 1,
                activo: 1
            });
            expect(response.statusCode).toBe(400);
        });
    })

    describe('when nombreDomiciliario disponible and activo are missing', () =>{
        test('should respond with a 400 status code', async () =>{
            const fields = [
                {},
                {nombreDomiciliario: 'test nombre'},
                {disponible: 1},
                {activo: 1}
            ]
            
            for (const body of fields){
                const response = await request(app).post('/domiciliarios').send(body);
                expect(response.body).toEqual({msg: 'Verifique que todos los campos se hayan llenado'});
            }
        });
    });

});

describe('PUT /domiciliarios/:id', () =>{

    describe('given a domiciliarios ID to update', () =>{
        test('should respond with a 404 status code', async() =>{
            const Domiciliario_ID = 70;

            const response = await request(app).put(`/domiciliarios/${Domiciliario_ID}`).expect(404);
        });

        test('should have a content-type:application/json in header', async () =>{
            const Domiciliario_ID = 2;

            const response = await request(app).put(`/domiciliarios/${Domiciliario_ID}`).send({
                nombre_Domiciliario: 'David Arango',
                disponible: 0,
                activo: 1
            });
            expect(response.headers["content-type"]).toEqual(expect.stringContaining("json"));
        });
    });
});

describe('DELETE /domiciliarios/:id', () =>{

    describe('given a ingrediente ID to delete', () =>{
        test('should respond with a 404 status code', async() =>{
            const Domiciliario_ID = 70;

            const response = await request(app).delete(`/domiciliarios/${Domiciliario_ID}`).expect(404);
        });

        test('should return error message', async() =>{
            const Domiciliario_ID = 70;

            const response = await request(app).delete(`/domiciliarios/${Domiciliario_ID}`).send();
            expect(response.body).toEqual({msg : 'El domiciliario no existe'});
        });

        test('should return succes message', async() =>{
            const Domiciliario_ID = 2;

            const response = await request(app).delete(`/domiciliarios/${Domiciliario_ID}`).send();
            expect(response.body).toEqual({msg : 'El domiciliario ha sido borrado exitosamente'});
        });

    });
});