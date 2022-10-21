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
        return res.status(404).json({msg: error.message});
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

const usuario = async (req, res, next) => {
    const {id} = req.params;

    const usuario = await Usuario.findByPk(id);
    if(!usuario){
        const error = new Error("El usuario no existe")
        return res.status(404).json({msg: error.message});
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

const ingrediente = async (req, res, next) => {
    const {id} = req.params;

    const ingrediente = await Ingrediente.findByPk(id);
    if(!ingrediente){
        const error = new Error("El ingrediente no existe")
        return res.status(404).json({msg: error.message});
    }

    try{
        res.json(ingrediente);
        /*res.render('plato', {
            plato
        });*/
        
    } catch(error) {
        console.log(error);
    }
}

const domiciliario = async (req, res, next) => {
    const {id} = req.params;

    const domiciliario = await Domiciliario.findByPk(id);

    if(!domiciliario){
        const error = new Error("El domiciliario no existe")
        return res.status(404).json({msg: error.message});
    }

    try{
        res.json(domiciliario);
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
        res.json(usuarios);

        /*res.render('usuarios', {
            usuarios
        });*/
        
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

const p_ingredientes = async (req, res) => {
    try{
        const ingredientes = await Ingrediente.findAll();
        /*res.render('ingredientes', {
            ingredientes
        });*/
        res.json(ingredientes)
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

const p_domiciliarios = async (req, res) => {
    try{
        const domiciliarios = await Domiciliario.findAll();
        /*res.render('domiciliarios', {
            domiciliarios
        });*/
        res.json(domiciliarios)
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}



export {p_home, 
        p_platos,
        plato, 
        usuario,
        ingrediente,
        domiciliario,
        p_usuarios,
        p_ingredientes,
        p_domiciliarios};