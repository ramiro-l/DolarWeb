import React from 'react';

export default function Precio(params) {
    let color;
    if (params.tipo === 'Blue') {
        color = 'card-header mb-4 text-uppercase bg-primary text-white rounded shadow-3';
    } else if (params.tipo === 'Oficial') {
        color = 'card-header mb-4 text-uppercase bg-success text-white rounded shadow-3';
    } else if (params.tipo === 'MEP') {
        color = 'card-header mb-4 text-uppercase bg-light  rounded shadow-3';
    }

    
    return (
        <div class="card text-center mt-5">
            <div class="card-body ">

                <p class="card-text">
                    <div class={color} style={{border:'none'}}> {params.text}</div>
                    <br />
                    <table class="table table-borderless table-sm">
                        <thead>
                            <tr>
                                <th scope="col " ><p className='lead'>Compra</p></th>
                                <th scope="col " ><p className='lead'>Venta</p></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className=''>${params.compra}</td>
                                <td className=''>${params.venta}</td>
                            </tr>

                        </tbody>
                        <br />
                    </table>

                </p>
                <div class="card-footer" >
                    <div><small>{new Date().toLocaleDateString()}</small></div>
                    <div>{new Date().toLocaleTimeString()}</div>
                </div>
                <div id='conversor'></div>
            </div>

        </div>
    );
}