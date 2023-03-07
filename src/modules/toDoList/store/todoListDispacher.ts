import { ToDoListParams } from '@/modules/toDoList/integration/toDoListParams'
import { store } from '@/store/store'
import { ToDoTypes } from '@/core/constants/ToDoStatusConstants'

export function dispatchCreateTask(task: ToDoListParams): Promise<void> {
  return store.dispatch('applyCreateTask', task)
}

export function dispatchMoveTask(task: ToDoListParams): Promise<void> {
  return store.dispatch('applyMovedTask', task)
}

export function setSelectedType(selectedType: ToDoTypes): Promise<void> {
  return store.dispatch('applySelectedType', selectedType)
}
