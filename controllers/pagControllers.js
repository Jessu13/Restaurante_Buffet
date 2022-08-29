import {Plato} from '../models/Plato.js';

const p_home = (req, res) => {
    res.render('home');
    res.send('Hello World!');
}

const p_platos = async (req, res) => {
    try{
        const platos = await Plato.findAll();
        res.render('platos', {
            platos
        });
    } catch (error) {
        console.log(error);
    }
}

export { p_home, 
            p_platos };