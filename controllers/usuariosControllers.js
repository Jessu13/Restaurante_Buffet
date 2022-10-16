import { Usuario } from "../models/Usuario.js";

const guardar_usuario = async (req, res) => {
    //Validar
    const { nombreUsuario, telefono, email, direccion } = req.body;

    if (!nombreUsuario || !telefono || !email || !direccion){
        const error = new Error("Verifique que todos los campos se hayan llenado")
        return res.status(400).json({msg: error.message});
    }

    const existeUsuario = await Usuario.findOne(({ where: { email: email } }));

    if (existeUsuario){
        const error = new Error("El Usuario ingresado ya existe");
        return res.status(400).json({msg: error.message});
    }

    try {
        const nuevoUsuario = await Usuario.create({
            nombreUsuario,
            telefono,
            email,
            direccion

        });
        res.json(nuevoUsuario);
        //res.redirect('/usuarios');
    } catch (error) {
        console.log(error);
    }
};

const eliminar_usuario = async (req, res) => {
    //Validar
    try {
        const { id } = req.params;
        await Usuario.destroy({
            where:{
                id,
            },
        });
        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
};

const actualizar_usuario = async (req, res) => {
    try {
        //Validar
        const { id } = req.params;
        const {nombreUsuario, telefono, email, direccion} = req.body
        
        const usuario = await Usuario.findByPk(id)
        usuario.nombreUsuario = nombreUsuario
        usuario.telefono = telefono
        usuario.email = email
        usuario.direccion = direccion

        await usuario.save();

        res.json(usuario);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}


export { guardar_usuario, eliminar_usuario, actualizar_usuario }