import type { SVGProps } from 'react';
import './Dashboard.css';

const ChevronDownIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m6 9 6 6 6-6"/></svg>
);

const MoreVerticalIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>
);

export const Dashboard = () => {
  return (
    <div className="w-full">
      <div className="page-header">
        <div className="breadcrumbs">
          <span>Inicio</span>
          <span className="separator">›</span>
          <span className="current">Panel Principal</span>
        </div>
      </div>

      <div className="summary-cards">
        <div className="summary-card">
          <div className="card-badge badge-green">+12.5%</div>
          <div className="card-icon blue">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>
          </div>
          <div className="card-label">TOTAL VENTAS (MENSUAL)</div>
          <div className="card-value">$45,200.000 <span>COP</span></div>
        </div>

        <div className="summary-card">
          <div className="card-badge badge-green">+34</div>
          <div className="card-icon purple">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
          </div>
          <div className="card-label">TOTAL CLIENTES</div>
          <div className="card-value">1,284</div>
        </div>

        <div className="summary-card">
          <div className="card-badge badge-gray">Sin cambio</div>
          <div className="card-icon orange">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>
          </div>
          <div className="card-label">TOTAL PRODUCTOS</div>
          <div className="card-value">856</div>
        </div>
      </div>

      <div className="dashboard-grid">
        <div className="section-card">
          <div className="section-header">
            <div>
              <h2 className="section-title">Rendimiento Comercial</h2>
              <p className="section-subtitle">Crecimiento de ventas proyectado vs real 2024</p>
            </div>
            <div className="chart-tabs">
              <div className="chart-tab">SEMANAL</div>
              <div className="chart-tab active">MENSUAL</div>
            </div>
          </div>
          
          <div className="mock-chart">
            <div className="chart-col">
              <div className="chart-bar" style={{ height: '30%' }}></div>
              <div className="chart-label">ENE</div>
            </div>
            <div className="chart-col">
              <div className="chart-bar" style={{ height: '45%' }}></div>
              <div className="chart-label">FEB</div>
            </div>
            <div className="chart-col">
              <div className="chart-bar" style={{ height: '20%' }}></div>
              <div className="chart-label">MAR</div>
            </div>
            <div className="chart-col">
              <div className="chart-bar" style={{ height: '60%' }}></div>
              <div className="chart-label">ABR</div>
            </div>
            <div className="chart-col">
              <div className="chart-bar" style={{ height: '50%' }}></div>
              <div className="chart-label">MAY</div>
            </div>
            <div className="chart-col relative">
              <div style={{ position: 'absolute', top: '-25px', left: '50%', transform: 'translateX(-50%)', background: '#0b57d0', color: 'white', fontSize: '9px', padding: '2px 6px', borderRadius: '4px' }}>Actual</div>
              <div className="chart-bar active" style={{ height: '90%' }}></div>
              <div className="chart-label active">JUN</div>
            </div>
            <div className="chart-col">
              <div className="chart-bar" style={{ height: '40%' }}></div>
              <div className="chart-label">JUL</div>
            </div>
            <div className="chart-col">
              <div className="chart-bar" style={{ height: '70%' }}></div>
              <div className="chart-label">AGO</div>
            </div>
            <div className="chart-col">
              <div className="chart-bar" style={{ height: '80%' }}></div>
              <div className="chart-label">SEP</div>
            </div>
          </div>
        </div>

        <div className="section-card">
          <h2 className="section-title" style={{ marginBottom: '24px' }}>Clientes Destacados</h2>
          
          <div className="client-list">
            <div className="client-item">
              <div className="client-info">
                <img src="https://ui-avatars.com/api/?name=Construcciones+Medellin&background=random" className="client-avatar" alt="CM" />
                <div>
                  <div className="client-name">Construcciones Medellin SAS</div>
                  <div className="client-meta">12 Proyectos • $14.2M</div>
                </div>
              </div>
              <MoreVerticalIcon className="btn-ghost" />
            </div>

            <div className="client-item">
              <div className="client-info">
                <img src="https://ui-avatars.com/api/?name=Importadora+Norte&background=random" className="client-avatar" alt="IN" />
                <div>
                  <div className="client-name">Importadora del Norte</div>
                  <div className="client-meta">9 Pedidos • $8.5M</div>
                </div>
              </div>
              <MoreVerticalIcon className="btn-ghost" />
            </div>

            <div className="client-item">
              <div className="client-info">
                <img src="https://ui-avatars.com/api/?name=Textiles+Sabana&background=random" className="client-avatar" alt="TS" />
                <div>
                  <div className="client-name">Textiles La Sabana</div>
                  <div className="client-meta">3 Facturas • $3.1M</div>
                </div>
              </div>
              <MoreVerticalIcon className="btn-ghost" />
            </div>
          </div>

          <button className="btn-full">VER TODOS LOS CLIENTES</button>
        </div>
      </div>

      <div className="section-card">
        <div className="section-header">
          <div>
            <h2 className="section-title">Transacciones Recientes</h2>
            <p className="section-subtitle">Monitoreo en tiempo real de facturación y pagos</p>
          </div>
          <div className="table-header-actions">
            <button className="btn-primary">
              + Nueva Venta
              <ChevronDownIcon />
            </button>
          </div>
        </div>

        <table>
          <thead>
            <tr>
              <th>REFERENCIA</th>
              <th>CLIENTE</th>
              <th>FECHA</th>
              <th>ESTADO</th>
              <th>MONTO (COP)</th>
              <th>ACCIONES</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="font-medium text-gray-500 text-xs">XFAC-2024-001</td>
              <td className="font-medium">Inmobiliaria Central</td>
              <td className="text-gray-500">22 Jun 2024, 14:30</td>
              <td><span className="status-badge status-completed"><div className="status-dot"></div>COMPLETADO</span></td>
              <td className="font-bold">$2.450.000</td>
              <td><MoreVerticalIcon className="btn-ghost" /></td>
            </tr>
            <tr>
              <td className="font-medium text-gray-500 text-xs">HTAC-2024-002</td>
              <td className="font-medium">Taller Mecánico El Veloz</td>
              <td className="text-gray-500">22 Jun 2024, 11:15</td>
              <td><span className="status-badge status-pending"><div className="status-dot"></div>PENDIENTE</span></td>
              <td className="font-bold">$1.120.000</td>
              <td><MoreVerticalIcon className="btn-ghost" /></td>
            </tr>
            <tr>
              <td className="font-medium text-gray-500 text-xs">HFAC-2024-003</td>
              <td className="font-medium">Agencia Digital XYZ</td>
              <td className="text-gray-500">21 Jun 2024, 16:45</td>
              <td><span className="status-badge status-draft"><div className="status-dot"></div>BORRADOR</span></td>
              <td className="font-bold">$890.000</td>
              <td><MoreVerticalIcon className="btn-ghost" /></td>
            </tr>
            <tr>
              <td className="font-medium text-gray-500 text-xs">HFAC-2024-004</td>
              <td className="font-medium">Suministros del Valle</td>
              <td className="text-gray-500">21 Jun 2024, 09:30</td>
              <td><span className="status-badge status-cancelled"><div className="status-dot"></div>ANULADO</span></td>
              <td className="font-bold">$5.670.000</td>
              <td><MoreVerticalIcon className="btn-ghost" /></td>
            </tr>
          </tbody>
        </table>

        <div className="pagination">
          <div className="pagination-info">Mostrando 1-10 de 1,450 transacciones</div>
          <div className="pagination-controls">
            <button className="page-btn">‹</button>
            <button className="page-btn active">1</button>
            <button className="page-btn">2</button>
            <button className="page-btn">3</button>
            <button className="page-btn">›</button>
          </div>
        </div>
      </div>
    </div>
  );
};
