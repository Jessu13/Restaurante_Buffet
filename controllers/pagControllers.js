import {Plato} from '../models/Plato.js';
import {Usuario} from '../models/Usuario.js';
import {Ingrediente} from '../models/Ingrediente.js';
import {Domiciliario} from '../models/Domiciliario.js';

const p_home = (req, res) => {
    //res.render('home');
    res.json({ msg: 'Hello World!'});
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
    const {id} = req.params;

    const plato = await Plato.findByPk(id);
    if(!plato){
        const error = new Error("El plato no existe")
        return res.status(400).json({msg: error.message});
    }

    try{
        res.json(plato);
        /*res.render('plato', {
            plato
        });*/
        
    } catch(error) {
        console.log(error);
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

const p_ingredientes = async (req, res) => {
    try{
        const ingredientes = await Ingrediente.findAll();
        res.render('ingredientes', {
            ingredientes
        });
        //res.json(ingredientes)
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

const p_domiciliarios = async (req, res) => {
    try{
        const domiciliarios = await Domiciliario.findAll();
        res.render('domiciliarios', {
            domiciliarios
        });
        //res.json(domiciliarios)
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}



export {p_home, 
        p_platos,
        plato, 
        p_usuarios,
        p_ingredientes,
        p_domiciliarios};