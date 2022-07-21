import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import {CartContextProvider } from './components/Contexts/CartContext';
import { Form } from './components/Form/Form';

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        < NavBar/>
        <Routes>
          <Route path="/" element={< ItemListContainer titulo="PETHOUSE" subTitulo="Bienvenidos a la veterinaria de mejor calidad" />}/>
          <Route path="/categoria/:categoriaId" element={< ItemListContainer/>}/>
          <Route path="/detalle/:id" element={< ItemDetailContainer/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="*" element={<Navigate to="/"/>}/>
          <Route path="/form" element={<Form/>}/>
        </Routes>      
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;