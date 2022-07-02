<template>
    <button @click='$emit("animation")' class='btn div_btn_add shadow'
        :class='{ active: active_navbar, error_add: error_add_task }'>
        <img :class='{ active: active_navbar, active_add: animation_add }' src='../../assets/img/icon/close_small.svg'
            class='img-fluid span_icon_add' alt='' srcset=''>
    </button>
</template>

<script>
export default {
    props: {
        active_navbar: Boolean,
        animation_add: Boolean,
        error_add_task: Boolean,
    }
}
</script>

<style>
</style>