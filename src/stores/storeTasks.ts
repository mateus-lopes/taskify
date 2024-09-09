import { defineStore } from 'pinia'
import { ref, computed, reactive } from 'vue'
import { serviceGetTasks, serviceAddTask, serviceRemoveTask, serviceUpdateTask } from '@/service/serviceTasks'
import { ITask, IListTask, ITaskStore } from '@/types/typeTasks'

export const useTaskStore = defineStore<"task", ITaskStore>(
  "task",
  () => {
    const loading = ref(false);
    const state = reactive({
      tasks: [] as Array<ITask | IListTask>,
    });
    
    const isLoading = computed(() => loading);
    const taskCount = computed(() => state.tasks.length);
    const tasks = computed(() => state.tasks);

    const getTasks = async () => {
      console.log('pinia: Getting tasks');
      loading.value = true;
      const data = await serviceGetTasks();
      console.log('pinia: Documents:', data)
      state.tasks = data;
      console.log('pinia: Comp:', tasks.value)
      loading.value = false;
    };
    const addTask = async (task: ITask | IListTask) => {
      console.log('pinia: Adding task:', task);
      loading.value = true;
      await serviceAddTask(task);
      await getTasks('');
      loading.value = false;
    }
    const removeTask = async (task: ITask | IListTask) => {
      loading.value = true;
      await serviceRemoveTask(task);
      await getTasks('');
      loading.value = false;
    }
    const updateTask = async (task: ITask | IListTask) => {
      loading.value = true;
      await serviceUpdateTask(task);
      await getTasks('');
      loading.value = false;
    }

    return {
      getTasks,
      addTask,
      removeTask,
      updateTask,
      taskCount,
      isLoading,
      tasks,
    };
  }
);