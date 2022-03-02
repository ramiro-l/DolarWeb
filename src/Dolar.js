import { useParams } from "react-router-dom"
import React, { useEffect } from 'react'
import Cards from './Cards'

export default function Dolar(params) {

    let { ubicacion } = useParams();


    useEffect(() => {
        moverse(ubicacion)
        window.onscroll = function () {

            const div = document.getElementById('buttonsLiks');
            const divNone = document.getElementById('buttonsLiksNone');
            if (div && divNone) {
                if (window.scrollY > 294) {
                    div.classList.add('fixed-top', 'mt-5')
                    divNone.classList.remove('d-none')
                } else {
                    div.classList.remove('fixed-top', 'mt-5')
                    divNone.classList.add('d-none')
                }
            }

        };
    }, [ubicacion])


    function moverse(lugar) {

        if (lugar === 'precio') {
            window.scroll({
                top: 200,
                left: 0,
                behavior: 'smooth'
            });

        } else if (lugar === 'conversor') {
            window.scroll({
                top: 650,
                left: 0,
                behavior: 'smooth'
            });

        } else if (lugar === 'info') {
            window.scroll({
                top: 1200,
                left: 0,
                behavior: 'smooth'
            });

        } else {
            window.scroll({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });

        }

    }
    return (
        <div className="">
            <div className="container">

                <hr className="mt-4 " ></hr>
                <p className="text-center text-uppercase display-2">{params.tipo}</p>
                <hr></hr>
                <p className="text-center mt-5 lead">
                    La cotización del<b> Dólar {params.tipo}</b> minuto a minuto. Mantenete informado para tomar las mejores decisiones de inversión.
                </p>
            </div>
            <div className='row p-5 pt-0 pb-0 m-0' id="buttonsLiks" style={{ width: '100vw', zIndex: '1' }}>
                <button className='m-2 mt-3 col text-center text-body btn btn-ligh btn-sm bg-white' onClick={() => moverse('precio')}><small>PRECIO</small></button>
                <button className='m-2 mt-3 col text-center text-body btn btn-ligh btn-sm bg-white' onClick={() => moverse('conversor')}><small>CONVERSOR</small></button>
                <button className='m-2 mt-3 col text-center text-body btn btn-ligh btn-sm bg-white' onClick={() => moverse('info')}><small>INFORMACIÓN</small></button>
            </div>

            <div className='row d-none' id="buttonsLiksNone" style={{ height: '53px', width: '100vw' }}>
            </div>


            <div className="container">
                <Cards tipo={params.tipo} />
            </div>
        </div>
    );
}
