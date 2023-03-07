import { ActionTree } from 'vuex'
import { State } from '@/store/storeTypes'
import { ToDoListParams } from '@/modules/toDoList/integration/toDoListParams'
import { ToDoTypes } from '@/core/constants/ToDoStatusConstants'

export const toDoListAction: ActionTree<State, State> = {
  applyCreateTask({ commit }, task: ToDoListParams): void {
    commit('setToDoItems', task)
  },

  applyMovedTask({ commit }, task: ToDoListParams[]): void {
    commit('setDraggedItems', task)
  },
  applySelectedType({ commit }, selectedType: ToDoTypes): void {
    commit('setSelectedType', selectedType)
  },
}
