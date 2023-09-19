import { Task } from '../task.entity'
import { TaskModelMysql } from '../task.model'
import { TaskService } from '../task.service'

// Implementacion de un servicio de tareas con MySQL
export class TaskServiceMysql implements TaskService {
  // se define el modelo de la entidad
  model = TaskModelMysql

  // Se implementan los metodos del servicio
  list (): Promise<Task[]> {
    return this.model.findAll()
  }

  find (id: string): Promise<Task | null> {
    throw new Error('Method not implemented.')
  }

  async create (content: string): Promise<Task> {
    const newTask = new TaskModelMysql({
      id: 'asdas',
      content,
      done: false
    })

    await newTask.save()

    return newTask
  }

  update (id: string, content: string): Promise<Task | null> {
    throw new Error('Method not implemented.')
  }

  delete (id: string): Promise<Task | null> {
    throw new Error('Method not implemented.')
  }
}
