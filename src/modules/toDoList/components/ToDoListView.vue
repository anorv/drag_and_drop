<template>
  <h5 class="text-center p-4 text-uppercase">{{ toDoList }}</h5>
  <ToDoListCreateModal
    :form="state.form"
    @create-task="state.createTask"
    @close-modal="state.closeCreateModal"
  />
  <ToDoListDisplay
    :tasks-display="state.tasksDisplay"
    :is-disabled-area="state.isDisabledArea"
    :form="state.form"
    @start-drag-event="state.startDragEvent"
    @on-drop-event="state.onDropItemEvent"
  />
</template>

<script lang="ts">
import { Options, setup, Vue } from 'vue-class-component'
import { initToDoListForm } from '@/modules/toDoList/model/toDoListForm'
import { ToDoListParams } from '@/modules/toDoList/integration/toDoListParams'
import {
  dispatchCreateTask,
  dispatchMoveTask,
  setSelectedType,
} from '@/modules/toDoList/store/todoListDispacher'
import ToDoListCreateModal from '@/modules/toDoList/components/toDoListComponents/ToDoListCreateModal.vue'
import ToDoListDisplay from '@/modules/toDoList/components/toDoListComponents/ToDoListDisplay.vue'
import {
  getTasksDataComputed,
  getTasksDataDisplayComputed,
} from '@/modules/toDoList/store/toDoListComputed'
import { ref } from 'vue'
import { ToDoTypes } from '@/core/constants/ToDoStatusConstants'
import { Prop } from 'vue-property-decorator'

@Options({
  components: {
    ToDoListDisplay,
    ToDoListCreateModal,
  },
})
export default class ToDoListView extends Vue {
  @Prop() toDoList!: string
  state = setup(() => {
    const id = ref<number>(1)
    const draggableItem = ref<ToDoListParams>()
    const form = initToDoListForm()
    const tasksComputed = getTasksDataComputed()
    const tasksDisplay = getTasksDataDisplayComputed()
    const statuses = ToDoTypes

    const closeCreateModal = (): void => {
      form.title.value = undefined
      form.description.value = undefined
      form.status.value = undefined
    }

    const createTask = (): Promise<void> => {
      if (tasksComputed.value?.length) {
        id.value = tasksComputed.value?.length + 1
      }

      const task: ToDoListParams = {
        id: id.value,
        title: form.title.value ?? 'default' + id.value,
        description: form.description.value,
        status: form.status.value ?? statuses.Opened,
      }
      return dispatchCreateTask(task)
    }
    const checkTypes = (typeToDrop?: ToDoTypes): void => {
      switch (typeToDrop) {
        case ToDoTypes.Opened:
          form.isDisabledAreaForOpen.value = true
          break
        case ToDoTypes.Done:
          form.isDisabledAreaForDone.value = true
          break
        case ToDoTypes.Closed:
          form.isDisabledAreaForClose.value = true
          break
        case ToDoTypes.InProgress:
          form.isDisabledAreaForIsProgress.value = true
          break
        default:
          throw new Error('Type undefined')
      }
    }

    const clearDisableTypes = (): void => {
      form.isDisabledAreaForOpen.value = false
      form.isDisabledAreaForDone.value = false
      form.isDisabledAreaForClose.value = false
      form.isDisabledAreaForIsProgress.value = false
    }
    const startDragEvent = (evt: DragEvent, item: ToDoListParams): void => {
      checkTypes(item.status)
      draggableItem.value = item
      if (evt.dataTransfer) {
        evt.dataTransfer.dropEffect = 'move'
        evt.dataTransfer.effectAllowed = 'move'
      }
    }

    const onDropItemEvent = (selectedType: ToDoTypes): void => {
      setSelectedType(selectedType)
      if (draggableItem.value) dispatchMoveTask(draggableItem.value)
      clearDisableTypes()
    }

    return { form, tasksDisplay, createTask, closeCreateModal, startDragEvent, onDropItemEvent }
  })
}
</script>

<style lang="scss"></style>
