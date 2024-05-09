const { MongoClient } = require('mongodb');

const url = 'mongodb://mongoadmin:secret@localhost:27017';
const client = new MongoClient(url);

async function connectDB() {
  try {
    await client.connect();
    console.log("Conectado a MongoDB");
    const db = client.db('miBaseDeDatos');
    return db;
  } catch (e) {
    throw new Error("No se pudo conectar a MongoDB", e);
  }
}

module.exports = connectDB;

//Conectar 
//const db = await connectDB();