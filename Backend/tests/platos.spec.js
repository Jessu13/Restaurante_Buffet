import app from '../app.js';

import request from 'supertest';

/*const buildPlato = ({
    id = 2,
    nombre_plato = 'Costillitas',
    precio = "123",
    descripcion = 'test description'
} = {}) => ({
    id,
    nombre_plato,
    precio,
    descripcion
})

describe('GET /platos', () =>{

    test('should respond with a 200 status code', async () =>{
        const response = await request(app).get('/platos').send();
        expect(response.statusCode).toBe(200);
    });

    test('should get all platos', async () =>{
        const plato = buildPlato();
        const response = await request(app).get('/platos').send();
        expect(response.body).toEqual([plato]);
    });

    describe('given a platos ID', () =>{
        test('should respond with a 200 status code', async() =>{
            const plato_ID = 2;

            const response = await request(app).get(`/platos/${plato_ID}`).expect(200);
        })

        test('should return a status code 404', async() =>{
            const plato_ID = 1000000;

            const response = await request(app).get(`/platos/${plato_ID}`).send();
            expect(response.statusCode).toBe(404);
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
                nombre_plato: "test nombre2",
                precio: 123,
                descripcion: "test description"
            });
            expect(response.body.id).toBeDefined();
        });

        test('should respond with a 400 status code', async () =>{
            const response = await request(app).post('/platos').send({
                nombre_plato: "Costillitas",
                precio: "123",
                descripcion: "test description"
            });
            expect(response.statusCode).toBe(400);
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
                expect(response.body).toEqual({msg : 'Verifique que todos los campos se hayan llenado'});
            }
        });
    });

});

describe('PUT /platos/:id', () =>{

    describe('given a platos ID to update', () =>{
        test('should respond with a 404 status code', async() =>{
            const plato_ID = 70;

            const response = await request(app).put(`/platos/${plato_ID}`).expect(404);
        });

        test('should have a content-type:application/json in header', async () =>{
            const plato_ID = 2;

            const response = await request(app).put(`/platos/${plato_ID}`).send({
                nombre_plato: "Alitas",
                precio: 123,
                descripcion: "test description"
            });
            expect(response.headers["content-type"]).toEqual(expect.stringContaining("json"));
        });

        test('should return object equal to the value updated', async () =>{
            const plato_ID = 2;

            const response = await request(app).put(`/platos/${plato_ID}`).send({
                nombre_plato: "Alitas",
                precio: 123,
                descripcion: "test description"
            });
            expect(response.body).toEqual({
                id: 2,
                nombre_plato: "Alitas",
                precio: 123,
                descripcion: "test description"
            });
        });

    });
});

describe('DELETE /platos/:id', () =>{

    describe('given a platos ID to delete', () =>{
        test('should respond with a 404 status code', async() =>{
            const plato_ID = 70;

            const response = await request(app).delete(`/platos/${plato_ID}`).expect(404);
        });

        test('should return error message', async() =>{
            const plato_ID = 70;

            const response = await request(app).delete(`/platos/${plato_ID}`).send();
            expect(response.body).toEqual({msg : 'El plato no existe'});
        });

        test('should return succes message', async() =>{
            const plato_ID = 2;

            const response = await request(app).delete(`/platos/${plato_ID}`).send();
            expect(response.body).toEqual({msg : 'El plato ha sido borrado exitosamente'});
        });

    });
});*/