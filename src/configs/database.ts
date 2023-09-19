import { connect } from 'mongoose'
import { Sequelize } from 'sequelize'

// Instancia de Sequelize
export const sequelize = new Sequelize('poo', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql'
})

// Conexión a la base de datos de MySQL
export async function connectToMysql () {
  await sequelize.sync({ force: false })
}

// Conexión a la base de datos de MongoDB
export async function connectToMongo () {
  connect('mongodb://localhost:27017/poo')
    .then((db) => console.log('MongoDB is connected to', db.connection.db.databaseName))
    .catch(err => console.log(err))
}
