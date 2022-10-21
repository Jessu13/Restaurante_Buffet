import { useState } from 'react';
import axios from 'axios';
import Alerta from '../components/Alerta';

const Platos = () => {
    const [datos, setDatos] = useState({
        nombre_plato: '',
        precio: '',
        descripcion: ''
    })

    const [alerta, setAlerta] = useState({})

    const handleInputChange = (event) => {
        // console.log(event.target.name)
        // console.log(event.target.value)
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }

    const enviarDatos = async (event) => {
        event.preventDefault()

        //console.log(JSON.stringify({datos}));

        //Descomentar y borrar console.log, poner las restricciones de no null en la base de datos para la tabla platos
        
        if ([datos.nombre, datos.precio,datos.descripcion].includes('')){

            setAlerta({msg: 'Hay campos vacios', error:true})
            return;
        }

        if (datos.descripcion.length < 6){
            setAlerta({msg: 'La descripcios es muy corta', error:true})
            return;
        }

        setAlerta({});

        //Crear el usuario en la API
        try {
            const url = "http://localhost:4000/platos"
            await axios.post(url, {datos})
            setAlerta({
                msg: 'Creado correctamente, Sebas es gay',
                error: false
            })
        } catch (error) {  
            setAlerta({
                msg: error.response.data.msg,
                error: true
            })
        }
    }

    const { msg } = alerta

    return (
        <>
            <div>
                <h1 className="text-indigo-600 font-black text-6xl">Restaurante Buffete Registrar un <span className="text-black">Plato</span> </h1>
            </div>


            <div className='mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white'>
                { msg && <Alerta
                    alerta = {alerta}
                />}
                <form 
                    onSubmit={enviarDatos}
                >
                    <div className="my-5">
                        <label className="uppercase text-gray-600 block text.xl font-bold">
                            Nombre Plato
                        </label>
                        <input type="text" placeholder="Nombre Plato" className="border w-full p-3 mt-3 bg-gray-50 rounded-xl" onChange={handleInputChange} name="nombre_plato" ></input>
                    </div>
                    <div className="my-5">
                        <label className="uppercase text-gray-600 block text.xl font-bold">
                            Precio
                        </label>
                        <input type="number" placeholder="Precio Plato" className="border w-full p-3 mt-3 bg-gray-50 rounded-xl " onChange={handleInputChange} name="precio"/>
                    </div>

                    <div className="my-5">
                        <label className="uppercase text-gray-600 block text.xl font-bold">
                            Descripcion
                        </label>
                        <input type="text" placeholder="Descripcion Plato" className="border w-full p-3 mt-3 bg-gray-50 rounded-xl" onChange={handleInputChange} name="descripcion"/>
                    </div>

                    <input 
                        type="submit" 
                        value= "Registrar Plato" 
                        className="bg-indigo-700 w-full py-3 px-10 rounded-xl
                        text-white uppercase font-bold mt-5 hover:cursor-pointer
                        hover:bg-indigo-800 md:w-auto"
                    />
                </form>
            </div>
        </>
    )
}

export default Platos