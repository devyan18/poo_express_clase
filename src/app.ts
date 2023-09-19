import express, { Application } from 'express'
import { connectToMongo, connectToMysql } from './configs/database'
import { startTaskRouter } from './tasks/task.routes'

// import { TaskServiceMysql } from './tasks/services/task.mysql.service'
// import { TaskServiceFileSystem } from './tasks/services/task.filesystem.service'

import { TaskServiceMongo } from './tasks/services/task.mongo.service'

// función de inicio del servidor

export function startServer () {
  // instancia de express
  const app: Application = express()

  // middlewares
  app.use(express.json())

  // rutas
  app.use('/api/tasks', startTaskRouter(new TaskServiceMongo()))

  // levantar el servidor
  app.listen(3000, () => {
    // Conectarse a la base de datos

    // * MongoDB
    connectToMongo()
    // * MySQL
    connectToMysql()

    // mensaje de éxito
    console.log('Server is running on port 3000')
  })

  return app
}
