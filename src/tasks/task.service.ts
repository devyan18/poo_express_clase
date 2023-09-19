import { Task } from './task.entity'

// Molde de un servicio de tareas
export interface TaskService {
    list (): Promise<Task[]>
    find (id: string): Promise<Task | null>
    create (content: string): Promise<Task>
    update (id: string, content: string): Promise<Task | null>
    delete (id: string): Promise<Task | null>
}
