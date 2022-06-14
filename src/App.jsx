import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
/* import Cuerpo from './components/Cuerpo/Cuerpo'; */
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <>
      < NavBar/>
      {/* < Cuerpo/> */}
      < ItemListContainer titulo="PETHOUSE" subTitulo="Bienvenidos a la veterinaria de mejor calidad" />
    </>
  );
}

export default App;