<template>
    <button @click='$emit("animation")' class='btn div_icon_config' :class='{ active: active_navbar }'>
        <img src='../../assets/img/icon/settings.svg' class='img-fluid' alt='' srcset=''>
        <span class='btn nav_wrapper' :class='{ active_function: active_config }'>
            <!-- nav_settings -->
            <div class='modal-content'>
                <div class='modal-header pt-1 pb-0'>
                    <p class='pt-2 text-light'><strong>Configurações</strong></p>
                </div>
                <div class='modal-body'>
                    <div class='row'>
                        <div class='col-12 pt-1'>
                            <input :class="{'bg-dark':theme_dark, 'text-light':theme_dark, 'border-dark':theme_dark}" @keyup="update_title" v-model="value_title" type='text' class='form-control'
                                placeholder='Carregando...' />
                        </div>
                        <div class='col-12 pt-3'>
                            <textarea :class="{'bg-dark':theme_dark,'text-light':theme_dark, 'border-dark':theme_dark}"

                            @keyup="update_description"
                            
                            v-model="value_description" type='text' rows='5'
                                class='form-control' placeholder='Carregando...'></textarea>
                            <div>
                                <div class='col-12 text-left px-0 pt-4'>
                                    <label class='d-block'>
                                        <div class='switch_box text-danger'>
                                            <input @click="$emit('delete_auto')" :checked='delete_auto_check' type='checkbox'>
                                            <span class='switch round'></span>
                                        </div>
                                        <span class='span_name pl-2 text-light'>Excluir Tarefas Concluidas</span>
                                    </label>
                                    <label class='d-block py-2'>
                                        <div class='switch_box text-danger'>
                                            <input @click="$emit('dark_mode')" :checked='theme_dark' type='checkbox'>
                                            <span class='switch round'></span>
                                        </div>
                                        <span class='span_name pl-2 text-light'>Tema Escuro</span>
                                    </label>
                                </div>
                                <label class='d-flex'>
                                    <span @click='$emit("delete_tasks")' class='btn px-4 btn-secondary mt-2'>Limpar
                                        Todas as
                                        Tarefas</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </span>
    </button>
</template>

<script>
export default {
    props: {
        title: String,
        description: String,
        delete_auto_check: Boolean,
        active_navbar: Boolean,
        active_config: Boolean,
        theme_dark: Boolean,
    },
    data() {
        return {
            value_title: this.title,
            value_description: this.description
        }
    },
    methods: {
        update_title(event){
            this.$emit('update_title', event.target.value)
        },
        update_description(event) {
            this.$emit('update_description', event.target.value)
        }
    }
}
</script>

<style>
</style>