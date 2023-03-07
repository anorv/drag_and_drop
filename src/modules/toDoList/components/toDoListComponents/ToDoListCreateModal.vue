<template>
  <div class="text-center">
    <b-button
      variant="primary"
      class="p-2"
      @click="state.modalShow = !state.modalShow"
      >{{ $t('TASK.ADD_TASK') }}</b-button
    >
    <b-modal
      v-model="state.modalShow"
      @hidden="state.closeModal"
    >
      <b-form>
        <div class="mb-3">
          <b-form-input
            v-model="form.title.value"
            :placeholder="$t('TASK.TITLE')"
          ></b-form-input>
        </div>
        <div class="mb-3">
          <b-form-textarea
            v-model="form.description.value"
            :placeholder="$t('TASK.DESCRIPTION')"
            rows="3"
            max-rows="6"
          ></b-form-textarea>
        </div>
        <div>
          <b-form-select
            v-model="form.status.value"
            :options="state.statusesItems"
            size="sm"
            class="mt-3"
          >
            <template #first>
              <b-form-select-option
                value=""
                disabled
              >
                {{ $t('NOTIFICATIONS.PICK_UP_STATUS') }}</b-form-select-option
              >
            </template>
          </b-form-select>
        </div>
      </b-form>
      <template #footer>
        <b-button
          type="button"
          class="btn btn-secondary"
          @click="state.closeModal"
        >
          {{ $t('BUTTON.CLOSE') }}
        </b-button>
        <b-button
          type="submit"
          class="btn btn-primary"
          @click="state.createTask"
        >
          {{ $t('BUTTON.CREATE') }}
        </b-button>
      </template>
    </b-modal>
  </div>
</template>

<script lang="ts">
import { Options, setup, Vue } from 'vue-class-component'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { ToDoTypes } from '@/core/constants/ToDoStatusConstants'
import { Prop } from 'vue-property-decorator'
import { ToDoListForm } from '@/modules/toDoList/model/toDoListForm'

@Options({
  components: {},
  emits: ['create-task', 'close-modal'],
})
export default class ToDoListCreateModal extends Vue {
  @Prop() form!: ToDoListForm

  state = setup(() => {
    const modalShow = ref<boolean>(false)
    const { t } = useI18n()
    const statuses = ToDoTypes

    const openModal = (): void => {
      modalShow.value = true
    }
    const createTask = (): void => {
      this.$emit('create-task')
      closeModal()
    }
    const closeModal = (): void => {
      modalShow.value = false
      this.$emit('close-modal')
    }
    const statusesItems = ref([
      {
        text: `${t('STATUS.OPENED')}`,
        value: statuses.Opened,
      },
      {
        text: `${t('STATUS.IN_PROGRESS')}`,
        value: statuses.InProgress,
      },
      {
        text: `${t('STATUS.DONE')}`,
        value: statuses.Done,
      },
      {
        text: `${t('STATUS.CLOSED')}`,
        value: statuses.Closed,
      },
    ])
    return { statusesItems, modalShow, openModal, createTask, closeModal }
  })
}
</script>

<style scoped lang="scss"></style>
