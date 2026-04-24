import { useState } from 'react';
import type { SVGProps } from 'react';
import './Clientes.css';

const EditIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>
);

const TrashIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>
);

const XIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
);

const UserPlusIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" x2="19" y1="8" y2="14"/><line x1="22" x2="16" y1="11" y2="11"/></svg>
);

const InfoIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
);

const MailIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg className="input-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
);

const PhoneIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg className="input-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
);

const BuildingIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg className="input-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>
);

export const Clientes = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="w-full relative">
      <div className="page-header flex justify-between items-start">
        <div>
          <div className="breadcrumbs">
            <span>Panel Principal</span>
            <span className="separator">›</span>
            <span className="current">Clientes</span>
          </div>
          <h1 className="page-title">Gestión de Clientes</h1>
          <p className="text-gray-500 text-xs mt-1">Administra tu base de datos de clientes, saldos y contactos.</p>
        </div>
        <button className="btn-blue flex items-center gap-2" onClick={() => setIsModalOpen(true)}>
          <UserPlusIcon /> Nuevo Cliente
        </button>
      </div>

      <div className="clientes-grid">
        <div className="section-card" style={{ padding: '20px' }}>
          <div className="card-label">Total Clientes</div>
          <div className="card-value">1,284 <span className="text-green-600 font-bold" style={{ color: '#059669', fontSize: '12px' }}>+4.2%</span></div>
        </div>
        <div className="section-card" style={{ padding: '20px' }}>
          <div className="card-label">Clientes Activos</div>
          <div className="card-value">1,150</div>
        </div>
        <div className="section-card" style={{ padding: '20px' }}>
          <div className="card-label">Cartera Pendiente</div>
          <div className="card-value">$12,450,000 <span style={{ fontSize: '11px' }}>COP</span></div>
        </div>
        <div className="section-card" style={{ padding: '20px' }}>
          <div className="card-label">Nuevos (Mes)</div>
          <div className="card-value">42</div>
        </div>
      </div>

      <div className="section-card">
        <table>
          <thead>
            <tr>
              <th>NOMBRE</th>
              <th>EMAIL</th>
              <th>TELÉFONO</th>
              <th>SALDO (COP)</th>
              <th style={{ textAlign: 'right' }}>ACCIONES</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="flex items-center gap-3">
                  <div className="cliente-avatar avatar-blue">AC</div>
                  <div>
                    <div className="font-bold text-sm">Alimentos del Caribe S.A.S</div>
                    <div className="text-xs text-gray-500">NIT: 900.456.789-1</div>
                  </div>
                </div>
              </td>
              <td>compras@alimentoscaribe.com</td>
              <td>+57 (601) 456-7890</td>
              <td className="font-bold text-green-600" style={{ color: '#059669' }}>$0</td>
              <td style={{ textAlign: 'right' }}>
                <EditIcon className="btn-ghost" />
                <TrashIcon className="btn-ghost" style={{ marginLeft: '12px' }} />
              </td>
            </tr>
            <tr>
              <td>
                <div className="flex items-center gap-3">
                  <div className="cliente-avatar avatar-purple">JR</div>
                  <div>
                    <div className="font-bold text-sm">Juan Rodriguez Castro</div>
                    <div className="text-xs text-gray-500">C.C. 1.023.445.667</div>
                  </div>
                </div>
              </td>
              <td>juan.rodriguez@gmail.com</td>
              <td>+57 310 455 6677</td>
              <td className="font-bold text-red-500" style={{ color: '#ef4444' }}>-$1,240,000</td>
              <td style={{ textAlign: 'right' }}>
                <EditIcon className="btn-ghost" />
                <TrashIcon className="btn-ghost" style={{ marginLeft: '12px' }} />
              </td>
            </tr>
            <tr>
              <td>
                <div className="flex items-center gap-3">
                  <div className="cliente-avatar avatar-orange">TE</div>
                  <div>
                    <div className="font-bold text-sm">TecnoEquipos de Colombia</div>
                    <div className="text-xs text-gray-500">NIT: 830.112.445-8</div>
                  </div>
                </div>
              </td>
              <td>info@tecnoequipos.co</td>
              <td>+57 (602) 334-5566</td>
              <td className="font-bold text-orange-500" style={{ color: '#ea580c' }}>-$450,200</td>
              <td style={{ textAlign: 'right' }}>
                <EditIcon className="btn-ghost" />
                <TrashIcon className="btn-ghost" style={{ marginLeft: '12px' }} />
              </td>
            </tr>
            <tr>
              <td>
                <div className="flex items-center gap-3">
                  <div className="cliente-avatar avatar-green">LP</div>
                  <div>
                    <div className="font-bold text-sm">Logística del Pacifico</div>
                    <div className="text-xs text-gray-500">NIT: 901.002.334-0</div>
                  </div>
                </div>
              </td>
              <td>gerencia@logisticapacifico.com</td>
              <td>+57 321 889 0011</td>
              <td className="font-bold text-green-600" style={{ color: '#059669' }}>$0</td>
              <td style={{ textAlign: 'right' }}>
                <EditIcon className="btn-ghost" />
                <TrashIcon className="btn-ghost" style={{ marginLeft: '12px' }} />
              </td>
            </tr>
          </tbody>
        </table>

        <div className="pagination">
          <div className="pagination-info">Mostrando 1 a 4 de 1,284 clientes</div>
          <div className="pagination-controls">
            <button className="page-btn">‹</button>
            <button className="page-btn active">1</button>
            <button className="page-btn">2</button>
            <button className="page-btn">3</button>
            <span className="text-gray-500" style={{ margin: '0 4px' }}>...</span>
            <button className="page-btn">32</button>
            <button className="page-btn">›</button>
          </div>
        </div>
      </div>

      <div className="bottom-actions">
        <div className="export-card">
          <h3 className="section-title">Exportar Reportes</h3>
          <p className="section-subtitle">Genera un archivo Excel o PDF con el listado detallado de tus clientes y sus estados de cuenta actuales.</p>
          <div className="export-buttons">
            <button className="btn-outline">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="M8 13h2"/><path d="M8 17h2"/><path d="M14 13h2"/><path d="M14 17h2"/></svg>
              Excel
            </button>
            <button className="btn-outline">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="M10 12v6"/><path d="M14 12v6"/><path d="M10 12l2-2 2 2"/></svg>
              PDF
            </button>
          </div>
          <div style={{ position: 'absolute', right: '-20px', bottom: '-20px', opacity: 0.05 }}>
            <svg width="150" height="150" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
          </div>
        </div>

        <div className="import-card">
          <h3 className="import-card-title">Importación Masiva</h3>
          <p className="import-card-subtitle">¿Tienes muchos clientes? Cárgalos todos a la vez usando nuestra plantilla estandarizada de importación.</p>
          <button className="btn-upload">SUBIR ARCHIVO .CSV</button>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <div className="modal-title-wrapper">
                <div className="modal-icon">
                  <UserPlusIcon />
                </div>
                <div>
                  <h2 className="modal-title">Nuevo Cliente</h2>
                  <p className="modal-subtitle">Completa la información para dar de alta en el sistema.</p>
                </div>
              </div>
              <button className="btn-close" onClick={() => setIsModalOpen(false)}>
                <XIcon />
              </button>
            </div>

            <form className="modal-form" onSubmit={(e) => { e.preventDefault(); setIsModalOpen(false); }}>
              <div className="form-group">
                <label className="form-label" style={{ marginBottom: '8px', display: 'block' }}>NOMBRE COMPLETO O RAZÓN SOCIAL</label>
                <div className="input-wrapper">
                  <BuildingIcon />
                  <input type="text" className="input-field" placeholder="Ej: Juan Pérez o Empresa SAS" />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label" style={{ marginBottom: '8px', display: 'block' }}>CORREO ELECTRÓNICO</label>
                  <div className="input-wrapper">
                    <MailIcon />
                    <input type="email" className="input-field" placeholder="correo@ejemplo.com" />
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label" style={{ marginBottom: '8px', display: 'block' }}>TELÉFONO DE CONTACTO</label>
                  <div className="input-wrapper">
                    <PhoneIcon />
                    <input type="tel" className="input-field" placeholder="+57 300 000 0000" />
                  </div>
                </div>
              </div>

              <div className="info-box">
                <InfoIcon style={{ flexShrink: 0, marginTop: '2px', color: '#1e3a8a' }} />
                <p className="info-text">
                  Al guardar, el cliente será registrado con un saldo inicial de 0.00 COP. Podrás asignar facturas y límites de crédito desde su perfil.
                </p>
              </div>

              <div className="modal-footer">
                <button type="button" className="btn-secondary" onClick={() => setIsModalOpen(false)}>Cancelar</button>
                <button type="submit" className="btn-blue">Guardar Cliente</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
