import { useState } from 'react';

function CienciasComputacion() {
  const [comentarios] = useState([
    { id: 1, nombre: 'Gabriela Luna', fecha: '10 de junio, 2026', comentario: 'Es más matemática y teórica que desarrollo de software puro. Ideal si te apasionan los algoritmos pesados y la IA.', avatar: 'GL' },
    { id: 2, nombre: 'Andrés Villalobos', fecha: '13 de junio, 2026', comentario: 'Muy cotizada por empresas extranjeras si te especializas en seguridad o análisis matemático.', avatar: 'AV' }
  ]);

  const especialidades = [
    { titulo: 'Ciencia de Datos (Data Science)', descripcion: 'Extracción de conocimiento oculto en volúmenes masivos de datos para decisiones estratégicas.', icono: 'bar_chart' },
    { titulo: 'Ciberseguridad Avanzada', descripcion: 'Diseño de sistemas criptográficos impenetrables y análisis de vulnerabilidades críticas.', icono: 'shield' },
    { titulo: 'Computación Teórica', descripcion: 'Desarrollo de nuevos lenguajes, teoría de grafos y optimización matemática de algoritmos.', icono: 'functions' }
  ];

  return (
    <div className="main-card">
      <div className="career-hero" style={{ background: 'linear-gradient(135deg, #030712 0%, #4f46e5 100%)' }}>
        <h1>Lic. en Ciencias de la Computación</h1>
        <p>Domina los fundamentos matemáticos de los algoritmos, la inteligencia artificial y la computación cuántica.</p>
      </div>
      <div className="card-body-layout">
        <section className="info-grid-row">
          <div className="metric-box"><span className="material-icons">functions</span><h3>Demanda</h3><p>Muy Alta (Científica)</p></div>
          <div className="metric-box"><span className="material-icons">payments</span><h3>Sueldo Inicial</h3><p>$45,000 MXN</p></div>
          <div className="metric-box"><span className="material-icons">memory</span><h3>Enfoque</h3><p>Modelos y Datos</p></div>
        </section>
        
        <section className="page-section">
          <h2 className="section-title-premium"><span className="material-icons">calculate</span> El Motor Matemático del Código</h2>
          <p className="paragraph-text">A diferencia de la ingeniería de software ordinaria, la Licenciatura en Ciencias de la Computación se sumerge en las estructuras lógicas de la informática. Si te interesa resolver acertijos criptográficos o crear la lógica matemática detrás de un modelo de IA autónomo, este es tu sitio.</p>
        </section>
        
        <section className="page-section">
          <h2 className="section-title-premium"><span className="material-icons">insights</span> Ejes de Especialización</h2>
          <div className="inner-items-grid">
            {especialidades.map((e, i) => (
              <div key={i} className="sub-card">
                <span className="material-icons sub-card-icon" style={{ color: '#4f46e5' }}>{e.icono}</span>
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
export default CienciasComputacion;