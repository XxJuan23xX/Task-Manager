const cassandra = require('cassandra-driver');
require('dotenv').config();

const client = new cassandra.Client({
  contactPoints: ['127.0.0.1'],
  localDataCenter: 'datacenter1', // Ajusta según tu configuración
  protocolOptions: { port: 9042 }, // Puerto especificado en DevCenter
  keyspace: 'task_management',  // Asegúrate de que el keyspace coincide con el que creaste
});

client.connect((err) => {
  if (err) {
    console.error('There was an error when connecting', err);
  } else {
    console.log('Connected to Cassandra');
  }
});

module.exports = client;
