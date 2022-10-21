import app from '../app.js';

import request from 'supertest';

/*const buildIngrediente = ({
    id = 2,
    nombreIngrediente = 'Miso',
    cantidadDisponible = 20,
    tipo_Ingrediente = 'salsa',
    precioIngrediente = 2000
} = {}) => ({
    id,
    nombreIngrediente,
    cantidadDisponible,
    tipo_Ingrediente,
    precioIngrediente
})

describe('GET /ingredientes', () =>{

    test('should respond with a 200 status code', async () =>{
        const response = await request(app).get('/ingredientes').send();
        expect(response.statusCode).toBe(200);
    });

    test('should get all ingredientes', async () =>{
        const Ingrediente = buildIngrediente();
        const response = await request(app).get('/ingredientes').send();
        expect(response.body).toEqual([Ingrediente]);
    });

    describe('given a ingredientes ID', () =>{
        test('should respond with a 200 status code', async() =>{
            const ingrediente_ID = 2;

            const response = await request(app).get(`/ingredientes/${ingrediente_ID}`).expect(200);
        })

        test('should return a status code 404', async() =>{
            const ingrediente_ID = 1000000;

            const response = await request(app).get(`/ingredientes/${ingrediente_ID}`).send();
            expect(response.body).toEqual({msg: 'El ingrediente no existe'});
        })
    });
});

describe('POST /ingredientes', () =>{

    describe('given a nombreIngrediente, cantidadDisponible, tipo_Ingrediente and precioIngrediente', () =>{9

        test('should return a error message', async () =>{
            const response = await request(app).post('/Ingredientes').send({
                nombreIngrediente: "Miso",
                cantidadDisponible: 20,
                tipo_Ingrediente: 'salsa',
                precioIngrediente: 2000
            });
            expect(response.body).toEqual({msg: 'El Ingrediente ingresado ya existe'});
        });
    })

    describe('when nombreIngrediente, telefono, email and direccion are missing', () =>{
        test('should respond with a 400 status code', async () =>{
            const fields = [
                {},
                {nombreIngrediente: 'test ingrediente'},
                {cantidadDisponible: 20},
                {tipo_Ingrediente: 'test tipo ingrediente'},
                {precioIngrediente: 2000}
            ]
            
            for (const body of fields){
                const response = await request(app).post('/ingredientes').send(body);
                expect(response.body).toEqual({msg: 'Verifique que todos los campos se hayan llenado'});
            }
        });
    });

});

describe('PUT /ingredientes/:id', () =>{

    describe('given a ingredientes ID to update', () =>{
        test('should respond with a 404 status code', async() =>{
            const ingrediente_ID = 70;

            const response = await request(app).put(`/ingredientes/${ingrediente_ID}`).expect(404);
        });

        test('should return error message', async() =>{
            const ingrediente_ID = 70;

            const response = await request(app).put(`/ingredientes/${ingrediente_ID}`).send();
            expect(response.body).toEqual({msg: 'El ingrediente no existe'});
        });

        test('should have a content-type:application/json in header', async () =>{
            const ingrediente_ID = 2;

            const response = await request(app).put(`/ingredientes/${ingrediente_ID}`).send({
                nombreIngrediente: 'Cilantro',
                cantidadDisponible: 500,
                tipo_Ingrediente: 'vegetal',
                precioIngrediente: 1000
            });
            expect(response.headers["content-type"]).toEqual(expect.stringContaining("json"));
        });

    });
});

describe('DELETE /ingredientes/:id', () =>{

    describe('given a ingrediente ID to delete', () =>{
        test('should respond with a 404 status code', async() =>{
            const ingrediente_ID = 70;

            const response = await request(app).delete(`/ingredientes/${ingrediente_ID}`).expect(404);
        });

        test('should return error message', async() =>{
            const ingrediente_ID = 70;

            const response = await request(app).delete(`/ingredientes/${ingrediente_ID}`).send();
            expect(response.body).toEqual({msg : 'El ingrediente no existe'});
        });

        test('should return succes message', async() =>{
            const ingrediente_ID = 2;

            const response = await request(app).delete(`/ingredientes/${ingrediente_ID}`).send();
            expect(response.body).toEqual({msg : 'El ingrediente ha sido borrado exitosamente'});
        });

    });
});*/