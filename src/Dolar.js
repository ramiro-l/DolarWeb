import Cards from './Cards'

export default function Dolar(params) {



    return (
        <div className="container">

            <hr className="mt-4 " ></hr>
            <p className="text-center text-uppercase display-2">{params.tipo}</p>
            <hr></hr>
            <p className="text-center mt-5 lead">
                La cotización del<b> Dólar {params.tipo}</b> minuto a minuto. Mantenete informado para tomar las mejores decisiones de inversión.
            </p>
            <div className='row '>
                <a className='m-2 col text-center text-body' href='#precio'><small>PRECIO</small></a>
                <a className='m-2 col text-center text-body' href='#conversor'><small>CONVERSOR</small></a>
                <a className='m-2 col text-center text-body' href='#info'><small>INFORMACIÓN</small></a>
            </div>
            <Cards tipo={params.tipo} />

        </div>
    );
}
