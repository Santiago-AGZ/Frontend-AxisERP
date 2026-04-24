import { useState } from 'react';
import type { SVGProps } from 'react';
import '../App.css';

const MailIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg className="input-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
);

const LockIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg className="input-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
);

const EyeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></svg>
);

const EyeOffIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" /><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" /><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" /><line x1="2" x2="22" y1="2" y2="22" /></svg>
);

const ArrowRightIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
);

const ShieldIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg className="badge-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></svg>
);

const CloudIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg className="badge-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" /></svg>
);

interface LoginProps {
  onLogin: () => void;
}

export const Login = ({ onLogin }: LoginProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="login-container" style={{ margin: 'auto' }}>
      <div className="logo-section">
        <div className="logo-title-wrapper">
          <div className="logo-icon">
            <div className="logo-dot"></div>
            <div className="logo-dot"></div>
            <div className="logo-dot"></div>
            <div className="logo-dot"></div>
          </div>
          <h1 className="logo-title">AXIS ERP</h1>
        </div>
        <p className="logo-subtitle">Gestión Empresarial Inteligente</p>
      </div>

      <div className="login-card">
        <h2 className="card-title">Iniciar Sesión</h2>
        <p className="card-subtitle">Bienvenido de nuevo. Ingrese sus credenciales para continuar.</p>

        <form onSubmit={(e) => { e.preventDefault(); onLogin(); }}>
          <div className="form-group">
            <div className="form-header">
              <label className="form-label" htmlFor="email">Correo Electrónico</label>
            </div>
            <div className="input-wrapper">
              <MailIcon />
              <input 
                id="email" 
                type="email" 
                className="input-field" 
                placeholder="admin@axiserp.com"
                defaultValue="admin@axiserp.com"
              />
            </div>
          </div>

          <div className="form-group">
            <div className="form-header">
              <label className="form-label" htmlFor="password">Contraseña</label>
              <a href="#" className="forgot-password">¿Olvidó su contraseña?</a>
            </div>
            <div className="input-wrapper">
              <LockIcon />
              <input 
                id="password" 
                type={showPassword ? "text" : "password"} 
                className="input-field" 
                defaultValue="password123"
              />
              <div className="input-icon-right" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <EyeOffIcon /> : <EyeIcon />}
              </div>
            </div>
          </div>

          <div className="checkbox-group">
            <input type="checkbox" id="remember" className="checkbox-input" />
            <label htmlFor="remember" className="checkbox-label">Recordar mi sesión</label>
          </div>

          <button type="submit" className="submit-button">
            Acceder al Panel
            <ArrowRightIcon />
          </button>
        </form>
      </div>

      <div className="footer-section">
        <p className="signup-text">
          ¿No tienes una cuenta? <a href="#" className="signup-link">Contactar a soporte</a>
        </p>
        
        <div className="trust-badges">
          <div className="badge">
            <ShieldIcon />
            <span>Conexión Segura</span>
          </div>
          <div className="badge">
            <CloudIcon />
            <span>AWS Infrastructure</span>
          </div>
        </div>

        <p className="copyright">© 2024 AXIS ERP V4.2.0</p>
      </div>
    </div>
  );
};
