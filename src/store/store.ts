import { createStore, Store } from 'vuex'
import { InjectionKey } from 'vue'

import { toDoListState } from '@/modules/toDoList/store/toDoListStates'
import { toDoListMutation } from '@/modules/toDoList/store/toDoListMutations'
import { toDoListAction } from '@/modules/toDoList/store/toDoListActions'
import { State } from '@/store/storeTypes'

export const key: InjectionKey<Store<State>> = Symbol()
export function initialState(): State {
  return {
    ...toDoListState,
  }
}

export const store = createStore<State>({
  state: initialState(),
  mutations: {
    ...toDoListMutation,
  },

  actions: {
    ...toDoListAction,
  },
  modules: {},
})
