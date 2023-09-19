import { Router } from 'express'
import { TaskService } from './task.service'

// funcion de creacion de un enrutador de tareas
// recibe un servicio de tareas por parametro
function startTaskRouter (taskService: TaskService) {
  // instancia de un enrutador
  const taskRouter = Router()

  // rutas
  taskRouter.get('/', async (req, res) => {
    const allTasks = await taskService.list()
    res.status(200).json(allTasks)
  })

  taskRouter.post('/', async (req, res) => {
    const { content } = req.body
    const newTask = await taskService.create(content)
    res.status(201).json(newTask)
  })

  taskRouter.patch('/', (req, res) => {
    res.send('update')
  })

  taskRouter.delete('/', (req, res) => {
    res.send('delete')
  })

  return taskRouter
}

export { startTaskRouter }
