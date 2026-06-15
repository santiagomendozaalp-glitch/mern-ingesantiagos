import { useState } from 'react';

function Quimica() {
  const [comentarios] = useState([
    { id: 1, nombre: 'Dra. Elena Ríos', fecha: '10 de junio, 2026', comentario: 'El sector petroquímico y el tratamiento de aguas industriales por regulaciones ambientales está demandando muchos ingenieros de procesos.', avatar: 'ER' }
  ]);

  const universidades = [
    "UANL - Facultad de Ciencias Químicas (FCQ) - San Nicolás",
    "Tec de Monterrey (ITESM)"
  ];

  const empresas = [
    "Sigma Alimentos",
    "Alpek (Petroquímica de Alfa)",
    "Ternium (Procesos Químicos de Reducción)",
    "Heineken México",
    "Vitro (Industria del Vidrio de Alta Resistencia)"
  ];

  return (
    <div className="main-card" style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto', fontFamily: 'system-ui, sans-serif' }}>
      <div className="career-hero" style={{ 
        backgroundImage: 'linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(2, 132, 199, 0.85) 100%), url("https://images.unsplash.com/photo-1532187643603-ba119ca4109e?auto=format&fit=crop&w=1200&q=80")',
        backgroundSize: 'cover', backgroundPosition: 'center', color: '#ffffff', padding: '60px 40px', borderRadius: '16px', marginBottom: '30px'
      }}>
        <span style={{ background: '#0284c7', padding: '6px 14px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: '700', display: 'inline-block' }}>INGENIERÍA</span>
        <h1 style={{ fontSize: '3rem', marginTop: '10px', marginBottom: '10px', fontWeight: '800' }}>Ingeniería Química</h1>
        <p style={{ maxWidth: '700px', fontSize: '1.15rem', opacity: '0.9', margin: 0, lineHeight: '1.6' }}>Transformación de la materia. Diseña reactores a gran escala, optimiza refinación de materiales, bioprocesos y sustentabilidad química.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '30px' }}>
        <div>
          <section style={{ marginBottom: '35px' }}>
            <h2 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#0f172a', fontSize: '1.6rem', fontWeight: '700', borderBottom: '2px solid #0284c7', paddingBottom: '8px', margin: '0 0 15px 0' }}>
              <span className="material-icons" style={{ color: '#0284c7', verticalAlign: 'middle' }}>science</span> Ingeniería de Procesos y Manufactura Química
            </h2>
            <p style={{ lineHeight: '1.8', color: '#334155', fontSize: '1.05rem', margin: 0 }}>
              El Ingeniero Químico opera plantas de producción continua, transformando materias primas en productos de alto valor como polímeros, alimentos procesados, aleaciones metálicas y soluciones ecológicas.
            </p>
          </section>

          <section style={{ marginBottom: '35px' }}>
            <h3 style={{ color: '#1e293b', fontWeight: '600', margin: '0 0 15px 0' }}>Dónde Estudiar</h3>
            <div style={{ background: '#f8fafc', padding: '20px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
              {universidades.map((uni, i) => (
                <div key={i} style={{ fontSize: '0.95rem', margin: '8px 0', color: '#334155' }}>🎓 {uni}</div>
              ))}
            </div>
          </section>

          <section>
            <h3 style={{ color: '#1e293b', fontWeight: '600', margin: '0 0 15px 0' }}>Panel de Expertos</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              {comentarios.map((c) => (
                <div key={c.id} style={{ background: '#f8fafc', padding: '20px', borderRadius: '12px', display: 'flex', gap: '15px', border: '1px solid #e2e8f0' }}>
                  <div style={{ background: '#0284c7', color: 'white', width: '45px', height: '45px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', flexShrink: 0, textAlign: 'center' }}>{c.avatar}</div>
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
            <h4 style={{ margin: '0 0 15px 0', color: '#0f172a', fontWeight: '700' }}>Ingresos Medios</h4>
            <strong style={{ fontSize: '1.4rem', color: '#0284c7' }}>$38,200 MXN / mes</strong>
          </div>

          <div style={{ background: '#e0f2fe', padding: '25px', borderRadius: '16px', border: '1px solid #bae6fd', marginBottom: '25px' }}>
            <h4 style={{ margin: '0 0 15px 0', color: '#0369a1', fontWeight: '700' }}>Sectores Clave</h4>
            {empresas.map((emp, i) => (
              <div key={i} style={{ fontSize: '0.95rem', margin: '10px 0', color: '#0369a1' }}>🧪 {emp}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Quimica;