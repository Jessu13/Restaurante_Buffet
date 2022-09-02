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

const eliminar_plato = async (req, res) => {
    //Validar
    const { nombre_plato} = req.body;
    try {
        await Plato.destroy({
            where: { 
                nombre: nombre_plato 
            },
        });
        res.redirect('/platos');
    } catch (error) {
        console.log(error);
    }
}

const actualizar_plato = async (req, res) => {
    //Validar
    const { nombre_plato, descripcion, precio} = req.body;
    try {
        await User.update(
            {
                nombre: nombre_plato, 
                precio: precio,
                descripcion: descripcion,
            },
            {
                where: { nombre: nombre_plato },
            }
        );
        res.redirect('/platos');
    } catch (error) {
        console.log(error);
    }
}


export { guardar_platos, eliminar_plato, actualizar_plato };
