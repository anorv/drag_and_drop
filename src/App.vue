<template>
  <ToDoListView :to-do-list="state.toDoList" />
</template>
<script lang="ts">
import ToDoListView from './modules/toDoList/components/ToDoListView.vue'
import { Options, setup, Vue } from 'vue-class-component'
import { useI18n } from 'vue-i18n'
import { ref } from 'vue'

@Options({
  components: {
    ToDoListView,
  },
})
export default class App extends Vue {
  state = setup(() => {
    const { t } = useI18n()
    const toDoList = ref<string>(t('NOTIFICATIONS.TO_DO_LIST'))
    return {
      toDoList,
    }
  })
}
</script>
