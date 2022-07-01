<template>
  <div  class='py-4 container'>
    <TitleList  :title='title' :description='description' :src_user='src_user' />
    <TasksList  :tasks='tasks' />
    <TaskButton :title='title' :description='description' :src_user='src_user' :delete_auto_check='delete_auto_check' />
  </div>
</template>

<script>
import TitleList from './components/ListTitle.vue'
import TasksList from './components/TasksList.vue'
import TaskButton from './components/NavBar.vue'
// so vem vagabunda
export default {
  name: 'App',
  components: {
    TitleList,
    TasksList,
    TaskButton,
  },
  data() {
    return {

    // header
    title: 'Lista de Tarefas 2',
    description: 'Como é bom ter uma vida mais organizada',
    src_user: '../assets/img/users/user_default.png',

    // tasks
    tasks: [],

    // functionalities
    delete_auto_check: true,
    dark: false,
  }
  },
  methods: {
      animation_add_task(){
          if(this.active_config == true){
              this.active_config = false
              this.key = false
          } else{
              if(this.active_task == false) {
                  this.active_task = true 
                  this.key = true
              }else{
                  this.active_task = false
                  this.key = false
              } 
          }
      },
      edit_config(){
          if(this.active_config == false) {
              this.active_task = false
              this.key = true
              this.active_config = true 
          }
      },
      add_task(){
          if(this.new_task != ''){
              this.tasks.push({
                  title: this.new_task, checked: false
              })
              this.new_task = '';
              (this.animation_add == true) ? this.animation_add = false : this.animation_add = true
          }else{
              (this.error_add_task == true) ? this.error_add_task = false : this.error_add_task = true
          }
      },
      delete_tasks(){
          this.tasks = []
      },
      checked(index) {
          setTimeout(() => {
              if(this.delete_auto == true){this.tasks.splice(parseInt(index), 1)}
          }, 300)
      }
  },
  computed: {
      title_special(){
          if(this.title.length > 20) {
              return this.title.slice(0, 19) + '...'
          }else{
              return this.title
          }
      },
      description_special(){
        if(this.description.length > 88) {
          return this.description.slice(0, 87) + '...'
        }else{
          return this.description
      }
    },
  }
}

</script>

<style>

input, textarea, input:focus, textarea:focus {
  border-radius: 15px !important;
  outline: 0;
  resize:none;
  background: dotted;
}

</style>
