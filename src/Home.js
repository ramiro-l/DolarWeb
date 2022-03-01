import React, { useEffect, useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import Precios from './Precio';

export default function Home(params) {

    // Creamos una variable usando el useState
    const [dolarBlue, setDolarBlue] = useState([]);
    const [dolarOficial, setDolarOficial] = useState([]);
    const [dolarMep, setDolarMep] = useState([]);

    // Creamos mediante una constante la funcion asincrona que hara fetch al API
    const getDolar = async () => {
        const web = await fetch('https://www.dolarsi.com/api/api.php?type=valoresprincipales');
        const dolar = await web.json();;
        for (let index = 0; index < dolar.length; index++) {
            const element = dolar[index];
            if (element.casa.nombre === `Dolar Blue`) {
                setDolarBlue(element.casa)
            }

        }
        for (let index = 0; index < dolar.length; index++) {
            const element = dolar[index];
            if (element.casa.nombre === `Dolar Oficial`) {
                setDolarOficial(element.casa)
            }

        }
        for (let index = 0; index < dolar.length; index++) {
            const element = dolar[index];
            if (element.casa.nombre === `Dolar Bolsa`) {
                setDolarMep(element.casa)
            }

        }
    }

    // Usamos el método useEffect para ejecutar la funcion que trae los datos del API
    // El segundo parametro es un [] y evita un loop infinito
    useEffect(() => {
        getDolar()
    }, [])

    return (
        <div className="container">
            <hr className="mt-4 " ></hr>
            <h1 class="display-3 text-center">Dola Hoy Arg</h1>
            <hr />
            <p class="text-center"> La cotización del Dólar Oficial minuto a minuto. Mantenete informado para tomar las mejores decisiones de inversión.</p>
            <hr />
            <br />
            <div className='row justify-content-center'>
                <div className="col-md m-2 row justify-content-center">

                    <Precios text='Blue' tipo='Blue' compra={dolarBlue.compra} venta={dolarBlue.venta} />
                    <button type="button" class="btn btn-light mt-2">
                        <HashLink className="nav-link text-center m-1 text-body text-uppercase" to="/blue#precio">Click para ver más</HashLink>
                    </button>

                </div>
                <div className="col-md m-2 row justify-content-center">
                    <Precios text='Oficial' tipo='Oficial' compra={dolarOficial.compra} venta={dolarOficial.venta} />
                    <button type="button" class="btn btn-light mt-2">
                        <HashLink className="nav-link text-center m-1 text-body text-uppercase" to="/oficial#precio">Click para ver más</HashLink>
                    </button>
                </div>
                <div className="col-md m-2 row justify-content-center">
                    <Precios text='MEP' tipo='MEP' compra={dolarMep.compra} venta={dolarMep.venta} />
                    <button type="button" class="btn btn-light mt-2">
                        <HashLink className="nav-link text-center m-1 text-body text-uppercase" to="/mep#precio">Click para ver más</HashLink>
                    </button>
                </div>
            </div>

        </div>
    )
}
