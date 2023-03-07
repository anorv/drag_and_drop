import { ToDoListParams } from '@/modules/toDoList/integration/toDoListParams'
import { ToDoTypes } from '@/core/constants/ToDoStatusConstants'

export interface State {
  toDoTasks: ToDoListParams[]
  selectedType: ToDoTypes
}
