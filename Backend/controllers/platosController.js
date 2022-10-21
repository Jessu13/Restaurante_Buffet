import { Plato } from "../models/Plato.js";

const guardar_platos = async (req, res) => {
    //Validar
    const {nombre_plato, descripcion, precio} = req.body.datos;
    

    if (!nombre_plato || !precio || !descripcion){
        const error = new Error("Verifique que todos los campos se hayan llenado")
        return res.status(400).json({msg: error.message});
    }

    const existePlato = await Plato.findOne(({ where: { nombre_plato: nombre_plato } }));

    if (existePlato){
        const error = new Error("El plato ingresado ya existe");
        return res.status(400).json({msg: error.message});
    }

    try {
        
        //Guardar nuevo plato
        const nuevoPlato = await Plato.create({
            nombre_plato,
            precio,
            descripcion

        });
        res.json(nuevoPlato);
        //res.redirect('/platos');
    } catch (error) {
        console.log(error);
    }
}

const eliminar_plato = async (req, res) => {
    //Validar
    const { id } = req.params;

    const plato = await Plato.findByPk(id)

    if(!plato){
        const error = new Error("El plato no existe")
        return res.status(404).json({msg: error.message});
    }

    try {
        await Plato.destroy({
            where:{
                id,
            },
        });
        res.json({msg: 'El plato ha sido borrado exitosamente'});
    } catch (error) {
        console.log(error);
    }
};

const actualizar_plato = async (req, res) => {
    
    //Validar
    const { id } = req.params;
    const {nombre_plato, descripcion, precio} = req.body
    
    const plato = await Plato.findByPk(id)

    if(!plato){
        const error = new Error("El plato no existe")
        return res.status(404).json({msg: error.message});
    }

    try {

        plato.nombre_plato = nombre_plato
        plato.descripcion = descripcion
        plato.precio = precio

        await plato.save();

        res.json(plato);
    }catch (error) {
        console.log(error);
    }
}


export { guardar_platos, eliminar_plato, actualizar_plato };
