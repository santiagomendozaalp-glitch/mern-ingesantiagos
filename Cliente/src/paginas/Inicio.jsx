function Inicio() {
  return (
    <div className="main-card">
      <div className="career-hero" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #0284c7 100%)' }}>
        <h1>Forja el Futuro de la Tecnología</h1>
        <p>Descubre las ramas de la ingeniería mejor pagadas, sus campos de aplicación y conecta con la realidad industrial en un solo clic.</p>
      </div>

      <div className="card-body-layout">
        <section className="info-grid-row">
          <div className="metric-box">
            <span className="material-icons">analytics</span>
            <h3>Egresados Activos</h3>
            <p>+12,500 en NL</p>
          </div>
          <div className="metric-box">
            <span className="material-icons">workspace_premium</span>
            <h3>Bolsa de Trabajo</h3>
            <p>94% de Empleabilidad</p>
          </div>
          <div className="metric-box">
            <span className="material-icons">monetization_on</span>
            <h3>Salario Promedio</h3>
            <p>$35,000 - $80,000 MXN</p>
          </div>
        </section>

        <div className="grid-dos-columnas">
          <div>
            <section className="page-section">
              <h2 className="section-title-premium">
                <span className="material-icons">rocket_launch</span> El Ecosistema de los Constructores del Mañana
              </h2>
              <p className="paragraph-text">
                Bienvenido a <strong>IngeInfo v2.0</strong>, el hub interactivo diseñado para estudiantes y profesionales apasionados por la innovación técnica. Las ingenierías ya no se estudian de forma aislada; hoy en día, los proyectos más ambiciosos del mundo requieren la convergencia de la automatización, el código, las estructuras civiles y la optimización de procesos.
              </p>
              <p className="paragraph-text">
                Nuestra plataforma te ofrece una radiografía detallada de las disciplinas clave en el estado de Nuevo León. Explora los planes de estudio, analiza las demandas reales del mercado laboral, descubre las mejores universidades y lee las experiencias directas de ingenieros que ya lideran proyectos en la industria global.
              </p>
            </section>
          </div>

          <div className="widget-panel">
            <h3 style={{ fontSize: '1.1rem', marginBottom: '16px', fontWeight: '700' }}>¿Cómo usar este Hub?</h3>
            <div className="widget-item">
              <div className="widget-number">1</div>
              <p style={{ fontSize: '14px', color: '#475569' }}><strong>Navega:</strong> Selecciona una carrera en la barra superior para ver sus especialidades.</p>
            </div>
            <div className="widget-item">
              <div className="widget-number">2</div>
              <p style={{ fontSize: '14px', color: '#475569' }}><strong>Analiza:</strong> Revisa el termómetro de demanda laboral y los salarios antes de tomar una decisión.</p>
            </div>
            <div className="widget-item">
              <div className="widget-number">3</div>
              <p style={{ fontSize: '14px', color: '#475569' }}><strong>Interactúa:</strong> Lee las reseñas en la sección de comentarios al final de cada carrera.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inicio;