import React from 'react';

export default function Info(params) {
    let color;
    let texto;
    if (params.tipo === 'Blue') {
        color = 'card-header mb-4 text-uppercase bg-primary text-white rounded';
        texto = blue()
    } else if (params.tipo === 'Oficial') {
        color = 'card-header mb-4 text-uppercase bg-success text-white rounded';
        texto = oficial()
    } else if (params.tipo === 'MEP') {
        color = 'card-header mb-4 text-uppercase bg-light  rounded';
        texto = mep()
    }




    return (
        <div class="card text-center mt-5" >
            <div class="card-body ">

                <p class="card-text">
                    <div class={color}> Información</div>
                    <br />
                    {texto}

                </p>

            </div>

        </div>
    );
}


function blue() {
    return (
        <div>
            <h5>¿QUÉ ES EL DÓLAR BLUE?</h5>
            <p class="" style={{ textAlign: 'justify' }}>
                El valor del <b className='text-primary'>dólar blue</b> tiene una diferencia sustancial con el <b className='text-success'>dólar oficial</b>, que se adquiere en los bancos y que posee una cotización establecida. <b>Su venta es en el mercado informal</b>, sin regulaciones ni límites, y por eso se opera <b>generalmente a un valor mayor que el dólar oficial.</b>
            </p>
            <br />
            <h5>¿POR QUÉ SE LLAMA
                DÓLAR BLUE?</h5>
            <p class="" style={{ textAlign: 'justify' }}>
                No está claro el origen del <b className='text-primary'>dólar blue</b>, pero existen teorías.
                Una explicación sobre su denominación señala que se llama así porque en inglés, <b className='text-primary'>"blue"</b>, además de nombrar al color azul, <b>remite a algo "oscuro". </b>
                También lo vinculan con <b>el color aproximado que aparece cuando se aplica un fibrón para detectar billetes falsos.</b>
            </p>
        </div>
    );
}
function oficial() {
    return (
        <div>
            <h5>¿QUÉ ES EL DÓLAR OFICIAL?</h5>
            <p class="" style={{ textAlign: 'justify' }}>
                Se refiere al valor de la <b>cotización del dólar en las casas de cambio y bancos autorizados</b> a operar en el Mercado Único y Libre de Cambios (MULC) por el Banco Central de la República Argentina (BCRA). Su precio surge de la libre oferta y demanda en bancos y casas de cambio.
            </p>
        </div>
    );
}
function mep() {
    return (
        <div>
            <h5>¿QUÉ ES EL DÓLAR MEP?</h5>
            <p class="" style={{ textAlign: 'justify' }}>
                Es la cotización del dólar que se puede obtener a través de una operatoria de <b>compra venta de bonos que cotizan en pesos y dólares.</b> Realizando la compra de un bono en pesos (por ejemplo el Bono AL30) y luego vendiendo ese mismo bono pero en dólares (AL30D) se puede adquirir dólares.
            </p>
            <br />
            <h5>¿CÓMO COMPRAR
                DÓLAR MEP?</h5>
            <p class="" style={{ textAlign: 'justify' }}>
                Acreditados los pesos en tu caja de ahorro, se realiza una transferencia a la cuenta corriente de la sociedad de bolsa para que esos pesos se acrediten en tu cuenta comitente abierta en esa sociedad.
                Con los pesos acreditados en la cuenta comitente se compran bonos que coticen tanto en pesos como en dólares.
                Se espera 1 día hábil hasta poder venderlos.

                Luego  se venden los mismos bonos que originalmente se compraron pero en su versión en dólares.

                Los dólares que se reciben por la venta de los bonos en dólares se acreditan en la cuenta comitente en la sociedad de bolsa.

                Se realiza una transferencia de los dólares de la cuenta comitente en la sociedad de bolsa a la caja de ahorro en dólares en tu banco.
            </p>
            <br />
            <h5>¿SE PUEDE COMPRAR DÓLAR MEP SIN LÍMITES?</h5>
            <p class="" style={{ textAlign: 'justify' }}>
                A través de la operatoria del Dólar MEP se pueden comprar <b>dólares sin límites y en forma legal.</b>
            </p>
        </div>
    );
}
