const vm_todoList = Vue.createApp({

    data() {
        return {

            // header
            title: 'Lista de Tarefas',
            description: "Como é bom ter uma vida mais organizada",

            // tasks
            new_task: '',
            tasks: [],

            // animations
            key: true,
            animation_add: true,
            active_task: true,
            active_config: false,
            error_add_task: false,

            // functionalities
            delete_auto: true,
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

}).mount('#app')

