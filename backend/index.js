import app from './app.js';
import { connectiondb } from './db.js';


connectiondb()
app.listen(3001, () => {
  console.log('Servidor iniciado en el puerto 3001');
});
