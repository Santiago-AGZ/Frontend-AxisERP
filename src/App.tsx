import { useState } from 'react';
import { Layout } from './components/Layout';
import { Login } from './views/Login';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  if (!isAuthenticated) {
    return <Login onLogin={() => setIsAuthenticated(true)} />;
  }

  return (
    <Layout />
  );
}

export default App;
