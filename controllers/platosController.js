import { Plato } from "../models/Plato.js";

const guardar_platos = (req, res) => {
    //Validar
    const { nombreplato, descriptplato, precioplato } = req.body;
    try {
        await Plato.create({
            nombre: nombreplato, 
            precio: precioplato,
            descripcion: descriptplato, 
        });
        res.redirect('/platos');
    } catch (error) {
        console.log(error);
    }
}

const eliminar_plato = async (req, res) => {
    //Validar
    const { nombreplato} = req.body;
    try {
        await Plato.destroy({
            where: { 
                nombre: nombreplato 
            },
        });
        res.redirect('/platos');
    } catch (error) {
        console.log(error);
    }
}

const actualizar_plato = async (req, res) => {
    //Validar
    const { nombreplato, descriptplato, precioplato} = req.body;
    try {
        await User.update(
            {
                nombre: nombreplato, 
                precio: precioplato,
                descripcion: descriptplato,
            },
            {
                where: { nombre: nombreplato },
            }
        );
        res.redirect('/platos');
    } catch (error) {
        console.log(error);
    }
}


export { guardar_platos, eliminar_plato, actualizar_plato };
