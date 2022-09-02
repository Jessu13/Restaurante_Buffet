import { Plato } from "../models/Plato.js";

const guardar_platos = (req, res) => {
    //Validar
    const { nombre_plato, descripcion, precio } = req.body;
    try {
        Plato.create({
            nombre_plato,
            precio,
            descripcion
        });
        res.redirect('/platos');
    } catch (error) {
        console.log(error);
    }
}

export { guardar_platos };