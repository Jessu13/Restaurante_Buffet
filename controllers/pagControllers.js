import {Plato} from '../models/Plato.js';
import {Usuario} from '../models/Usuario.js';

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

const p_usuarios = async (req, res) => {
    try{
        const usuarios = await Usuario.findAll();
        res.render('usuarios', {
            usuarios
        });
        //res.json(usuarios)
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}



export {p_home, 
        p_platos,
        plato, 
        p_usuarios};