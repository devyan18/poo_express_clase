import express, { Application } from 'express'
import { connectToMongo, connectToMysql } from './configs/database'
import { startTaskRouter } from './tasks/task.routes'
import { TaskServiceMongo } from './tasks/task.service'

function startServer () {
  const app: Application = express()

  app.use(express.json())

  app.use('/api/tasks', startTaskRouter(new TaskServiceMongo()))

  app.listen(3000, () => {
    connectToMongo()
    connectToMysql()

    console.log('Server is running on port 3000')
  })

  return app
}

function main () {
  startServer()
}

main()
