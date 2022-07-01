<template>
    <button @click='$emit("animation")' :class='{active:active_task,active:key}' class='btn div_btn_close shadow z-1'>   
        <img :class='{active:active_task, active:key}' src='../../assets/img/icon/close_small.svg' class='img-fluid span_icon_close' alt='' srcset=''>
    </button>
</template>

<script>
export default {
    emits: ['animation'],
    props: {
        active_task:Boolean,
        key:Boolean,
    }
}
</script>

<style>

</style>