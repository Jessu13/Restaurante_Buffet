import { Usuario } from "../models/Usuario.js";

const guardar_usuario = async (req, res) => {
    //Validar
    const { nombre, telefono, email, direccion } = req.body;
    try {
        const nuevoUsuario = await Usuario.create({
            nombre, 
            telefono,
            email,
            direccion
        });
        res.json(nuevoUsuario);
        res.redirect('/usuarios');
    } catch (error) {
        console.log(error);
    }
}

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
        const {nombre, telefono, email, direccion} = req.body
        
        const usuario = await Usuario.findByPk(id)
        usuario.nombre = nombre
        usuario.telefono= telefono
        usuario.email = email
        usuario.direccion = direccion

        await usuario.save();

        res.json(usuario);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}


export { guardar_usuario, eliminar_usuario, actualizar_usuario };
