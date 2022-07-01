<template>
    <div>
        <ul v-if='tasks.length != 0' class='list-unstyled'>
            <li v-for='(task, index) in tasks' :key='index'>
                <label class='label_checkbox'>
                    <div class='div_wrapper'>
                        <input @click='checked(index)' v-model='task.checked' type='checkbox' class='check_task' />
                        <span class='span_checkbox'></span>
                    </div>
                    <span class='span_name' :class='{"removed":task.checked}'>{{task.title}}</span>
                </label>
            </li>
        </ul>
        <ul v-else class='list-unstyled'>
            <li class='text-muted'>
                {{ empty_list }}
            </li>
        </ul>
    </div>
</template>
  
<script>
export default {
    props: {
        tasks:Array,
    },
    data() {
        return {
            // lista definida estaticamente
            empty_list: 'Sua lista está vazia...',
        }
    },
    methods: {
        // emit
        checked(index) {
            this.$emit('check',index)
        },
    }
}
</script>

<style>

/* - checkbox - */

.label_checkbox {
    display: felx;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

.label_checkbox .div_wrapper {
    display: inline-block;
    width: .9em;
    height: .9em;
    position: relative;
}

.label_checkbox .span_checkbox {
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

.label_checkbox .span_checkbox::before {
    position: absolute;
    content: '';
    width: 151%;
    height: 145%;
    top: -2px;
    left: 1px;
    right: 1px;
    bottom: 0px;
    left: -2.5px;
    bottom:  2px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 100%;
    background-color: transparent;
    transition: all .1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.label_checkbox .check_task:checked + .span_checkbox::before {
    background-color: #fff;
    border: 2.2px solid #868686;
}

.label_checkbox .span_name {
    padding-left: .3rem;
    transition: all .6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.label_checkbox .span_name.removed {
    text-decoration: line-through;
    color: #868686;
}


.label_checkbox .check_task {
    opacity: 0;
    display: none;
}

</style>