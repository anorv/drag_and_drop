<template>
  <div class="container mt-5 mb-5">
    <div class="row">
      <Draggable
        :items="tasksDisplay.opened"
        :status="state.statuses.Opened"
        :text="$t('NOTIFICATIONS.OPENED')"
        @drop="state.onDropEvent"
        @dragstart="state.dragstartEvent"
        :disabled="form.isDisabledAreaForIsProgress.value || form.isDisabledAreaForClose.value"
      />
      <Draggable
        :items="tasksDisplay.inProgress"
        :status="state.statuses.InProgress"
        :text="$t('NOTIFICATIONS.IN_PROGRESS')"
        @drop="state.onDropEvent"
        @dragstart="state.dragstartEvent"
        :disabled="form.isDisabledAreaForIsProgress.value || form.isDisabledAreaForOpen.value"
      />
      <Draggable
        :items="tasksDisplay.done"
        :status="state.statuses.Done"
        :text="$t('NOTIFICATIONS.DONE')"
        @drop="state.onDropEvent"
        @dragstart="state.dragstartEvent"
        :disabled="form.isDisabledAreaForIsProgress.value"
      />
      <Draggable
        :items="tasksDisplay.closed"
        :status="state.statuses.Closed"
        :text="$t('NOTIFICATIONS.CLOSED')"
        @drop="state.onDropEvent"
        @dragstart="state.dragstartEvent"
        :disabled="
          form.isDisabledAreaForIsProgress.value ||
          form.isDisabledAreaForOpen.value ||
          form.isDisabledAreaForDone.value
        "
      />
    </div>
  </div>
</template>
<script lang="ts">
import { Options, setup, Vue } from 'vue-class-component'
import { Prop } from 'vue-property-decorator'
import { ToDoTypes } from '@/core/constants/ToDoStatusConstants'
import { ToDoListDisplayParams } from '@/modules/toDoList/mappers/toDoListMapper'
import Draggable from '@/core/components/Draggable.vue'
import { ToDoListParams } from '@/modules/toDoList/integration/toDoListParams'
import { ToDoListForm } from '@/modules/toDoList/model/toDoListForm'
@Options({
  components: { Draggable },
})
export default class ToDoListDisplay extends Vue {
  @Prop() tasksDisplay?: ToDoListDisplayParams
  @Prop() form!: ToDoListForm

  state = setup(() => {
    const statuses = ToDoTypes

    const dragstartEvent = (evt: DragEvent, item: ToDoListParams): void => {
      if (item) this.$emit('start-drag-event', evt, item)
    }
    const onDropEvent = (evt: DragEvent, status: ToDoTypes): void => {
      if (status) this.$emit('on-drop-event', status)
    }
    return { statuses, dragstartEvent, onDropEvent }
  })
}
</script>
