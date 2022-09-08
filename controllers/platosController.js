import { Plato } from "../models/Plato.js";

const guardar_platos = async (req, res) => {
    //Validar
    const { nombre_plato, descripcion, precio } = req.body;
    try {
        const nuevoPlato = await Plato.create({
            nombre_plato,
            precio,
            descripcion

        });
        //res.json(nuevoPlato);
        res.redirect('/platos');
    } catch (error) {
        console.log(error);
    }
}

const eliminar_plato = async (req, res) => {
    //Validar
    try {
        const { id } = req.params;
        await Plato.destroy({
            where:{
                id,
            },
        });
        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
};

const actualizar_plato = async (req, res) => {
    try {
        //Validar
        const { id } = req.params;
        const {nombre_plato, descripcion, precio} = req.body
        
        const plato = await Plato.findByPk(id)
        plato.nombre_plato = nombre_plato
        plato.descripcion = descripcion
        plato.precio = precio

        await plato.save();

        res.json(plato);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}


export { guardar_platos, eliminar_plato, actualizar_plato };
