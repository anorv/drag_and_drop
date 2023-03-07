import { ToDoListParams } from '@/modules/toDoList/integration/toDoListParams'
import { ToDoTypes } from '@/core/constants/ToDoStatusConstants'

export type ToDoListDisplayParams = {
  opened: ToDoListParams[]
  inProgress: ToDoListParams[]
  done: ToDoListParams[]
  closed: ToDoListParams[]
}

export function tasksListMapper(items: ToDoListParams[]): ToDoListDisplayParams {
  const opened = items.filter((e) => {
    return e.status === ToDoTypes.Opened
  })
  const inProgress = items.filter((e) => {
    return e.status === ToDoTypes.InProgress
  })
  const done = items.filter((e) => {
    return e.status === ToDoTypes.Done
  })
  const closed = items.filter((e) => {
    return e.status === ToDoTypes.Closed
  })

  return {
    opened: opened,
    inProgress: inProgress,
    done: done,
    closed: closed,
  }
}
