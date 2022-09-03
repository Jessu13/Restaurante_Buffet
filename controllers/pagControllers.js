import {Plato} from '../models/Plato.js';

const p_home = (req, res) => {
    res.render('home');
    res.send('Hello World!');
}

const p_platos = async (req, res) => {
    try{
        const platos = await Plato.findAll();
        /*res.render('platos', {
            platos
        });*/
        res.json(platos)
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

const plato = async (req, res, next) => {
    try{
        const {id_plato} = req.params;
        const plato = await Plato.findOne({ where: { id: id_plato } });

        res.json(plato);
        /*res.render('plato', {
            plato
        });*/
        
    } catch(error) {
        next(error)
    }
}

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

export {p_home, 
        p_platos,
        plato,
        actualizar_plato};