import { Task } from '../task.entity'
import { TaskService } from '../task.service'

// Implementacion de un servicio de tareas con el sistema de archivos
export class TaskServiceFileSystem implements TaskService {
  list (): Promise<Task[]> {
    throw new Error('Method not implemented.')
  }

  find (id: string): Promise<Task | null> {
    throw new Error('Method not implemented.')
  }

  create (content: string): Promise<Task> {
    throw new Error('Method not implemented.')
  }

  update (id: string, content: string): Promise<Task | null> {
    throw new Error('Method not implemented.')
  }

  delete (id: string): Promise<Task | null> {
    throw new Error('Method not implemented.')
  }
}
