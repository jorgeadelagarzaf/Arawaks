import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainLayout from './layouts/Main/MainLayout';
import Inicio from './pages/main/Inicio/Inicio';
import Nosotros from './pages/main/Nosotros/Nosotros';
import Contacto from './pages/main/Contacto/Contacto';

import DashboardLayout from './layouts/Dashboard/DashboardLayout';
import Dashboard from './pages/dashboard/Dashboard/Dashboard';
import Actividades from './pages/dashboard/Actividades/Actividades';
import ActividadesDetails from './pages/dashboard/Actividades/Details/ActividadesDetails';
import Socios from './pages/dashboard/Socios/Socios';
import SocioDetail from './pages/dashboard/Socios/Details/SocioDetail';
import Instructores from './pages/dashboard/Instructores/Instructores';
import Fotos from './pages/dashboard/Fotos/Fotos';
import Calendario from './pages/dashboard/Calendario/Calendario';
import Inventario from './pages/dashboard/Inventario/Inventario';
import Finanzas from './pages/dashboard/Finanzas/Finanzas';
import Semestre from './pages/dashboard/Semestre/Semestre';
import Accesos from './pages/dashboard/Accesos/Accesos';
import Logs from './pages/dashboard/Logs/Logs';


function App() {
  return (
    <Router>
      <Routes>
        {/* Routes with MainLayout */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Inicio />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
        </Route>

        {/* Routes with DashboardLayout */}
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/actividades" element={<Actividades />} />
          <Route path="/dashboard/actividades/:id" element={<ActividadesDetails />} />
          <Route path="/dashboard/socios" element={<Socios />} />
          <Route path="/dashboard/socios/:id" element={<SocioDetail />} />
          <Route path="/dashboard/instructores" element={<Instructores />} />
          <Route path="/dashboard/fotos" element={<Fotos />} />
          <Route path="/dashboard/calendario" element={<Calendario />} />
          <Route path="/dashboard/inventario" element={<Inventario />} />
          <Route path="/dashboard/finanzas" element={<Finanzas />} />
          <Route path="/dashboard/semestre" element={<Semestre />} />
          <Route path="/dashboard/accesos" element={<Accesos />} />
          <Route path="/dashboard/logs" element={<Logs />} />
        </Route>
      </Routes>
    </Router>

  );
}

export default App;
