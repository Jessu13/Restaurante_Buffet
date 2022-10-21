import { Ingrediente } from "../models/Ingrediente.js";

const guardar_ingredientes = async (req, res) => {
    //Validar
    const { nombreIngrediente, cantidadDisponible, tipo_Ingrediente, precioIngrediente } = req.body;

    if (!nombreIngrediente || !cantidadDisponible || !tipo_Ingrediente || !precioIngrediente){
        const error = new Error("Verifique que todos los campos se hayan llenado")
        return res.status(400).json({msg: error.message});
    }

    const existeIngrediente = await Ingrediente.findOne(({ where: { nombreIngrediente: nombreIngrediente } }));

    if (existeIngrediente){
        const error = new Error("El Ingrediente ingresado ya existe");
        return res.status(400).json({msg: error.message});
    }

    try {
        const nuevoIngrediente = await Ingrediente.create({
            nombreIngrediente, 
            cantidadDisponible,
            tipo_Ingrediente, 
            precioIngrediente
        });
        res.json(nuevoIngrediente);
        //res.redirect('/ingredientes');
    } catch (error) {
        console.log(error);
    }
}

const eliminar_ingrediente = async (req, res) => {
    //Validar
    const { id } = req.params;

    const ingrediente = await Ingrediente.findByPk(id)

    if(!ingrediente){
        const error = new Error("El ingrediente no existe")
        return res.status(404).json({msg: error.message});
    }

    try {
        await Ingrediente.destroy({
            where:{
                id,
            },
        });
        res.json({msg: 'El ingrediente ha sido borrado exitosamente'});
    } catch (error) {
        console.log(error);
    }
};

const actualizar_ingrediente = async (req, res) => {
    const { id } = req.params;
    const { nombreIngrediente, cantidadDisponible, tipo_Ingrediente, precioIngrediente } = req.body;

    const ingrediente = await Ingrediente.findByPk(id)

    if(!ingrediente){
        const error = new Error("El ingrediente no existe")
        return res.status(404).json({msg: error.message});
    }
    try {
        //Validar
        
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