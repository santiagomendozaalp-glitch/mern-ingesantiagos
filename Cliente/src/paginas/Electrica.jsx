import { useState } from 'react';

function Electrica() {
  const [comentarios] = useState([
    { id: 1, nombre: 'Ing. Jorge Luna (CFE)', fecha: '9 de junio, 2026', comentario: 'Con el boom de naves logísticas en Escobedo, el diseño de subestaciones tiene un trabajo imparable.', avatar: 'JL' }
  ]);

  const universities = [
    "UANL - Facultad de Ingeniería Mecánica y Eléctrica (FIME)",
    "Tec de Monterrey (ITESM)"
  ];

  const empresas = [
    "CFE (Comisión Federal de Electricidad)",
    "Iberdrola México",
    "Schneider Electric",
    "Prolec GE (Diseño de Transformadores Globales)",
    "Siemens Energy Monterrey"
  ];

  return (
    <div className="main-card" style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto', fontFamily: 'system-ui, sans-serif' }}>
      <div className="career-hero" style={{ 
        backgroundImage: 'linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(16, 185, 129, 0.85) 100%), url("https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80")',
        backgroundSize: 'cover', backgroundPosition: 'center', color: '#ffffff', padding: '60px 40px', borderRadius: '16px', marginBottom: '30px'
      }}>
        <span style={{ background: '#10b981', padding: '6px 14px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: '700', display: 'inline-block' }}>INGENIERÍA</span>
        <h1 style={{ fontSize: '3rem', marginTop: '10px', marginBottom: '10px', fontWeight: '800' }}>Ingeniería Eléctrica</h1>
        <p style={{ maxWidth: '700px', fontSize: '1.15rem', opacity: '0.9', margin: 0, lineHeight: '1.6' }}>Potencia y sustentabilidad. Diseña redes de transmisión nacional, sistemas de alta tensión y proyectos de generación renovable.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '30px' }}>
        <div>
          <section style={{ marginBottom: '35px' }}>
            <h2 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#0f172a', fontSize: '1.6rem', fontWeight: '700', borderBottom: '2px solid #10b981', paddingBottom: '8px', margin: '0 0 15px 0' }}>
              <span className="material-icons" style={{ color: '#10b981', verticalAlign: 'middle' }}>electric_bolt</span> Sistemas de Potencia
            </h2>
            <p style={{ lineHeight: '1.8', color: '#334155', fontSize: '1.05rem', margin: 0 }}>
              El Ingeniero Eléctrico se encarga de la planeación, simulación y operación segura de la infraestructura de energía para soportar los nuevos complejos fabriles del norte del país.
            </p>
          </section>

          <section style={{ marginBottom: '35px' }}>
            <h3 style={{ color: '#1e293b', fontWeight: '600', margin: '0 0 15px 0' }}>Oferta Académica</h3>
            <div style={{ background: '#f8fafc', padding: '20px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
              {universities.map((uni, i) => (
                <div key={i} style={{ fontSize: '0.95rem', margin: '8px 0', color: '#334155' }}>🎓 {uni}</div>
              ))}
            </div>
          </section>

          <section>
            <h3 style={{ color: '#1e293b', fontWeight: '600', margin: '0 0 15px 0' }}>Comunidad de Egresados</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              {comentarios.map((c) => (
                <div key={c.id} style={{ background: '#f8fafc', padding: '20px', borderRadius: '12px', display: 'flex', gap: '15px', border: '1px solid #e2e8f0' }}>
                  <div style={{ background: '#10b981', color: 'white', width: '45px', height: '45px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', flexShrink: 0, textAlign: 'center' }}>{c.avatar}</div>
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
            <h4 style={{ margin: '0 0 15px 0', color: '#0f172a', fontWeight: '700' }}>Sueldo Bruto</h4>
            <strong style={{ fontSize: '1.4rem', color: '#10b981' }}>$35,800 MXN / mes</strong>
          </div>

          <div style={{ background: '#ecfdf5', padding: '25px', borderRadius: '16px', border: '1px solid #a7f3d0', marginBottom: '25px' }}>
            <h4 style={{ margin: '0 0 15px 0', color: '#047857', fontWeight: '700' }}>Corporativos</h4>
            {empresas.map((emp, i) => (
              <div key={i} style={{ fontSize: '0.95rem', margin: '10px 0', color: '#047857' }}>⚡ {emp}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Electrica;