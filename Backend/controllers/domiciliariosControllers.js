import { Domiciliario } from "../models/Domiciliario.js";

const guardar_domiciliarios = async (req, res) => {
    //Validar
    const { nombre_Domiciliario, disponible, activo } = req.body;

    if (!nombre_Domiciliario || !disponible || !activo){
        const error = new Error("Verifique que todos los campos se hayan llenado")
        return res.status(400).json({msg: error.message});
    }

    const existeDomiciliario = await Domiciliario.findOne(({ where: { nombre_Domiciliario: nombre_Domiciliario } }));

    if (existeDomiciliario){
        const error = new Error("El Usuario ingresado ya existe");
        return res.status(400).json({msg: error.message});
    }

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

const eliminar_domiciliario = async (req, res) => {
    //Validar
    const { id } = req.params;

    const domiciliario = await Domiciliario.findByPk(id)

    if(!domiciliario){
        const error = new Error("El domiciliario no existe")
        return res.status(404).json({msg: error.message});
    }

    try {
        await Domiciliario.destroy({
            where:{
                id,
            },
        });
        res.json({msg: 'El domiciliario ha sido borrado exitosamente'});
    } catch (error) {
        console.log(error);
    }
};

const actualizar_domiciliario = async (req, res) => {

    const { id } = req.params;
    const { nombre_Domiciliario, disponible, activo } = req.body;

    const domiciliario = await Domiciliario.findByPk(id)

    if(!domiciliario){
        const error = new Error("El ingrediente no existe")
        return res.status(404).json({msg: error.message});
    }

    try {
        //Validar
        domiciliario.nombre_Domiciliario = nombre_Domiciliario;
        domiciliario.disponible = disponible;
        domiciliario.activo = activo;

        await domiciliario.save();

        res.json(domiciliario);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}


export { guardar_domiciliarios, eliminar_domiciliario, actualizar_domiciliario }