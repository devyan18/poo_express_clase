import { Task } from '../task.entity'
import { TaskModelMongo } from '../task.model'
import { TaskService } from '../task.service'

// Implementacion de un servicio de tareas con MongoDB
export class TaskServiceMongo implements TaskService {
  // se define el modelo de la entidad
  model = TaskModelMongo

  // Se implementan los metodos del servicio

  list (): Promise<Task[]> {
    return this.model.find()
  }

  find (id: string): Promise<Task | null> {
    throw new Error('Method not implemented.')
  }

  async create (content: string): Promise<Task> {
    const newTask = await this.model.create({ content })
    return newTask
  }

  update (id: string, content: string): Promise<Task | null> {
    throw new Error('Method not implemented.')
  }

  delete (id: string): Promise<Task | null> {
    throw new Error('Method not implemented.')
  }
}
