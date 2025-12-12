import fs from 'fs';
import path from 'path';

const distDir = path.resolve('dist');
const indexPath = path.join(distDir, 'index.html');
const notFoundPath = path.join(distDir, '404.html');

fs.copyFileSync(indexPath, notFoundPath);
console.log("Copied index.html → 404.html");