import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
/* import Cuerpo from './components/Cuerpo/Cuerpo'; */
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      < NavBar/>
      <Routes>
        <Route path="/" element={< ItemListContainer titulo="PETHOUSE" subTitulo="Bienvenidos a la veterinaria de mejor calidad" />}/>
        <Route path="/categoria/:categoriaId" element={< ItemListContainer/>}/>
        <Route path="/detalle/:id" element={< ItemDetailContainer/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="*" element={<Navigate to="/"/>}/>
      </Routes>      
    </BrowserRouter>
  );
}

export default App;