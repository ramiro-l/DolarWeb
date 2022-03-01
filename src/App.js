import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dolar from "./Dolar";
import Navbar from "./NavBar";
import Home from './Home'

export default function App() {
  return (
    <Router>
      <Navbar />
      <div classNameName="mt-5" id='precio'>
        <br />
        <br />
        <br />
        <Routes>
          <Route path="/" element={<Home />} />



          <Route path="/blue" element={<Dolar tipo='Blue' />} />

          <Route path="/oficial" element={<Dolar tipo='Oficial' />} />

          <Route path="/mep" element={<Dolar tipo='MEP' />} />



          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}




function Footer() {
  return (
    <div>
      <br />

      <footer className="text-center text-white border-top">

        <div className="container pt-4">

          <section className="mb-4">

            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="/"
              role="button"
              data-mdb-ripple-color="dark"
            ><i className="fab fa-facebook-f"></i
            ></a>


            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="https://twitter.com/DolarArgHoy"
              role="button"
              data-mdb-ripple-color="dark"
            ><i className="fab fa-twitter"></i
            ></a>




            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="https://www.instagram.com/dolarhoyarg/?hl=es-la"
              role="button"
              data-mdb-ripple-color="dark"
            ><i className="fab fa-instagram"></i
            ></a>

            <div>
              <small className="text-dark">
                dhoyarg@gmail.com
              </small>
            </div>

          </section>

        </div>



        <div className="text-center text-dark p-3" style={{ backgroundColor: '#e8e8e8' }}>
          © 2022 Copyright:
          <a className="text-dark" href="/">  DolarHoyArg.com</a>
        </div>

      </footer>
    </div>
  );
}


function NotFound() {
  return (<>Ha llegado a una página que no existe</>)
}
