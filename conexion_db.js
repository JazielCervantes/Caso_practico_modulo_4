const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Mi_contraseña',
  database: 'menu_restaurante'
});

connection.connect((err) => {
  if (err) {
    console.error('Error al conectar:', err);
    return;
  }
  console.log('Conexión exitosa a MySQL!');
});

module.exports = connection;

// version moderna "segura"
// const mysql = require('mysql2/promise');

// async function connect() {
//   const connection = await mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'Mi_contraseña',
//     database: 'Menu_restaurante'
//   });

//   console.log('Conexión exitosa con MySQL (async/await)');
//   return connection;
// }

// module.exports = connect;