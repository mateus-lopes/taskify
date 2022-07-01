<template>
    <div @keyup.esc="hidden_configs" class='div_add_task'>
        <div class='row'>
            <div class='div_wrapper py-2'>
                <AddBtn @animation="add_task" :active_navbar="active_navbar" :error_add_task="error_add_task" />
                <ConfigBtn @update_title="update_title" @update_description="update_description"
                    @animation="show_configs" @delete_tasks="delete_tasks" @delete_auto="delete_auto" :title="title"
                    :delete_auto_check="delete_auto_check" :description="description" :active_navbar="active_navbar"
                    :active_config="active_config" />
                <NavBtn @animation="show_navbar" :active_navbar="active_navbar" :key_animation="key_animation" />
            </div>
            <div class='col-12'>
                <div :class='{ active: active_navbar }' class='div_input'>
                    <textarea @keyup.enter='add_task' v-model='new_task' class='form-control'
                        placeholder='Adicionar uma Tarefa...' name='input_task'></textarea>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AddBtn from './NavComponents/AddBtn.vue'
import ConfigBtn from './NavComponents/ConfigBtn.vue'
import NavBtn from './NavComponents/NavBtn.vue'
export default {
    components: {
        AddBtn,
        ConfigBtn,
        NavBtn,
    },
    props: {
        delete_auto_check: Boolean,
        dark: Boolean,
        title: String,
        description: String,
    },
    data() {
        return {

            new_task: '',

            // animations
            key_animation: true,
            animation_add: true,
            active_navbar: true,
            active_config: false,
            error_add_task: false,

        }
    },
    methods: {
        hidden_configs() {
            if (this.active_config == true) {
                this.active_config = false
                this.key_animation = false
                this.active_navbar = true
                this.key_animation = true
            }
        },
        show_navbar() {
            if (this.active_config != true) {
                if (this.active_navbar == false) {
                    this.active_navbar = true
                    this.key_animation = true
                } else {
                    this.active_navbar = false
                    this.key_animation = false
                }
            } else {
                this.hidden_configs()
            }
        },
        show_configs() {
            if (this.active_config == false) {
                this.active_navbar = false
                this.key_animation = true
                this.active_config = true
            }
        },
        update_title(value) {
            this.$emit('update_title', value)
        },
        update_description(value) {
            this.$emit('update_description', value)
        },
        delete_tasks() {
            this.$emit('delete_tasks')
        },
        add_task() {
            this.new_task = this.new_task.trim();
            let clean_task = this.new_task.replace('\n', '') != ''
            if (clean_task) {
                this.$emit('add_task', this.new_task)
                this.new_task = '';
                (this.animation_add == true) ? this.animation_add = false : this.animation_add = true
            } else {
                (this.error_add_task == true) ? this.error_add_task = false : this.error_add_task = true
                this.new_task = '';
            }
        },
        delete_auto() {
            this.$emit('delete_auto')
        }
    },
}
</script>

<style>
/* - btn e input add_task - */

.div_add_task {
    position: fixed;
    bottom: 1em;
    right: 1em;
}

.div_add_task .div_btn_close {
    width: 3.5rem;
    height: 3.5rem;
    background-color: #3f97af;
    border-radius: 100%;
    margin: 0 0 0 .5em;
    padding: .65em;
    box-sizing: border-box;
    cursor: pointer;
}

.div_add_task .div_btn_add {
    width: 3.5rem;
    height: 3.5rem;
    background-color: #3f97af;
    border-radius: 50%;
    margin: 0 -3.5rem 0 0;
    padding: .6em;
    box-sizing: border-box;
    transition: all .4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    cursor: pointer;
}

.div_add_task .div_icon_config {
    position: relative;
    width: 3.5rem;
    height: 3.5rem;
    background-color: transparent;
    border-radius: 50%;
    margin: 0 -4rem 0 0;
    padding: .85em .88em .88em .88em;
    box-sizing: border-box;
    transition: all .4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    cursor: pointer;
}



.div_add_task .div_icon_config.active {
    background-color: #0c4150;
    margin: 0 0 0 .5em;
}

.div_add_task .div_btn_add.active {
    background-color: #3f97af;
    margin: 0 0 0 .5em;
}

.div_add_task .div_btn_close.active {
    background-color: #ba2d3b;
}

