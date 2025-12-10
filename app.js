const connection = require('./conexion_db');

connection.query('SELECT * FROM platos', (err, results) => {
  if (err) {
    console.error('Error en la consulta:', err);
    return;
  }

  console.log('Resultados:', results);
  connection.end(); // cerrar conexión
});

// opcion moderna "segura"
// const connect = require('./db');

// async function main() {
//   const db = await connect();

//   const [rows] = await db.query('SELECT * FROM platos');
//   console.log('Platos:', rows);

//   await db.end();
// }

// main(); 