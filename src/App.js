
import './App.css';
import Nav from './Componenets/Nav';
import Home from './Componenets/Home';
import Product from './Componenets/Product';
import Cart from './Componenets/Cart';
import {Route,Routes} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
