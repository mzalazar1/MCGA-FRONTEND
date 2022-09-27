import logo from './logo.svg';
import { Routes, Route } from "react-router-dom"
import Login from "./screens/Login";
import './App.css';
import Layout from './components/Layout/layout';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="login" element={<Login />} />
      </Routes>
    </Layout>
  );
}
//darle estilos, pantalla de productos,crear un boton(compartido) que muestre en texto lo que pase, agregar un footer debajo del children


export default App;
