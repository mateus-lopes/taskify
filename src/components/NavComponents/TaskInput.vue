<template>
    <div :class='{active:active_navbar}' class='div_input'>
        <textarea @keyup.enter="$emit('add', task_value)" v-model='task_value' class='form-control' placeholder='Adicionar uma Tarefa...' name='input_task'></textarea>
    </div>
</template>

<script>
export default {
    props: {
        active_navbar:Boolean,
        new_task:String
    },
    data(){
        return {
            task_value: this.new_task,
        }
    }
}
</script>

<style>

</style>