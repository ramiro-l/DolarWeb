import React from 'react'

class Conversor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pesosBlue: '', dolaresBlue: '',
            pesosOficial: '', dolaresOficial: '',
            pesosMep: '', dolaresMep: ''
        };

        this.handleChangePesos = this.handleChangePesos.bind(this);
        this.handleChangeDolares = this.handleChangeDolares.bind(this);
    }


    handleChangePesos(event) {

        if (event.target.value === '') {
            this.setState({ dolaresBlue: event.target.value });
            this.setState({ dolaresOficial: event.target.value });
            this.setState({ dolaresMep: event.target.value });
            this.setState({ pesosBlue: event.target.value });
            this.setState({ pesosOficial: event.target.value });
            this.setState({ pesosMep: event.target.value });
        } else {
            this.setState({ pesosBlue: event.target.value });
            this.setState({ pesosOficial: event.target.value });
            this.setState({ pesosMep: event.target.value });

            this.setState({ dolaresBlue: (parseInt(event.target.value) / parseInt(this.props.todos.precioBlue)).toFixed(2) });
            this.setState({ dolaresOficial: (parseInt(event.target.value) / parseInt(this.props.todos.precioOficial)).toFixed(2) });
            this.setState({ dolaresMep: (parseInt(event.target.value) / parseInt(this.props.todos.precioMep)).toFixed(2) });
        }



    }

    handleChangeDolares(event) {

        if (event.target.value === '') {
            this.setState({ dolaresBlue: event.target.value });
            this.setState({ dolaresOficial: event.target.value });
            this.setState({ dolaresMep: event.target.value });
            this.setState({ pesosBlue: event.target.value });
            this.setState({ pesosOficial: event.target.value });
            this.setState({ pesosMep: event.target.value });
        } else {
            this.setState({ dolaresBlue: event.target.value });
            this.setState({ dolaresOficial: event.target.value });
            this.setState({ dolaresMep: event.target.value });

            this.setState({ pesosBlue: (parseInt(event.target.value) * parseInt(this.props.todos.precioBlue)).toFixed(2) });
            this.setState({ pesosOficial: (parseInt(event.target.value) * parseInt(this.props.todos.precioOficial)).toFixed(2) });
            this.setState({ pesosMep: (parseInt(event.target.value) * parseInt(this.props.todos.precioMep)).toFixed(2) });
        }

    }


    render() {

        let color;
        let inputBlue = { display: 'none' }
        let inputOficial = { display: 'none' }
        let inputMep = { display: 'none' }
        if (this.props.tipo === 'Blue') {
            color = 'card-header mb-4 text-uppercase bg-primary text-white rounded';
            inputBlue = {}
        } else if (this.props.tipo === 'Oficial') {
            inputOficial = {}
            color = 'card-header mb-4 text-uppercase bg-success text-white rounded';
        } else if (this.props.tipo === 'MEP') {
            inputMep = {}
            color = 'card-header mb-4 text-uppercase bg-light  rounded';
        }

        return (
            <div class="card text-center mt-5 " >
                <div class="card-body ">

                    <p class="card-text">

                        <div class={color}>Conversor</div>
                        <br />
                        <form className='d-flex justify-content-center'>
                            <div>
                                <label class="lead mb-3">Pesos</label>
                                <div class="form-outline border rounded m-1">
                                    <small style={{ position: 'absolute', top: '11px', left: '8px' }}>$</small>
                                    <input id={this.props.tipo} type="number" class="form-control  text-center m-1" style={inputBlue} value={this.state.pesosBlue} onChange={this.handleChangePesos} />
                                    <input id={this.props.tipo} type="number" class="form-control  text-center m-1" style={inputOficial} value={this.state.pesosOficial} onChange={this.handleChangePesos} />
                                    <input id={this.props.tipo} type="number" class="form-control  text-center m-1" style={inputMep} value={this.state.pesosMep} onChange={this.handleChangePesos} />

                                </div>
                            </div>
                            <div>
                                <label class="lead mb-3">Dolares</label>
                                <div class="form-outline border rounded m-1">
                                    <small style={{ position: 'absolute', top: '11px', left: '8px' }}>$</small>
                                    <input id={this.props.tipo} type="number" class="form-control  text-center m-1" style={inputBlue} value={this.state.dolaresBlue} onChange={this.handleChangeDolares} />
                                    <input id={this.props.tipo} type="number" class="form-control  text-center m-1" style={inputOficial} value={this.state.dolaresOficial} onChange={this.handleChangeDolares} />
                                    <input id={this.props.tipo} type="number" class="form-control  text-center m-1" style={inputMep} value={this.state.dolaresMep} onChange={this.handleChangeDolares} />


                                </div>
                            </div>



                        </form>
                        <br />

                    </p>
                    <div class="card-footer" >
                        <small >Escriba en cualquira de las dos casillas, se calcula automaticamente.</small>
                    </div>
                    <div id='info'></div>
                </div>

            </div>
        );
    }
}

export default Conversor;