import { Schema, model } from 'mongoose'
import { Task } from './task.entity'
import { sequelize } from '../configs/database'
import { DataTypes, Model } from 'sequelize'

const TaskSchemaMongo = new Schema<Task>({
  content: {
    type: String,
    required: true
  },
  done: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true,
  id: true
})

const TaskModelMongo = model<Task>('Task', TaskSchemaMongo)

class TaskModelMysql extends Model<Task> implements Task {
  // @ts-ignore
  public id: string
  // @ts-ignore
  public content: string
  // @ts-ignore
  public done: boolean
}

TaskModelMysql.init({
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: false
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false
  },
  done: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    allowNull: true
  }
}, {
  sequelize,
  tableName: 'tasks'
})

export { TaskModelMysql, TaskModelMongo }
