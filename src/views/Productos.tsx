import type { SVGProps } from 'react';
import './Productos.css';

const PackageIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>
);

const WalletIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"/><path d="M3 5v14a2 2 0 0 0 2 2h16v-5"/><path d="M18 12a2 2 0 0 0 0 4h4v-4Z"/></svg>
);

const AlertTriangleIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>
);

const ArrowLeftRightIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M8 3 4 7l4 4"/><path d="M4 7h16"/><path d="m16 21 4-4-4-4"/><path d="M20 17H4"/></svg>
);

const LaptopIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"/></svg>
);

const MonitorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/></svg>
);

const CloudIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>
);

const MouseIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="5" y="2" width="14" height="20" rx="7"/><path d="M12 2v6"/></svg>
);

const MoreVerticalIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>
);

const BellIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>
);

const ClockIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
);

const InfoIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
);

export const Productos = () => {
  return (
    <div className="w-full relative">
      <div className="page-header flex justify-between items-start">
        <div>
          <div className="breadcrumbs">
            <span>Inicio</span>
            <span className="separator">›</span>
            <span>Inventario</span>
            <span className="separator">›</span>
            <span className="current">Productos</span>
          </div>
          <h1 className="page-title">Catálogo de Productos</h1>
          <p className="text-gray-500 text-xs mt-1">Gestiona y monitorea tu inventario global en tiempo real.</p>
        </div>
        <div className="flex gap-3">
          <button className="btn-outline flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
            Exportar
          </button>
          <button className="btn-blue flex items-center gap-2">
            + Nuevo Producto
          </button>
        </div>
      </div>

      <div className="productos-grid">
        <div className="metric-card">
          <div className="metric-info">
            <span className="metric-label">Total Productos</span>
            <span className="metric-value">1,284</span>
            <span className="metric-sub positive">↗ +12 este mes</span>
          </div>
          <PackageIcon className="metric-icon blue" />
        </div>

        <div className="metric-card">
          <div className="metric-info">
            <span className="metric-label">Valor Inventario</span>
            <span className="metric-value">$45.2M <span style={{ fontSize: '12px' }}>COP</span></span>
            <span className="metric-sub">Actualizado hace 2h</span>
          </div>
          <WalletIcon className="metric-icon" />
        </div>

        <div className="metric-card" style={{ borderLeft: '3px solid #ef4444' }}>
          <div className="metric-info">
            <span className="metric-label">Stock Bajo</span>
            <span className="metric-value">18</span>
            <span className="metric-sub negative">Requiere reposición inmediata</span>
          </div>
          <AlertTriangleIcon className="metric-icon red" />
        </div>

        <div className="metric-card">
          <div className="metric-info">
            <span className="metric-label">Movimientos (24H)</span>
            <span className="metric-value">342</span>
            <span className="metric-sub">Entradas y salidas</span>
          </div>
          <ArrowLeftRightIcon className="metric-icon orange" />
        </div>
      </div>

      <div className="section-card">
        <div className="filters-bar">
          <div className="filter-tab active">Todos</div>
          <div className="filter-tab">Activos</div>
          <div className="filter-tab">Sin Stock</div>
          <select className="filter-select" style={{ marginLeft: '12px' }}>
            <option>Categoría: Todas</option>
            <option>Hardware</option>
            <option>Software</option>
          </select>
          <div style={{ flex: 1 }}></div>
          <div className="text-gray-500" style={{ fontSize: '11px' }}>Mostrando 1 - 10 de 1,284 productos</div>
        </div>

        <table>
          <thead>
            <tr>
              <th>SKU</th>
              <th>NOMBRE DEL PRODUCTO</th>
              <th>CATEGORÍA</th>
              <th>STOCK</th>
              <th>PRECIO (COP)</th>
              <th>ESTADO</th>
              <th style={{ textAlign: 'right' }}>ACCIONES</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="font-medium text-gray-500 text-xs">AX-9923-L</td>
              <td>
                <div className="flex items-center gap-3">
                  <div className="product-avatar"><LaptopIcon /></div>
                  <div>
                    <div className="font-bold text-sm">MacBook Pro M3 Max 14"</div>
                    <div className="text-xs text-gray-500">Apple Inc. | Silver Edition</div>
                  </div>
                </div>
              </td>
              <td><span className="tag-badge tag-hardware">HARDWARE</span></td>
              <td className="font-medium">45 <span className="text-gray-500 text-xs font-normal">unid.</span></td>
              <td className="font-bold">$18,450,000</td>
              <td><span className="stock-badge stock-available">+ Disponible</span></td>
              <td style={{ textAlign: 'right' }}><MoreVerticalIcon className="btn-ghost" /></td>
            </tr>
            <tr>
              <td className="font-medium text-gray-500 text-xs">AX-1142-S</td>
              <td>
                <div className="flex items-center gap-3">
                  <div className="product-avatar"><MonitorIcon /></div>
                  <div>
                    <div className="font-bold text-sm">Monitor LG UltraFine 5K</div>
                    <div className="text-xs text-gray-500">LG Display | 27 inch</div>
                  </div>
                </div>
              </td>
              <td><span className="tag-badge tag-hardware">HARDWARE</span></td>
              <td className="font-medium text-red-500">4 <span className="text-gray-500 text-xs font-normal">unid.</span></td>
              <td className="font-bold">$6,890,000</td>
              <td><span className="stock-badge stock-low">- Stock Bajo</span></td>
              <td style={{ textAlign: 'right' }}><MoreVerticalIcon className="btn-ghost" /></td>
            </tr>
            <tr>
              <td className="font-medium text-gray-500 text-xs">AX-8050-K</td>
              <td>
                <div className="flex items-center gap-3">
                  <div className="product-avatar"><CloudIcon /></div>
                  <div>
                    <div className="font-bold text-sm">Suscripción AWS Pro Plus</div>
                    <div className="text-xs text-gray-500">Amazon Web Services | Anual</div>
                  </div>
                </div>
              </td>
              <td><span className="tag-badge tag-software">SOFTWARE</span></td>
              <td className="text-gray-500 text-xs">∞</td>
              <td className="font-bold">$1,250,000</td>
              <td><span className="stock-badge stock-available">+ Disponible</span></td>
              <td style={{ textAlign: 'right' }}><MoreVerticalIcon className="btn-ghost" /></td>
            </tr>
            <tr>
              <td className="font-medium text-gray-500 text-xs">AX-7721-M</td>
              <td>
                <div className="flex items-center gap-3">
                  <div className="product-avatar"><MouseIcon /></div>
                  <div>
                    <div className="font-bold text-sm">Logitech MX Master 3S</div>
                    <div className="text-xs text-gray-500">Logitech | Graphite</div>
                  </div>
                </div>
              </td>
              <td><span className="tag-badge tag-hardware">HARDWARE</span></td>
              <td className="font-medium">128 <span className="text-gray-500 text-xs font-normal">unid.</span></td>
              <td className="font-bold">$450,000</td>
              <td><span className="stock-badge stock-available">+ Disponible</span></td>
              <td style={{ textAlign: 'right' }}><MoreVerticalIcon className="btn-ghost" /></td>
            </tr>
          </tbody>
        </table>

        <div className="pagination">
          <div className="pagination-controls">
            <button className="page-btn">Anterior</button>
            <button className="page-btn active">1</button>
            <button className="page-btn">2</button>
            <button className="page-btn">3</button>
            <span className="text-gray-500" style={{ margin: '0 4px' }}>...</span>
            <button className="page-btn">128</button>
            <button className="page-btn">Siguiente</button>
          </div>
          <div className="text-gray-500 text-xs">Ir a la página: <input type="text" defaultValue="1" style={{ width: '40px', padding: '4px', border: '1px solid #e5e7eb', borderRadius: '4px', textAlign: 'center' }} /></div>
        </div>
      </div>

      <div className="bottom-widgets">
        <div className="featured-product-card">
          <svg className="featured-bg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/></svg>
          <div className="featured-tag">PRODUCTO DESTACADO</div>
          <h3 className="featured-title">Workstation Enterprise X1</h3>
          <p className="featured-desc">Configuración optimizada para procesamiento masivo de datos ERP. Máximo rendimiento para nodos centrales y servidores locales.</p>
          <div className="featured-actions">
            <button className="btn-solid-blue">Ver Detalles</button>
            <button className="btn-solid-gray">Gestionar Stock</button>
          </div>
        </div>

        <div className="alerts-card">
          <div className="alerts-header">
            <h3 className="section-title" style={{ margin: 0 }}>Alertas de Reabastecimiento</h3>
            <BellIcon className="text-gray-500" />
          </div>

          <div className="alert-item alert-critical">
            <AlertTriangleIcon className="alert-icon" />
            <div className="alert-content">
              <div className="alert-title">Crítico: Mouse Logitech</div>
              <div className="alert-desc">Quedan menos de 5 unidades</div>
            </div>
          </div>

          <div className="alert-item alert-pending">
            <ClockIcon className="alert-icon" />
            <div className="alert-content">
              <div className="alert-title">Pendiente: Monitor LG</div>
              <div className="alert-desc">Orden de compra enviada</div>
            </div>
          </div>

          <div className="alert-item alert-info">
            <InfoIcon className="alert-icon" />
            <div className="alert-content">
              <div className="alert-title">Próximo Vencimiento</div>
              <div className="alert-desc">Licencia AWS (15 días)</div>
            </div>
          </div>

          <button className="btn-full" style={{ marginTop: '16px', backgroundColor: 'transparent', border: '1px solid #e5e7eb', color: '#6b7280' }}>
            VER TODAS LAS ALERTAS
          </button>
        </div>
      </div>
    </div>
  );
};
