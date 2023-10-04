import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Boton from './components/Boton';
//import Contador from './components/Contador';
//import { useState } from 'react';

function App() {

  //const [numClics, setNumClics] = useState(0);

  /*const manejarClic = () => {
    setNumClics(numClics + 1);
  }

  const reiniciarContador = () => {
    setNumClics(0);
  }*/

  return (
    <div>
      <NavBar user='Valeria' numero={1} valor={true} />
      <div class="presentacion">
            <img width="100%" src="https://www.dondeir.com/wp-content/uploads/2023/06/barbie-la-pelicula.jpg" alt="De"/>
        </div>
      <div className="centCont m20">
        <h2 id="fecha">Barbie Colección Primavera</h2>
      </div>
      <div className="closets">
        <div className="container m20">
          <div id="coincidencia"></div>
          <div id="ropa" className="row">
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
