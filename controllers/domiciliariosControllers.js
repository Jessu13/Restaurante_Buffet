import { Domiciliario } from "../models/Domiciliario.js";

const guardar_domiciliarios = async (req, res) => {
    //Validar
    const { nombre_Domiciliario, disponible, activo } = req.body;
    try {
        const nuevoDomiciliario = await Domiciliario.create({
            nombre_Domiciliario,
            disponible,
            activo

        });
        //res.json(nuevoDomiciliario);
        res.redirect('/domiciliarios');
    } catch (error) {
        console.log(error);
    }
};

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

const eliminar_domiciliario = async (req, res) => {
    //Validar
    try {
        const { id } = req.params;
        await Domiciliario.destroy({
            where:{
                id,
            },
        });
        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
};

const actualizar_domiciliario = async (req, res) => {
    try {
        //Validar
        const { id } = req.params;
        const { nombre_Domiciliario, disponible, activo } = req.body;
        
        const domiciliario = await Domicilario.findByPk(id)
        domiciliario.nombreUsuario = nombreUsuario
        domiciliario.telefono = telefono
        domiciliario.email = email
        domiciliario.direccion = direccion

        await domiciliario.save();

        res.json(domiciliario);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}


export { guardar_domiciliarios, eliminar_domiciliario, actualizar_domiciliario }