.div_add_task .span_icon_close {
    transform: rotate(45deg);
    transition: all .5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.div_add_task .span_icon_add.active {
    transform: rotate(45deg);
    transition: all .5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.div_add_task .span_icon_add.active_add {
    transform: rotate(-225deg);
}

.div_add_task .span_icon_close.active {
    transform: rotate(360deg);
}

.div_add_task .div_wrapper {
    display: flex;
    justify-content: right;
    width: 100%;
    box-sizing: border-box;
    padding-right: 2.2em;
    padding-bottom: .5em;
}

.div_add_task .div_input {
    height: 1px;
    width: 1px;
    display: none;
    overflow: hidden;
    margin-bottom: 1em;
    margin-right: 1em;
    margin-left: 1em;
    background-color: transparent;
    transition: all 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.div_add_task .div_input.active {
    height: auto;
    width: auto;
    display: block;
    overflow: visible;
}

.div_add_task .div_input textarea {
    font-weight: 500;
    background-color: #8ec6d5;
    border-radius: 10px;
    padding-top: 1em;
    height: 5.5rem;
    color: #0c4150;
}

.div_add_task .div_input textarea::placeholder {
    font-weight: 500;
    color: #0c4150;
}

.error_add {
    animation: error_add .5s ease-in-out;
}

@keyframes error_add {
    0% {
        transform: translateX(1.5px);
    }

    25% {
        transform: translateX(-1.6px);
    }

    50% {
        transform: translateX(1.5px);
    }

    75% {
        transform: translateX(-1.6px);
    }

    100% {
        transform: translateX(1.5px);
    }
}

/* -- modal -- */

.modal-content {
    width: 100%;
    background-color: transparent;
    border-radius: 20px;
    border: none;
    padding: .5em 2em;
    margin-top: 10%;
}

#title_task {
    color: #444;
    background-color: #fff;
    padding: .5em 1em;
}

#description_task {
    color: #444;
    background-color: #fff;
    padding: .5em 1em;
}

.modal-content .label_checkbox {
    display: felx;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

.modal-content .label_checkbox .div_wrapper {
    display: inline-block;
    width: .9em;
    height: .9em;
    position: relative;
}

.modal-content .label_checkbox .span_checkbox {
    position: absolute;
    top: 2px;
    left: 1px;
    right: 1px;
    bottom: 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 100%;
    background-color: transparent;
    border: 2px solid #3f97af;
}

.modal-content .label_checkbox .span_checkbox::before {
    position: absolute;
    content: '';
    width: 151%;
    height: 145%;
    top: -2px;
    left: 1px;
    right: 1px;
    bottom: 0px;
    left: -2.5px;
    bottom: 2px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 100%;
    background-color: transparent;
    transition: all .1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.modal-content .label_checkbox .check_task:checked+.span_checkbox::before {
    background-color: #fff;
    border: 2.2px solid #868686;
}

.modal-content .label_checkbox .span_name {
    padding-left: .3rem;
    transition: all .6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.modal-content .label_checkbox .span_name.removed {
    text-decoration: line-through;
    color: #868686;
}

.modal-content .label_checkbox .check_task {
    opacity: 0;
    display: none;
}

/* switch */

.switch_box {
    position: relative;
    display: inline-block;
    width: 2.5em;
    height: 1.5em;
}

.switch_box input {
    opacity: 0;
    width: 0;
    height: 0;
}

.switch {
    position: absolute;
    border-radius: 1em;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #3f97af;
    transition: all .3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.switch:before {
    position: absolute;
    border-radius: 1em;
    content: '';
    height: 1em;
    width: 1em;
    left: 4px;
    bottom: 4px;
    background-color: #fff;
    -webkit-transition: .4s;
    transition: .4s;
}

input:checked+.switch::before {
    background-color: #0c4150;
}

input:checked+.switch:before {
    -webkit-transform: translateX(1em);
    -ms-transform: translateX(1em);
    transform: translateX(1em);
}

.z-1 {
    z-index: 2;
}

.nav_wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 1px;
    height: 1px;
    overflow: hidden;
    display: block;
    opacity: 0;
    color: #fff;
    animation: box_shadow_reverse .15s ease-in-out;
}

.nav_wrapper.active_function {
    display: block;
    opacity: 1;
    width: 100%;
    height: 100%;
    box-shadow: 0 0 0 10vw #0c4150, 0 0 0 10vh #0c4150;
    background-color: #0c4150;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    overflow: hidden;
    animation: box_shadow .3s ease-in-out;
}

@keyframes box_shadow {
    0% {
        width: 100%;
        height: 100%;
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

@keyframes box_shadow_reverse {
    0% {
        width: 100%;
        height: 100%;
        opacity: 1;
    }

    100% {
        width: 100%;
        height: 100%;
        opacity: 0;
    }
}

.btn-danger {
    border-radius: 30px;
}
</style>