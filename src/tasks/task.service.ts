import { Task } from './task.entity'
import { TaskModelMongo, TaskModelMysql } from './task.model'

export interface TaskService {
    list (): Promise<Task[]>
    find (id: string): Promise<Task | null>
    create (content: string): Promise<Task>
    update (id: string, content: string): Promise<Task | null>
    delete (id: string): Promise<Task | null>
}

export class TaskServiceMongo implements TaskService {
  model = TaskModelMongo

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

export class TaskServiceMysql implements TaskService {
  model = TaskModelMysql

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
