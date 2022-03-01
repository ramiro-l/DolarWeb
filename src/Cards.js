import React, { useEffect, useState } from 'react';
import Conversor from './Conversor';
import Precio from './Precio'
import Info from './Info'

export default function Cards(params) {

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

        getDolar();
    }, [])

    if (params.tipo === 'Blue') {
        return <Plantilla tipo={params.tipo} compra={dolarBlue.compra} venta={dolarBlue.venta} todos={{
            precioBlue: dolarBlue.venta, 
            precioOficial: dolarOficial.compra,
            precioMep: dolarMep.compra
        }} />
    } else if (params.tipo === 'Oficial') {
        return <Plantilla tipo={params.tipo} compra={dolarOficial.compra} venta={dolarOficial.venta} todos={{
            precioBlue: dolarBlue.venta, 
            precioOficial: dolarOficial.venta,
            precioMep: dolarMep.compra
        }} />
    } else if (params.tipo === 'MEP') {
        return <Plantilla tipo={params.tipo} compra={dolarMep.compra} venta={dolarMep.venta} todos={{
            precioBlue: dolarBlue.venta, 
            precioOficial: dolarOficial.compra,
            precioMep: dolarMep.compra
        }} />
    }


}


function Plantilla(params) {

    return (
        <div>
            <div className='row' >
                <div className="col-md">
                    <Precio text='Precio' compra={params.compra} venta={params.venta} tipo={params.tipo} />
                </div>
                <div className="col-md">
                    <Conversor compra={params.compra} venta={params.venta} tipo={params.tipo}  todos={params.todos}/>
                </div>
            </div>
            <div className="col-md">
                <Info compra={params.compra} venta={params.venta} tipo={params.tipo} />
            </div>
        </div>

    )
}
