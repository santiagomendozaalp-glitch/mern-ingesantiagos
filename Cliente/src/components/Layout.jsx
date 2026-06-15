import { Outlet, Link, useLocation } from 'react-router-dom';

function Layout() {
  const location = useLocation();

  // Función de ayuda para activar dinámicamente los estilos de los enlaces
  const getLinkStyle = (path, baseColor = '#64748b', activeColor = '#2563eb') => {
    const isActive = location.pathname === path;
    return {
      textDecoration: 'none',
      color: isActive ? activeColor : baseColor,
      fontWeight: isActive ? '700' : '500',
      padding: '8px 14px',
      borderRadius: '8px',
      backgroundColor: isActive ? '#eff6ff' : 'transparent',
      transition: 'all 0.2s ease',
      fontSize: '0.92rem'
    };
  };

  return (
    <div className="app-container" style={{ minHeight: '100vh', backgroundColor: '#f8fafc', fontFamily: 'system-ui, sans-serif' }}>
      
      {/* BARRA DE NAVEGACIÓN SUPERIOR PREMIUM */}
      <nav className="navbar-superior" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 30px',
        height: '70px',
        backgroundColor: '#ffffff',
        boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px -1px rgba(0, 0, 0, 0.05)',
        position: 'sticky',
        top: 0,
        zIndex: 1000
      }}>
        
        {/* LOGO DE INGEINFO */}
        <div className="navbar-brand" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span className="material-icons brand-icon" style={{ color: '#2563eb', fontSize: '1.8rem' }}>engineering</span>
          <span className="brand-text" style={{ fontSize: '1.4rem', fontWeight: '800', color: '#0f172a', letterSpacing: '-0.5px' }}>IngeInfo</span>
        </div>
        
        {/* ENLACES DIRECTOS A LAS CARRERAS MODERNIOS */}
        <div className="navbar-links" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <Link to="/" style={getLinkStyle('/', '#475569', '#0f172a')}>Inicio</Link>
          
          {/* Ingenierías */}
          <Link to="/ing-software" style={getLinkStyle('/ing-software', '#475569', '#2563eb')}>Software</Link>
          <Link to="/industrial" style={getLinkStyle('/industrial', '#475569', '#f59e0b')}>Industrial</Link>
          <Link to="/mecatronica" style={getLinkStyle('/mecatronica', '#475569', '#dc2626')}>Mecatrónica</Link>
          <Link to="/electrica" style={getLinkStyle('/electrica', '#475569', '#10b981')}>Eléctrica</Link>
          <Link to="/civil" style={getLinkStyle('/civil', '#475569', '#4f46e5')}>Civil</Link>
          <Link to="/quimica" style={getLinkStyle('/quimica', '#475569', '#0284c7')}>Química</Link>
          <Link to="/biomedica" style={getLinkStyle('/biomedica', '#475569', '#db2777')}>Biomédica</Link>

          {/* Separador visual */}
          <span className="menu-divider" style={{ color: '#cbd5e1', margin: '0 8px', userSelect: 'none' }}>|</span>

          {/* Licenciaturas */}
          <Link to="/ciencias-computacion" style={getLinkStyle('/ciencias-computacion', '#475569', '#7c3aed')}>LCC</Link>
          <Link to="/admin-energia" style={getLinkStyle('/admin-energia', '#475569', '#059669')}>LAE</Link>
        </div>

        {/* PERFIL DE USUARIO LOGUEADO */}
        <div className="navbar-user" style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '8px', 
          backgroundColor: '#f1f5f9', 
          padding: '6px 14px', 
          borderRadius: '20px',
          color: '#334155',
          fontSize: '0.88rem',
          fontWeight: '500'
        }}>
          <span className="material-icons" style={{ fontSize: '1.25rem', color: '#64748b' }}>account_circle</span>
          <span>estudiante@ingeinfo.com</span>
        </div>
      </nav>

      {/* CONTENEDOR PRINCIPAL DINÁMICO */}
      <main className="main-content" style={{ padding: '40px 20px', maxWidth: '1240px', margin: '0 auto' }}>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;