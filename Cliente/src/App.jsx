import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Inicio from './paginas/Inicio';
import IngSoftware from './paginas/IngSoftware';
import Industrial from './paginas/Industrial';
import Mecatronica from './paginas/Mecatronica';
import Electrica from './paginas/Electrica';
import Civil from './paginas/Civil';
import Login from './paginas/Login';
import Quimica from './paginas/Quimica';
import Biomedica from './paginas/Biomedica';
import CienciasComputacion from './paginas/CienciasComputacion';
import AdminEnergia from './paginas/AdminEnergia';
import ProtectedRoute from './components/ProtectedRoute';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* RUTA PÚBLICA */}
        <Route path="/login" element={<Login />} />

        {/* RUTAS PROTEGIDAS BAJO EL LAYOUT */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >
          {/* Carreras existentes */}
          <Route index element={<Inicio />} />
          <Route path="ing-software" element={<IngSoftware />} />
          <Route path="industrial" element={<Industrial />} />
          <Route path="mecatronica" element={<Mecatronica />} />
          <Route path="electrica" element={<Electrica />} />
          <Route path="civil" element={<Civil />} />
          
          {/* CORRECCIÓN: AGREGADAS LAS NUEVAS RUTAS QUE CAUSABAN EL ERROR */}
          <Route path="quimica" element={<Quimica />} />
          <Route path="biomedica" element={<Biomedica />} />
          <Route path="ciencias-computacion" element={<CienciasComputacion />} />
          <Route path="admin-energia" element={<AdminEnergia />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;