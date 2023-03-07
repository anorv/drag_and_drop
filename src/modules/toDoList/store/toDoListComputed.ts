import { computed, ComputedRef } from 'vue'
import { store } from '@/store/store'
import { ToDoListParams } from '@/modules/toDoList/integration/toDoListParams'
import { tasksListMapper, ToDoListDisplayParams } from '@/modules/toDoList/mappers/toDoListMapper'

export function getTasksDataComputed(): ComputedRef<ToDoListParams[]> {
  return computed<ToDoListParams[]>(() => {
    return store.state.toDoTasks
  })
}

export function getTasksDataDisplayComputed(): ComputedRef<ToDoListDisplayParams> {
  return computed<ToDoListDisplayParams>(() => {
    return tasksListMapper(store.state.toDoTasks)
  })
}
