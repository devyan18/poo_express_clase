import { Router } from 'express'
import { TaskService } from './task.service'

function startTaskRouter (taskService: TaskService) {
  const taskRouter = Router()

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
