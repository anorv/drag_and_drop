import { ToDoTypes } from '@/core/constants/ToDoStatusConstants'

export type ToDoListParams = {
  id: number
  title?: string
  description?: string
  status?: ToDoTypes
  selectedStatus?: ToDoTypes
}
