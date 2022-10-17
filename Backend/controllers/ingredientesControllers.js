import { Ingrediente } from "../models/Ingrediente.js";

const guardar_ingredientes = async (req, res) => {
    //Validar
    const { nombreIngrediente, cantidadDisponible, tipo_Ingrediente, precioIngrediente } = req.body;
    try {
        const nuevoIngrediente = await Ingrediente.create({
            nombreIngrediente, 
            cantidadDisponible,
            tipo_Ingrediente, 
            precioIngrediente
        });
        //res.json(nuevoIngrediente);
        res.redirect('/ingredientes');
    } catch (error) {
        console.log(error);
    }
}

const eliminar_ingrediente = async (req, res) => {
    //Validar
    try {
        const { id } = req.params;
        await Ingrediente.destroy({
            where:{
                id,
            },
        });
        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
};

const actualizar_ingrediente = async (req, res) => {
    try {
        //Validar
        const { id } = req.params;
        const { nombreIngrediente, cantidadDisponible, tipo_Ingrediente, precioIngrediente } = req.body;
        
        const ingrediente = await Ingrediente.findByPk(id)
        ingrediente.nombreIngrediente = nombreIngrediente;
        ingrediente.cantidadDisponible= cantidadDisponible;
        ingrediente.tipo_Ingrediente = tipo_Ingrediente;
        ingrediente.precioIngrediente = precioIngrediente;

        await ingrediente.save();

        res.json(ingrediente);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}


export { guardar_ingredientes, eliminar_ingrediente, actualizar_ingrediente };