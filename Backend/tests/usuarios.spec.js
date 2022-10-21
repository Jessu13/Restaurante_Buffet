import app from '../app.js';

import request from 'supertest';

/*describe('GET /usuarios', () =>{

    test('should respond with a 200 status code', async () =>{
        const response = await request(app).get('/usuarios').send();
        expect(response.statusCode).toBe(200);
    });

    test('should return a error message', async() =>{
        const usuario_ID = 1000000;

        const response = await request(app).get(`/usuarios/${usuario_ID}`).send();
        expect(response.body).toEqual({msg: 'El usuario no existe'});
    })

    test('should return an JS object with the existing usuarios', async() =>{
        const response = await request(app).get('/usuarios').send();
        expect(response.body).toEqual([{
            id: 1,
            nombreUsuario: "Jessuar Hoyos",
            telefono: 3012867971,
            email: "email@gmail.com",
            direccion: "carre 85# 70-72"}]);
    })

});

describe('POST /usuarios', () =>{

    describe('given a nombre_plato, precio and descripcion', () =>{
        test('should respond with a 200 status code', async () =>{
            const response = await request(app).post('/usuarios').send({
                nombreUsuario: "Carlos Manuel",
                telefono: 3012867962,
                email: "hotmail@gmail.com",
                direccion: "carre 85# 70-72"
            });
            expect(response.statusCode).toBe(200);
        });
    });

    test('should respond with a 200 status code', async () =>{
            const response = await request(app).post('/usuarios').send({
                nombreUsuario: "Carlos Albeiro",
                telefono: 3012867962,
                email: "albeiro@gmail.com",
                direccion: "carre 85# 70-72"
            });
            expect(response.statusCode).toBe(200);
        });

})

describe('DELETE /usuarios/:id', () =>{

    describe('given a usuarios ID to delete', () =>{
        test('should respond with a 404 status code', async() =>{
            const usuario_ID = 70;

            const response = await request(app).delete(`/usuarios/${usuario_ID}`).expect(404);
        });

        test('should return error message', async() =>{
            const usuario_ID = 70;

            const response = await request(app).delete(`/usuarios/${usuario_ID}`).send();
            expect(response.body).toEqual({msg : 'El usuario no existe'});
        });

        test('should return succes message', async() =>{
            const usuario_ID = 1;

            const response = await request(app).delete(`/usuarios/${usuario_ID}`).send();
            expect(response.body).toEqual({msg : 'El usuario ha sido borrado exitosamente'});
        });

    });
});*/