const fs = require('fs');
const files = [
  'src/views/Clientes.tsx', 
  'src/views/Dashboard.tsx', 
  'src/views/Productos.tsx', 
  'src/views/Ventas.tsx', 
  'src/views/Login.tsx'
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // Replace React import to import React and SVGProps to satisfy all
  content = content.replace(/import React(, \{[^}]+\})? from 'react';/, "import React$1 from 'react';");
  
  // Remove unused imports in Clientes.tsx
  content = content.replace(/import \{ UsersIcon, SearchIcon \} from '\.\.\/components\/Icons';\n/, "");

  // Add React.SVGProps<SVGSVGElement> and spread props to all functional icons
  content = content.replace(/const ([A-Za-z0-9_]+Icon) = \(\) => \(\s*<svg([^>]*)>/g, 'const $1 = (props: React.SVGProps<SVGSVGElement>) => (\n  <svg$2 {...props}>');

  fs.writeFileSync(file, content);
});
console.log('Fixed SVG props successfully');
