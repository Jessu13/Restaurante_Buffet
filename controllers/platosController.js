import { Plato } from "../models/Plato.js";

const guardar_platos = (req, res) => {
    //Validar
    const { nombre, descripcion, precio } = req.body;
    try {
        Plato.create({
            nombre,
            precio,
            descripcion
        });
        res.redirect('/platos');
    } catch (error) {
        console.log(error);
    }
}

export { guardar_platos };