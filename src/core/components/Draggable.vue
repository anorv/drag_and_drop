<template>
  <div
    class="col mx-2 px-2 py-3 border rounded"
    :class="{ 'bg-success bg-opacity-10': disabled, 'bg-light': !disabled }"
    :aria-disabled="!disabled"
  >
    <h6>{{ text }}</h6>
    <div
      class="draggable-list"
      :class="{ 'draggable-list': disabled, 'draggable-list-disabled': !disabled }"
      @drop="disabled ? this.$emit('drop', $event, status) : undefined"
      @dragover.prevent
      @dragenter.prevent
    >
      <div
        v-for="item in items"
        :key="item"
        class="bg-white mt-3 p-2 shadow border rounded"
        :draggable="true"
        @dragstart="this.$emit('dragstart', $event, item)"
      >
        <h5>{{ item.title }}:</h5>
        <div>{{ item.description }}</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { setup, Vue } from 'vue-class-component'
import { Prop } from 'vue-property-decorator'
import { ToDoTypes } from '@/core/constants/ToDoStatusConstants'
import { ToDoListParams } from '@/modules/toDoList/integration/toDoListParams'

export default class Draggable extends Vue {
  @Prop() items?: ToDoListParams[]
  @Prop() status?: ToDoTypes
  @Prop() text!: string
  @Prop() disabled!: boolean

  state = setup(() => {
    return {}
  })
}
</script>
<style scoped lang="scss">
.col {
  min-height: 40vh;
}
.draggable-list {
  min-height: 30vh;
}
.draggable-list-disabled {
  min-height: 0vh;
}
.draggable-list > div {
  cursor: pointer;
}
</style>
