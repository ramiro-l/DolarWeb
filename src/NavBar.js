import { Link } from "react-router-dom";
import React from "react";




class Navbar extends React.Component {

    clickNavBarButton() {
        const button = document.getElementsByClassName("navbar-toggler");
        if (button[0].children[0].className === 'fas fa-bars') {
            button[0].removeChild(button[0].children[0])
            const div = document.createElement("i");
            div.classList.add('fas', 'fa-times');
            button[0].insertAdjacentElement("beforeend", div)
        } else {
            button[0].removeChild(button[0].children[0])
            const div = document.createElement("i");
            div.classList.add('fas', 'fa-bars');
            button[0].insertAdjacentElement("beforeend", div)
        }

    }

    clickLinkButton(tipo) {

        const menu = document.getElementById('navbarSupportedContent');

        if (menu.classList.value === 'navbar-collapse collapse show') {
            menu.classList.remove('show');
            this.clickNavBarButton()
        }


    }



    render() {
        return (
            <nav className="fixed-top navbar navbar-expand-lg bg-light navbar-light ">

                <div className="container-fluid container">

                    <Link className="navbar-brand" to="/" onClick={() => this.clickLinkButton('home')}>
                        <img
                            src="Logo.png"
                            height="30"
                            alt="Dolar Hoy Arg Logo"
                            loading="lazy"
                        />
                        <small>DolarHoyArg</small>
                    </Link>



                    <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
                        onClick={() => this.clickNavBarButton()}
                    >
                        <i className="fas fa-bars"></i>

                    </button>


                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/blue" id="navbarDropdown" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                                    Blue
                                </a>

                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li>
                                        <Link className="nav-link  m-1" to="/blue/precio" onClick={() => this.clickLinkButton('blue')}>Precio</Link>
                                    </li>
                                    <li>
                                        <Link className="nav-link  m-1" to="/blue/info" onClick={() => this.clickLinkButton('blue')}>Información</Link>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider " />
                                    </li>
                                    <li>
                                        <Link className="nav-link  m-1" to="/blue/conversor" onClick={() => this.clickLinkButton('blue')}>Conversor</Link>
                                    </li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/oficial" id="navbarDropdown" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                                    Oficial
                                </a>

                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li>
                                        <Link className="nav-link  m-1" exact to='/oficial/precio' onClick={() => this.clickLinkButton("oficial")}>Precio</Link>
                                    </li>
                                    <li>
                                        <Link className="nav-link  m-1" to="/oficial/info" onClick={() => this.clickLinkButton("oficial")}>Información</Link>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                        <Link className="nav-link  m-1" to="/oficial/conversor" onClick={() => this.clickLinkButton("oficial")}>Conversor</Link>
                                    </li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/mep" id="navbarDropdown" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                                    MEP
                                </a>

                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li>
                                        <Link className="nav-link  m-1" to='/mep/precio' onClick={() => this.clickLinkButton("mep")}>Precio</Link>
                                    </li>
                                    <li>
                                        <Link className="nav-link  m-1" to="/mep/info" onClick={() => this.clickLinkButton("mep")}>Información</Link>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                        <Link className="nav-link  m-1" to="/mep/conversor" onClick={() => this.clickLinkButton("mep")}>Conversor</Link>
                                    </li>
                                </ul>
                            </li>

                        </ul>


                    </div>
                </div>

            </nav>

        );
    }
}
export default Navbar;
