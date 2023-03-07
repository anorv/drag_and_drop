import { ref, Ref } from 'vue'
import { ToDoTypes } from '@/core/constants/ToDoStatusConstants'

export type ToDoListForm = {
  title: Ref<string | undefined>
  description: Ref<string | undefined>
  status: Ref<ToDoTypes | undefined>
  isDisabledAreaForOpen: Ref<boolean>
  isDisabledAreaForDone: Ref<boolean>
  isDisabledAreaForClose: Ref<boolean>
  isDisabledAreaForIsProgress: Ref<boolean>
}

export function initToDoListForm(): ToDoListForm {
  return {
    title: ref<string | undefined>(),
    description: ref<string | undefined>(),
    status: ref<ToDoTypes | undefined>(),
    isDisabledAreaForOpen: ref<boolean>(false),
    isDisabledAreaForDone: ref<boolean>(false),
    isDisabledAreaForClose: ref<boolean>(false),
    isDisabledAreaForIsProgress: ref<boolean>(false),
  }
}
