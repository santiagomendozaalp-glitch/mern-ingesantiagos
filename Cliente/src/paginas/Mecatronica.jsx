import { useState } from 'react';

function Mecatronica() {
  const [comentarios] = useState([
    { id: 1, nombre: 'Ing. Héctor Guerra', fecha: '11 de junio, 2026', comentario: 'La programación de brazos robóticos KUKA y sistemas embebidos automotrices está pagando excelente debido a las nuevas armadoras.', avatar: 'HG' },
    { id: 2, nombre: 'Alan Espinoza', fecha: '13 de junio, 2026', comentario: 'Los laboratorios de control numérico y PLC te abren las puertas directo en empresas transnacionales.', avatar: 'AE' }
  ]);

  const universidades = [
    "UANL - Facultad de Ingeniería Mecánica y Eléctrica (FIME) - San Nicolás",
    "Tec de Monterrey (ITESM) - Campus Monterrey",
    "Universidad de Monterrey (UDEM) - San Pedro"
  ];

  const empresas = [
    "Caterpillar México (Plantas Monterrey y Santa Catarina)",
    "John Deere México (Componentes y Ensambles)",
    "Siemens Energy (Planta Santa Catarina)",
    "ABB México (Automatización y Robótica)",
    "Schneider Electric (Monterrey Smart Factory)",
    "Tesla Mexico Innovation Hub"
  ];

  return (
    <div className="main-card" style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto', fontFamily: 'system-ui, sans-serif' }}>
      <div className="career-hero" style={{ 
        backgroundImage: 'linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(220, 38, 38, 0.85) 100%), url("https://images.unsplash.com/photo-1537462715879-360eeb61a0bc?auto=format&fit=crop&w=1200&q=80")',
        backgroundSize: 'cover', backgroundPosition: 'center', color: '#ffffff', padding: '60px 40px', borderRadius: '16px', marginBottom: '30px'
      }}>
        <span style={{ background: '#dc2626', padding: '6px 14px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: '700', display: 'inline-block' }}>INGENIERÍA</span>
        <h1 style={{ fontSize: '3rem', marginTop: '10px', marginBottom: '10px', fontWeight: '800' }}>Ingeniería Mecatrónica</h1>
        <p style={{ maxWidth: '700px', fontSize: '1.15rem', opacity: '0.9', margin: 0, lineHeight: '1.6' }}>Sinergia perfecta de tecnología. Diseña sistemas autónomos, automatización de manufactura inteligente, robótica industrial y sistemas embebidos.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '30px' }}>
        <div>
          <section style={{ marginBottom: '35px' }}>
            <h2 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#0f172a', fontSize: '1.6rem', fontWeight: '700', borderBottom: '2px solid #dc2626', paddingBottom: '8px', margin: '0 0 15px 0' }}>
              <span className="material-icons" style={{ color: '#dc2626', verticalAlign: 'middle' }}>smart_toy</span> Innovación Mecánica, Electrónica y de Software
            </h2>
            <p style={{ lineHeight: '1.8', color: '#334155', fontSize: '1.05rem', margin: 0 }}>
              El Ingeniero Mecatrónico integra tecnologías mecánicas y electrónicas para concebir procesos automatizados de vanguardia para la transición hacia la Industria 4.0.
            </p>
          </section>

          <section style={{ marginBottom: '35px' }}>
            <h3 style={{ color: '#1e293b', marginBottom: '15px', fontWeight: '600', margin: '0 0 15px 0' }}>Planteles en el Estado</h3>
            <div style={{ background: '#f8fafc', padding: '20px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
              {universidades.map((uni, i) => (
                <div key={i} style={{ fontSize: '0.95rem', margin: '8px 0', color: '#334155' }}>🎓 {uni}</div>
              ))}
            </div>
          </section>

          <section style={{ marginBottom: '40px' }}>
            <h3 style={{ color: '#1e293b', fontWeight: '600', margin: '0 0 15px 0' }}>Células de Manufactura</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
              <div style={{ height: '220px', borderRadius: '12px', overflow: 'hidden' }}>
                <img src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=500&q=80" alt="Robótica" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ height: '220px', borderRadius: '12px', overflow: 'hidden' }}>
                <img src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=500&q=80" alt="Automatización" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>
          </section>

          <section>
            <h3 style={{ color: '#1e293b', fontWeight: '600', margin: '0 0 15px 0' }}>Opiniones del Sector Industrial</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              {comentarios.map((c) => (
                <div key={c.id} style={{ background: '#f8fafc', padding: '20px', borderRadius: '12px', display: 'flex', gap: '15px', border: '1px solid #e2e8f0' }}>
                  <div style={{ background: '#dc2626', color: 'white', width: '45px', height: '45px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', flexShrink: 0, textAlign: 'center' }}>{c.avatar}</div>
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
            <h4 style={{ margin: '0 0 15px 0', color: '#0f172a', fontWeight: '700' }}>Indicadores</h4>
            <span style={{ fontSize: '0.8rem', color: '#64748b', display: 'block' }}>SUELDO PROMEDIO INICIAL</span>
            <strong style={{ fontSize: '1.4rem', color: '#dc2626' }}>$41,200 MXN / mes</strong>
          </div>

          <div style={{ background: '#fef2f2', padding: '25px', borderRadius: '16px', border: '1px solid #fca5a5', marginBottom: '25px' }}>
            <h4 style={{ margin: '0 0 15px 0', color: '#991b1b', fontWeight: '700' }}>Empresas de Destino</h4>
            {empresas.map((emp, i) => (
              <div key={i} style={{ fontSize: '0.95rem', margin: '10px 0', color: '#991b1b' }}>🤖 {emp}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Mecatronica;