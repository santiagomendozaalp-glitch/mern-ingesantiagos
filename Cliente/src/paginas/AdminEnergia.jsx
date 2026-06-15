import { useState } from 'react';

function AdminEnergia() {
  const [comentarios] = useState([
    { id: 1, nombre: 'Fernando Garza', fecha: '5 de junio, 2026', comentario: 'Con el mercado eléctrico abierto, las consultoras ocupan analistas financieros que entiendan de energía.', avatar: 'FG' },
    { id: 2, nombre: 'Mónica Salazar', fecha: '11 de junio, 2026', comentario: 'Mucho enfoque en sustentabilidad y regulaciones internacionales. Excelente carrera híbrida.', avatar: 'MS' }
  ]);

  const especialidades = [
    { titulo: 'Mercados Eléctricos', descripcion: 'Trading de energía, comercialización y análisis regulatorio del sector.', icono: 'show_chart' },
    { titulo: 'Sustentabilidad', descripcion: 'Modelación económica de proyectos de inversión en infraestructura limpia.', icono: 'compost' },
    { titulo: 'Derecho Energético', descripcion: 'Gestión de contratos internacionales, auditorías de cumplimiento y normatividades.', icono: 'gavel' }
  ];

  return (
    <div className="main-card">
      <div className="career-hero" style={{ background: 'linear-gradient(135deg, #111827 0%, #ea580c 100%)' }}>
        <h1>Lic. en Administración de Energía</h1>
        <p>Lidera los negocios globales de la energía, la transición energética sustentable y la gestión de recursos renovables.</p>
      </div>
      <div className="card-body-layout">
        <section className="info-grid-row">
          <div className="metric-box"><span className="material-icons">leaderboard</span><h3>Demanda</h3><p>Estratégica / Comercial</p></div>
          <div className="metric-box"><span className="material-icons">payments</span><h3>Sueldo Inicial</h3><p>$33,000 MXN</p></div>
          <div className="metric-box"><span className="material-icons">eco</span><h3>Enfoque</h3><p>Estrategia y Negocio</p></div>
        </section>
        
        <section className="page-section">
          <h2 className="section-title-premium"><span className="material-icons">pie_chart</span> El Negocio detrás del Voltaje y el Petróleo</h2>
          <p className="paragraph-text">Esta licenciatura une el mundo corporativo con la ingeniería. Prepara expertos capaces de tomar decisiones comerciales, legales y operativas sobre proyectos de generación eléctrica, parques eólicos y redes de hidrocarburos.</p>
        </section>
        
        <section className="page-section">
          <h2 className="section-title-premium"><span className="material-icons">assignment_turned_in</span> Pilares Corporativos</h2>
          <div className="inner-items-grid">
            {especialidades.map((e, i) => (
              <div key={i} className="sub-card">
                <span className="material-icons sub-card-icon" style={{ color: '#ea580c' }}>{e.icono}</span>
                <h4>{e.titulo}</h4><p>{e.descripcion}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SECCIÓN DE COMENTARIOS AGREGADA */}
        <section className="page-section">
          <h2 className="section-title-premium"><span className="material-icons">forum</span> Comentarios y Opiniones</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            {comentarios.map((c) => (
              <div key={c.id} className="comment-row-card">
                <div className="avatar-circle">{c.avatar}</div>
                <div>
                  <div style={{ marginBottom: '4px' }}>
                    <strong>{c.nombre}</strong> <span style={{ color: '#94a3b8', fontSize: '12px', marginLeft: '10px' }}>{c.fecha}</span>
                  </div>
                  <p style={{ color: '#475569', fontSize: '14px' }}>{c.comentario}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
export default AdminEnergia;