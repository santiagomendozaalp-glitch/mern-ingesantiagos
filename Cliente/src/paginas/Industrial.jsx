import { useState } from 'react';

function Industrial() {
  const [comentarios] = useState([
    { id: 1, nombre: 'Ing. Ricardo Treviño', fecha: '12 de junio, 2026', comentario: 'La cadena de suministro global se está reestructurando por completo en las plantas de Apodaca y Santa Catarina por el Nearshoring.', avatar: 'RT' },
    { id: 2, nombre: 'Mayra González (Egresada)', fecha: '14 de junio, 2026', comentario: 'Trabajo en el área de optimización en Ternium y la preparación en simulación de procesos que te dan es clave.', avatar: 'MG' }
  ]);

  // LÍNEA 9 CORREGIDA: Se añadió el cierre ]; al final de la lista
  const universidades = [
    "UANL - Facultad de Ingeniería Mecánica y Eléctrica (FIME) - San Nicolás",
    "Tec de Monterrey (ITESM) - Campus Monterrey",
    "Universidad de Monterrey (UDEM) - San Pedro",
    "Instituto Tecnológico de Nuevo León (ITNL) - Guadalupe"
  ];

  const empresas = [
    "Ternium México (Planta Guerrero y Universidad)",
    "Cemex (Corporativo Monterrey y Planta Concretos)",
    "Kia Motors México (Planta Pesquería)",
    "Carrier México (Parque Industrial Santa Catarina)",
    "Nemak (Operaciones de Aluminio Avanzado)",
    "Femsa Logística / Oxxo Corporativo"
  ];

  return (
    <div className="main-card" style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto', fontFamily: 'system-ui, sans-serif' }}>
      {/* HERO PREMIUM */}
      <div className="career-hero" style={{ 
        backgroundImage: 'linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(245, 158, 11, 0.85) 100%), url("https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80")',
        backgroundSize: 'cover', backgroundPosition: 'center', color: '#ffffff', padding: '60px 40px', borderRadius: '16px', marginBottom: '30px'
      }}>
        <span style={{ background: '#f59e0b', padding: '6px 14px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: '700', display: 'inline-block' }}>INGENIERÍA</span>
        <h1 style={{ fontSize: '3rem', marginTop: '10px', marginBottom: '10px', fontWeight: '800' }}>Ingeniería Industrial y de Sistemas</h1>
        <p style={{ maxWidth: '700px', fontSize: '1.15rem', opacity: '0.9', margin: 0, lineHeight: '1.6' }}>Lidera la excelencia operativa. Optimiza cadenas de suministro internacionales, implementa manufactura esbelta (Lean) y gestiona sistemas de calidad total.</p>
      </div>

      {/* DISEÑO DOS COLUMNAS */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '30px' }}>
        
        {/* COLUMNA IZQUIERDA */}
        <div>
          <section style={{ marginBottom: '35px' }}>
            <h2 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#0f172a', fontSize: '1.6rem', fontWeight: '700', borderBottom: '2px solid #f59e0b', paddingBottom: '8px' }}>
              <span className="material-icons" style={{ color: '#f59e0b' }}>precision_manufacturing</span> Perfil Ejecutivo y Áreas de Ejercicio
            </h2>
            <p style={{ lineHeight: '1.8', color: '#334155', fontSize: '1.05rem', marginTop: '15px' }}>
              El Ingeniero Industrial y de Sistemas es el arquitecto de la eficiencia corporativa. Combina metodologías matemáticas, simulación digital y administración estratégica para eliminar cuellos de botella y reducir costos operativos.
            </p>
          </section>

          {/* OPCIONES DE ESTUDIO (Aquí se usa la lista corregida) */}
          <section style={{ marginBottom: '35px' }}>
            <h3 style={{ color: '#1e293b', marginBottom: '15px', fontWeight: '600' }}>Dónde estudiar en Nuevo León</h3>
            <div style={{ background: '#f8fafc', padding: '20px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
              {universidades.map((uni, i) => (
                <div key={i} style={{ fontSize: '0.95rem', margin: '8px 0', color: '#334155' }}>🎓 {uni}</div>
              ))}
            </div>
          </section>

          {/* GALERÍA DE IMÁGENES PROFESIONALES */}
          <section style={{ marginBottom: '40px' }}>
            <h3 style={{ marginBottom: '15px', color: '#1e293b', fontWeight: '600' }}>Entornos Industriales y Logística Avanzada</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
              <div style={{ height: '220px', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
                <img src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=500&q=80" alt="Planta de manufactura" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ height: '220px', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
                <img src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=500&q=80" alt="Logística y distribución" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>
          </section>

          {/* COMENTARIOS */}
          <section>
            <h3 style={{ color: '#1e293b', marginBottom: '15px', fontWeight: '600' }}>Panel de Egresados y Comunidad</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              {comentarios.map((c) => (
                <div key={c.id} style={{ background: '#f8fafc', padding: '20px', borderRadius: '12px', display: 'flex', gap: '15px', border: '1px solid #e2e8f0' }}>
                  <div style={{ background: '#f59e0b', color: 'white', width: '45px', height: '45px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', flexShrink: 0 }}>{c.avatar}</div>
                  <div>
                    <div style={{ fontWeight: '600', color: '#0f172a' }}>{c.nombre} <span style={{ color: '#94a3b8', fontSize: '12px', fontWeight: '400', marginLeft: '10px' }}>{c.fecha}</span></div>
                    <p style={{ color: '#475569', fontSize: '0.95rem', marginTop: '6px', marginBottom: 0, lineHeight: '1.5' }}>{c.comentario}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* COLUMNA DERECHA INDICADORES */}
        <div>
          <div style={{ background: '#f8fafc', padding: '25px', borderRadius: '16px', border: '1px solid #e2e8f0', marginBottom: '25px' }}>
            <h4 style={{ margin: '0 0 15px 0', color: '#0f172a', fontWeight: '700', fontSize: '1.1rem' }}>Indicadores de Mercado</h4>
            <div style={{ marginBottom: '20px' }}>
              <span style={{ fontSize: '0.8rem', color: '#64748b', display: 'block', fontWeight: '600' }}>SUELDO PROMEDIO (NUEVO LEÓN)</span>
              <strong style={{ fontSize: '1.6rem', color: '#f59e0b' }}>$36,500 MXN / mes</strong>
            </div>
          </div>

          <div style={{ background: '#fffbeb', padding: '25px', borderRadius: '16px', border: '1px solid #fde68a', marginBottom: '25px' }}>
            <h4 style={{ margin: '0 0 15px 0', color: '#78350f', fontWeight: '700' }}>¿Dónde puedes trabajar?</h4>
            {empresas.map((emp, i) => (
              <div key={i} style={{ fontSize: '0.95rem', margin: '10px 0', color: '#78350f', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '500' }}>
                <span>🔹</span> {emp}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default Industrial;