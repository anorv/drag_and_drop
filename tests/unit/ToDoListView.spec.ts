import ToDoListView from '@/modules/toDoList/components/ToDoListView.vue'
import { shallowMount, VueWrapper } from '@vue/test-utils'
import { globalParams } from './utils/global'
import { dispatchCreateTask } from '@/modules/toDoList/store/todoListDispacher'
import { ToDoTypes } from '@/core/constants/ToDoStatusConstants'

function mountComponent(): VueWrapper<any> {
  return shallowMount(ToDoListView, {
    global: globalParams,
  })
}

describe('ToDoListView', () => {
  describe('view', () => {
    it('renders', () => {
      const consoleSpy = jest.spyOn(console, 'warn')
      mountComponent()
      expect(consoleSpy).toHaveBeenCalledTimes(0)
    })
  })
})
describe('createTask', () => {
  it('create task successfully', async () => {
    const task = await dispatchCreateTask({
      id: 2,
      title: 'test2',
      description: 'test2',
      status: ToDoTypes.Opened,
    })

    expect(task).toMatchSnapshot()
  })
})
