import { useState } from 'react';

function Software() {
  const [comentarios] = useState([
    { id: 1, nombre: 'Ing. Carlos Cavazos', fecha: '14 de junio, 2026', comentario: 'El mercado de desarrollo Cloud (AWS/Azure) y Arquitectura de Software está explotando en Monterrey por la llegada de centros de datos globales.', avatar: 'CC' }
  ]);

  const universidades = [
    "UANL - Facultad de Ingeniería Mecánica y Eléctrica (FIME) - San Nicolás",
    "Tec de Monterrey (ITESM) - Campus Monterrey",
    "Universidad de Monterrey (UDEM) - San Pedro"
  ];

  const empresas = [
    "Softtek (Sede Corporativa Global Monterrey)",
    "Neoris México",
    "Mercado Libre México (Centro de Desarrollo)",
    "Tata Consultancy Services (TCS)",
    "Accenture México",
    "Femsa Digital"
  ];

  return (
    <div className="main-card" style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto', fontFamily: 'system-ui, sans-serif' }}>
      <div className="career-hero" style={{ 
        backgroundImage: 'linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(14, 165, 233, 0.85) 100%), url("https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80")',
        backgroundSize: 'cover', backgroundPosition: 'center', color: '#ffffff', padding: '60px 40px', borderRadius: '16px', marginBottom: '30px'
      }}>
        <span style={{ background: '#0ea5e9', padding: '6px 14px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: '700', display: 'inline-block' }}>INGENIERÍA</span>
        <h1 style={{ fontSize: '3rem', marginTop: '10px', marginBottom: '10px', fontWeight: '800' }}>Ingeniería en Software</h1>
        <p style={{ maxWidth: '700px', fontSize: '1.15rem', opacity: '0.9', margin: 0, lineHeight: '1.6' }}>Crea el futuro digital. Diseña aplicaciones escalables, arquitectura de sistemas en la nube, plataformas web de alta disponibilidad e inteligencia artificial aplicada.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '30px' }}>
        <div>
          <section style={{ marginBottom: '35px' }}>
            <h2 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#0f172a', fontSize: '1.6rem', fontWeight: '700', borderBottom: '2px solid #0ea5e9', paddingBottom: '8px', margin: '0 0 15px 0' }}>
              <span className="material-icons" style={{ color: '#0ea5e9', verticalAlign: 'middle' }}>code</span> Construcción de Sistemas y Soluciones Digitales
            </h2>
            <p style={{ lineHeight: '1.8', color: '#334155', fontSize: '1.05rem', margin: 0 }}>
              El Ingeniero en Software domina el ciclo de vida completo del desarrollo de sistemas informáticos, aplicando patrones de diseño, metodologías ágiles y asegurando la ciberseguridad en infraestructuras críticas corporativas.
            </p>
          </section>

          <section style={{ marginBottom: '35px' }}>
            <h3 style={{ color: '#1e293b', fontWeight: '600', margin: '0 0 15px 0' }}>Instituciones Académicas</h3>
            <div style={{ background: '#f8fafc', padding: '20px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
              {universidades.map((uni, i) => (
                <div key={i} style={{ fontSize: '0.95rem', margin: '8px 0', color: '#334155' }}>🎓 {uni}</div>
              ))}
            </div>
          </section>

          <section>
            <h3 style={{ color: '#1e293b', fontWeight: '600', margin: '0 0 15px 0' }}>Comunidad de Desarrolladores</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              {comentarios.map((c) => (
                <div key={c.id} style={{ background: '#f8fafc', padding: '20px', borderRadius: '12px', display: 'flex', gap: '15px', border: '1px solid #e2e8f0' }}>
                  <div style={{ background: '#0ea5e9', color: 'white', width: '45px', height: '45px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', flexShrink: 0, textAlign: 'center' }}>{c.avatar}</div>
                  <div>
                    <div style={{ fontWeight: '600', color: '#0f172a' }}>{c.nombre} <span style={{ color: '#94a3b8', fontSize: '12px', fontWeight: '400', marginLeft: '10px' }}>{c.fecha}</span></div>
                    <p style={{ color: '#475569', fontSize: '0.95rem', marginTop: '6px', marginBottom: 0, lineHeight: '1.5' }}>{c.comentario}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div>
          <div style={{ background: '#f8fafc', padding: '25px', borderRadius: '16px', border: '1px solid #e2e8f0', marginBottom: '25px' }}>
            <h4 style={{ margin: '0 0 15px 0', color: '#0f172a', fontWeight: '700' }}>Sueldo Promedio Inicial</h4>
            <strong style={{ fontSize: '1.4rem', color: '#0ea5e9' }}>$45,000 MXN / mes</strong>
          </div>

          <div style={{ background: '#f0f9ff', padding: '25px', borderRadius: '16px', border: '1px solid #bae6fd', marginBottom: '25px' }}>
            <h4 style={{ margin: '0 0 15px 0', color: '#0369a1', fontWeight: '700' }}>Tech Hubs & Empresas</h4>
            {empresas.map((emp, i) => (
              <div key={i} style={{ fontSize: '0.95rem', margin: '10px 0', color: '#0369a1' }}>💻 {emp}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Software;