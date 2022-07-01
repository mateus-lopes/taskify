<template>
  <div  class='py-4 container'>
    <TitleList  :title='title_special' :description='description_special' :src_user='src_user' />
    <TasksList @check="checked" :tasks='tasks' />
    <NavBar @delete_all="delete_tasks" @update_description="update_description" @update_title="update_title" @dark_mode="dark_mode" @delete_auto="delete_auto" @add_task="add_task" :title='title' :description='description' :dark="dark" :delete_auto_check='delete_auto_check' />
  </div>
</template>

<script>
    import TitleList from './components/ListTitle.vue'
    import TasksList from './components/TasksList.vue'
    import NavBar from './components/NavBar.vue'
    // so vem vagabunda
    export default {
    name: 'App',
    components: {
        TitleList,
        TasksList,
        NavBar,
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
        add_task(item){
            this.tasks.push({
                title: item, checked: false
            })
        },
        delete_tasks(){
            this.tasks = []
        },
        delete_auto(){
            (this.delete_auto_check == true) ? this.delete_auto_check = false : this.delete_auto_check = true
            console.log('delete_auto', this.delete_auto_check)
        },
        dark_mode(){
            (this.dark == true) ? this.dark = false : this.dark = true
            console.log('dark_mode', this.dark)
        },
        checked(index) {
            if(this.delete_auto_check == true){

                setTimeout(() => {
                    if(this.delete_auto_check == true){
                        this.tasks.splice(parseInt(index), 1)
                    }
                }, 400)
            }
        },
        update_description(value) {
            this.description = value
        },
        update_title(value){
            this.title = value
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
