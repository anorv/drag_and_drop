import { MutationTree } from 'vuex'
import { State } from '@/store/storeTypes'
import { ToDoListParams } from '@/modules/toDoList/integration/toDoListParams'
import { ToDoTypes } from '@/core/constants/ToDoStatusConstants'
import { store } from '@/store/store'

function updateTask(
  source: ToDoListParams,
  target?: ToDoListParams,
  selectedType?: ToDoTypes,
): void {
  if (!target) {
    return
  }
  target.id = source.id
  target.title = source.title
  target.description = source.description
  target.status = selectedType
}
export const toDoListMutation: MutationTree<State> = {
  setToDoItems(state: State, task: ToDoListParams): void {
    state.toDoTasks.push(task)
  },
  setSelectedType(state: State, selectedType: ToDoTypes): void {
    state.selectedType = selectedType
  },
  setDraggedItems(state: State, task: ToDoListParams): void {
    const draggedItem = state.toDoTasks.find((e) => {
      return e.id === task?.id
    })
    updateTask(task, draggedItem, store.state.selectedType)
  },
}
