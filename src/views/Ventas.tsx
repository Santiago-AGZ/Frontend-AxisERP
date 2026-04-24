import type { SVGProps } from 'react';
import './Ventas.css';

const TrendingUpIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#93c5fd" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
);

const EyeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
);

const MoreVerticalIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>
);

const FilterIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>
);

const DownloadIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
);

const ShoppingCartIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
);

export const Ventas = () => {
  return (
    <div className="w-full relative pb-8">
      <div className="page-header flex justify-between items-start">
        <div>
          <div className="breadcrumbs">
            <span>GESTIÓN</span>
            <span className="separator">/</span>
            <span className="current">VENTAS</span>
          </div>
          <h1 className="page-title">Módulo de Ventas</h1>
          <p className="text-gray-500 text-xs mt-1">Gestión de órdenes, ingresos y analítica comercial.</p>
        </div>
        <button className="btn-blue flex items-center gap-2">
          + Nueva Orden
        </button>
      </div>

      <div className="ventas-grid">
        <div className="ventas-card">
          <div className="flex justify-between items-start">
            <div>
              <div className="ventas-card-label">VENTAS DEL MES</div>
              <div className="ventas-card-value">$142.500.000</div>
              <div className="ventas-card-sub positive">↑ 12.5% vs mes anterior</div>
            </div>
            <TrendingUpIcon />
          </div>
        </div>

        <div className="ventas-card">
          <div className="ventas-card-label">ÓRDENES ACTIVAS</div>
          <div className="ventas-card-value">84</div>
          <div className="ventas-card-sub">12 pendientes de pago</div>
        </div>

        <div className="ventas-card">
          <div className="ventas-card-label">PROMEDIO DE TICKET</div>
          <div className="ventas-card-value">$1.696.420</div>
          <div className="ventas-card-sub">↑ Estable este mes</div>
        </div>

        <div className="ventas-card-dark">
          <div className="ventas-card-label">METAS DEL Q3</div>
          <div className="ventas-card-value">78%</div>
          <div className="progress-bar-container">
            <div className="progress-bar-fill" style={{ width: '78%' }}></div>
          </div>
        </div>
      </div>

      <div className="section-card">
        <div className="filters-row">
          <div className="filter-group">
            <span className="filter-label">FILTRAR POR:</span>
            <select className="filter-input">
              <option>Estado de Pago</option>
            </select>
            <input type="text" placeholder="mm/dd/yyyy" className="filter-input" style={{ width: '120px' }} />
            <span className="text-gray-500 text-xs">al</span>
            <input type="text" placeholder="mm/dd/yyyy" className="filter-input" style={{ width: '120px' }} />
          </div>
          <div className="flex gap-3">
            <button className="btn-outline flex items-center gap-2">
              <FilterIcon /> Filtros Avanzados
            </button>
            <button className="btn-outline flex items-center gap-2">
              <DownloadIcon /> Exportar
            </button>
          </div>
        </div>

        <table>
          <thead>
            <tr>
              <th>ID ORDEN</th>
              <th>FECHA</th>
              <th>CLIENTE</th>
              <th>ESTADO PAGO</th>
              <th style={{ textAlign: 'right' }}>MONTO TOTAL (COP)</th>
              <th style={{ textAlign: 'right' }}>ACCIONES</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="table-id">#ORD-2024-001</td>
              <td className="text-xs text-gray-500">12 Oct 2023</td>
              <td>
                <div className="flex items-center gap-2">
                  <div className="product-avatar" style={{ width: '24px', height: '24px', fontSize: '9px', backgroundColor: '#eff6ff', color: '#0b57d0' }}>TC</div>
                  <span className="font-medium text-xs">TecnoCel SAS</span>
                </div>
              </td>
              <td><span className="status-badge status-pagado">PAGADO</span></td>
              <td className="font-bold text-xs" style={{ textAlign: 'right' }}>$12.450.000</td>
              <td style={{ textAlign: 'right' }}>
                <EyeIcon className="btn-ghost" style={{ marginRight: '8px', width: '14px' }} />
                <MoreVerticalIcon className="btn-ghost" style={{ width: '14px' }} />
              </td>
            </tr>
            <tr>
              <td className="table-id">#ORD-2024-002</td>
              <td className="text-xs text-gray-500">12 Oct 2023</td>
              <td>
                <div className="flex items-center gap-2">
                  <div className="product-avatar" style={{ width: '24px', height: '24px', fontSize: '9px', backgroundColor: '#eff6ff', color: '#0b57d0' }}>AM</div>
                  <span className="font-medium text-xs">Almacenes Modernos</span>
                </div>
              </td>
              <td><span className="status-badge status-pendiente">PENDIENTE</span></td>
              <td className="font-bold text-xs" style={{ textAlign: 'right' }}>$4.890.000</td>
              <td style={{ textAlign: 'right' }}>
                <EyeIcon className="btn-ghost" style={{ marginRight: '8px', width: '14px' }} />
                <MoreVerticalIcon className="btn-ghost" style={{ width: '14px' }} />
              </td>
            </tr>
            <tr>
              <td className="table-id">#ORD-2024-003</td>
              <td className="text-xs text-gray-500">11 Oct 2023</td>
              <td>
                <div className="flex items-center gap-2">
                  <div className="product-avatar" style={{ width: '24px', height: '24px', fontSize: '9px', backgroundColor: '#f3f4f6', color: '#6b7280' }}>CI</div>
                  <span className="font-medium text-xs">Constructora Iberia</span>
                </div>
              </td>
              <td><span className="status-badge status-vencido">VENCIDO</span></td>
              <td className="font-bold text-xs" style={{ textAlign: 'right' }}>$28.320.500</td>
              <td style={{ textAlign: 'right' }}>
                <EyeIcon className="btn-ghost" style={{ marginRight: '8px', width: '14px' }} />
                <MoreVerticalIcon className="btn-ghost" style={{ width: '14px' }} />
              </td>
            </tr>
            <tr>
              <td className="table-id">#ORD-2024-004</td>
              <td className="text-xs text-gray-500">10 Oct 2023</td>
              <td>
                <div className="flex items-center gap-2">
                  <div className="product-avatar" style={{ width: '24px', height: '24px', fontSize: '9px', backgroundColor: '#eff6ff', color: '#0b57d0' }}>DS</div>
                  <span className="font-medium text-xs">Distribuidora Sur</span>
                </div>
              </td>
              <td><span className="status-badge status-pagado">PAGADO</span></td>
              <td className="font-bold text-xs" style={{ textAlign: 'right' }}>$1.120.000</td>
              <td style={{ textAlign: 'right' }}>
                <EyeIcon className="btn-ghost" style={{ marginRight: '8px', width: '14px' }} />
                <MoreVerticalIcon className="btn-ghost" style={{ width: '14px' }} />
              </td>
            </tr>
          </tbody>
        </table>

        <div className="pagination" style={{ borderTop: 'none', paddingTop: '16px' }}>
          <div className="pagination-info">Mostrando 1-4 de 84 órdenes</div>
          <div className="pagination-controls">
            <button className="page-btn">‹</button>
            <button className="page-btn active">1</button>
            <button className="page-btn">2</button>
            <button className="page-btn">3</button>
            <button className="page-btn">›</button>
          </div>
        </div>
      </div>

      <div className="bottom-section">
        <div className="chart-card">
          <div className="chart-header">
            <h2 className="chart-title">Análisis de Ingresos Semanal</h2>
            <a href="#" className="chart-link">DETALLE COMPLETO ↗</a>
          </div>
          
          <div className="mock-chart" style={{ height: '160px', borderBottom: '1px solid #f3f4f6', paddingBottom: '8px', marginBottom: '8px' }}>
            <div className="chart-col">
              <div className="chart-bar" style={{ height: '20%', width: '50px' }}></div>
            </div>
            <div className="chart-col">
              <div className="chart-bar" style={{ height: '35%', width: '50px' }}></div>
            </div>
            <div className="chart-col">
              <div className="chart-bar" style={{ height: '80%', width: '50px' }}></div>
            </div>
            <div className="chart-col">
              <div className="chart-bar" style={{ height: '40%', width: '50px' }}></div>
            </div>
            <div className="chart-col">
              <div className="chart-bar" style={{ height: '45%', width: '50px' }}></div>
            </div>
            <div className="chart-col">
              <div className="chart-bar" style={{ height: '25%', width: '50px' }}></div>
            </div>
            <div className="chart-col">
              <div className="chart-bar" style={{ height: '15%', width: '50px' }}></div>
            </div>
          </div>
          <div className="flex justify-between text-xs text-gray-400 font-bold px-4" style={{ textTransform: 'uppercase' }}>
            <span>LUN</span>
            <span>MAR</span>
            <span>MIÉ</span>
            <span>JUE</span>
            <span>VIE</span>
            <span>SÁB</span>
            <span>DOM</span>
          </div>
        </div>

        <div className="ranking-card">
          <h2 className="chart-title">Mejores Clientes</h2>
          
          <div className="ranking-list">
            <div className="ranking-item">
              <div className="ranking-info">
                <img src="https://ui-avatars.com/api/?name=Inversiones+G&L&background=random" className="ranking-avatar" alt="IGL" />
                <div>
                  <div className="ranking-name">Inversiones G&L</div>
                  <div className="ranking-sub">12 órdenes activas</div>
                </div>
              </div>
              <div className="ranking-value">$45.2M</div>
            </div>

            <div className="ranking-item">
              <div className="ranking-info">
                <img src="https://ui-avatars.com/api/?name=Medifast+Corp&background=random" className="ranking-avatar" alt="MC" />
                <div>
                  <div className="ranking-name">Medifast Corp</div>
                  <div className="ranking-sub">8 órdenes activas</div>
                </div>
              </div>
              <div className="ranking-value">$32.8M</div>
            </div>

            <div className="ranking-item">
              <div className="ranking-info">
                <img src="https://ui-avatars.com/api/?name=Suministros+Cali&background=random" className="ranking-avatar" alt="SC" />
                <div>
                  <div className="ranking-name">Suministros Cali</div>
                  <div className="ranking-sub">5 órdenes activas</div>
                </div>
              </div>
              <div className="ranking-value">$18.4M</div>
            </div>
          </div>

          <button className="btn-full" style={{ backgroundColor: 'transparent', color: '#0b57d0', marginTop: '24px' }}>VER RANKING COMPLETO</button>
        </div>
      </div>

      <button className="floating-btn">
        <ShoppingCartIcon />
      </button>
    </div>
  );
};
