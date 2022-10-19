import app from '../app.js';

import request from 'supertest';

const buildUsuario = ({
    id = 2,
    nombreUsuario = 'Sebastian Sanchez',
    telefono = 3116326593,
    email = 'test email',
    direccion = 'test direccion'
} = {}) => ({
    id,
    nombreUsuario,
    telefono,
    email,
    direccion
})

describe('GET /usuarios', () =>{

    test('should respond with a 200 status code', async () =>{
        const response = await request(app).get('/usuarios').send();
        expect(response.statusCode).toBe(200);
    });

    test('should get all usuarios', async () =>{
        const usuario = buildUsuario();
        const response = await request(app).get('/usuarios').send();
        expect(response.body).toEqual([usuario]);
    });

    describe('given a usuarios ID', () =>{
        test('should respond with a 200 status code', async() =>{
            const usuario_ID = 2;

            const response = await request(app).get(`/usuarios/${usuario_ID}`).expect(200);
        })

        test('should return a status code 404', async() =>{
            const usuario_ID = 1000000;

            const response = await request(app).get(`/usuarios/${usuario_ID}`).send();
            expect(response.statusCode).toBe(404);
        })
    });
});

describe('POST /usuarios', () =>{

    describe('given a nombreUsuario, telefono, email and direccion', () =>{
        test('should respond with a 200 status code', async () =>{
            const response = await request(app).post('/usuarios').send({
                nombreUsuario: "test nombre",
                telefono: 3116326593,
                email: 'test email',
                direccion: 'test direccion'
            });
            expect(response.statusCode).toBe(200);
        });
    
        test('should have a content-type:application/json in header', async () =>{
            const response = await request(app).post('/usuarios').send();
            expect(response.headers["content-type"]).toEqual(expect.stringContaining("json"));
        });
    
        test('should respond with a usuario ID', async () =>{
            const response = await request(app).post('/usuarios').send({
                nombreUsuario: "test nombre2",
                telefono: 3016326593,
                email: 'test email2',
                direccion: 'test direccion2'
            });
            expect(response.body.id).toBeDefined();
        });

        test('should respond with a 400 status code', async () =>{
            const response = await request(app).post('/usuarios').send({
                nombreUsuario: "Sebastian Sanchez",
                telefono: 3116326593,
                email: 'test email',
                direccion: 'test direccion'
            });
            expect(response.statusCode).toBe(400);
        });
    })

    describe('when nombreUsuario, telefono, email and direccion are missing', () =>{
        test('should respond with a 400 status code', async () =>{
            const fields = [
                {},
                {nombreUsuario: 'test nombre'},
                {telefono: 3116326593},
                {email: 'test email'},
                {direccion: 'test direccion'}
            ]
            
            for (const body of fields){
                const response = await request(app).post('/usuarios').send(body);
                expect(response.statusCode).toBe(400);
            }
        });
    });

});

describe('PUT /usuarios', () =>{

    describe('given a usuarios ID to update', () =>{
        test('should respond with a 404 status code', async() =>{
            const usuario_ID = 70;

            const response = await request(app).put(`/usuarios/${usuario_ID}`).expect(404);
        });

        test('should have a content-type:application/json in header', async () =>{
            const usuario_ID = 2;

            const response = await request(app).put(`/usuarios/${usuario_ID}`).send({
                nombreUsuario: 'Felipe Cano',
                telefono: 3116326593,
                email: 'test email',
                direccion: 'test direccion'
            });
            expect(response.headers["content-type"]).toEqual(expect.stringContaining("json"));
        });

    });
});