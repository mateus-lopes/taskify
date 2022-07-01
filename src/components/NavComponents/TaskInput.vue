<template>
    <div :class='{active:active_task}' class='div_input'>
        <textarea @keyup.enter='add_task' v-model='new_task' class='form-control' placeholder='Adicionar uma Tarefa...' name='input_task'></textarea>
    </div>
</template>

<script>
export default {
    props: {
        active_task:Boolean,
    }
}
</script>

<style>

</style>