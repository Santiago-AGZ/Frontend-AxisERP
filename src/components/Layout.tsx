import { useState } from 'react';
import './Layout.css';
import {
  LayoutDashboardIcon,
  UsersIcon,
  PackageIcon,
  ShoppingCartIcon,
  SearchIcon,
  BellIcon,
  SettingsIcon,
  HelpCircleIcon
} from './Icons';
import { Dashboard } from '../views/Dashboard';
import { Clientes } from '../views/Clientes';
import { Productos } from '../views/Productos';
import { Ventas } from '../views/Ventas';

type ViewType = 'dashboard' | 'clientes' | 'productos' | 'ventas';

export const Layout = () => {
  const [currentView, setCurrentView] = useState<ViewType>('dashboard');

  const renderView = () => {
    switch (currentView) {
      case 'dashboard':
        return <Dashboard />;
      case 'clientes':
        return <Clientes />;
      case 'productos':
        return <Productos />;
      case 'ventas':
        return <Ventas />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="layout-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-logo">
          <div className="flex items-center gap-2">
            <div className="flex" style={{ color: '#0b57d0' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <rect width="7" height="7" x="3" y="3" rx="1" />
                <rect width="7" height="7" x="14" y="3" rx="1" />
                <rect width="7" height="7" x="14" y="14" rx="1" />
                <rect width="7" height="7" x="3" y="14" rx="1" />
              </svg>
            </div>
            <div>
              <h1 className="font-bold text-gray-900" style={{ fontSize: '18px', lineHeight: '1' }}>AXIS ERP</h1>
              <p className="text-gray-500" style={{ fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Gestión Empresarial</p>
            </div>
          </div>
        </div>

        <nav className="sidebar-nav">
          <a
            className={`nav-item ${currentView === 'dashboard' ? 'active' : ''}`}
            onClick={() => setCurrentView('dashboard')}
          >
            <LayoutDashboardIcon className="nav-icon" />
            Panel Principal
          </a>
          <a
            className={`nav-item ${currentView === 'clientes' ? 'active' : ''}`}
            onClick={() => setCurrentView('clientes')}
          >
            <UsersIcon className="nav-icon" />
            Clientes
          </a>
          <a
            className={`nav-item ${currentView === 'productos' ? 'active' : ''}`}
            onClick={() => setCurrentView('productos')}
          >
            <PackageIcon className="nav-icon" />
            Productos
          </a>
          <a
            className={`nav-item ${currentView === 'ventas' ? 'active' : ''}`}
            onClick={() => setCurrentView('ventas')}
          >
            <ShoppingCartIcon className="nav-icon" />
            Ventas
          </a>
        </nav>

        <div className="sidebar-footer">
          <div className="avatar">
            {/* Placeholder avatar image */}
            <img src="https://ui-avatars.com/api/?name=Usuario+Admin&background=0b57d0&color=fff" alt="User" />
          </div>
          <div className="user-info">
            <span className="user-name">Usuario Admin</span>
            <span className="user-role">admin@axis.co</span>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {/* Topbar */}
        <header className="topbar">
          <div className="search-container">
            <SearchIcon style={{ color: '#9ca3af', width: '16px', height: '16px' }} />
            <input
              type="text"
              placeholder="Buscar clientes, productos, SKU..."
              className="search-input"
            />
          </div>

          <div className="topbar-actions">
            <div className="currency-selector">
              COP ▼
            </div>
            <BellIcon style={{ width: '18px', height: '18px', cursor: 'pointer' }} />
            <SettingsIcon style={{ width: '18px', height: '18px', cursor: 'pointer' }} />
            <HelpCircleIcon style={{ width: '18px', height: '18px', cursor: 'pointer' }} />
          </div>
        </header>

        {/* Dynamic Page Content */}
        <div className="page-content">
          {renderView()}
        </div>
      </main>
    </div>
  );
};
