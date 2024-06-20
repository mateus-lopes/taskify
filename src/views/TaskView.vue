<template>
    <ion-page>
        <ion-content class="ion-padding">
            <ion-grid class="flex">
                <ion-button class="flex-item" expand="full" :color="modalType === 'itemsList' ? 'primary' : 'light'" @click="openModal('itemsList')">
                    <ion-icon slot="icon-only" :icon="list">List</ion-icon>
                </ion-button>
                <ion-button class="flex-item" expand="full" :color="modalType === 'simpleTask' ? 'primary' : 'light'" @click="openModal('simpleTask')">
                    <ion-icon slot="icon-only" :icon="checkmarkDone">Simple</ion-icon>
                </ion-button>
                <ion-button class="flex-item" expand="full" :color="modalType === 'microphone' ? 'primary' : 'light'" @click="openModal('microphone')">
                    <ion-icon slot="icon-only" :icon="mic">Microphone</ion-icon>
                </ion-button>
            </ion-grid>

            <ion-content  v-if="modalType === 'itemsList'">
                <ion-item class="bg-transparent">
                    <ion-input placeholder="List Name"></ion-input>
                </ion-item>
                <ion-item class="bg-transparent" v-for="item in items" :key="item.id">
                    <ion-label>{{ item.label }}</ion-label>
                    <ion-button fill="clear" @click="removeItem(item.id)">
                        <ion-icon color="danger" :icon="close"></ion-icon>
                    </ion-button>
                </ion-item>
                <ion-item>
                    <ion-input ref="input" :autofocus="true" v-model="newItem" placeholder="New Item"></ion-input>
                    <ion-button @click="addItem()" size="small">
                        <ion-icon :icon="add"></ion-icon>
                    </ion-button>
                </ion-item>
            </ion-content>

            <ion-content class="bg-transparent" v-else-if="modalType === 'simpleTask'">
                <ion-item>
                    <ion-textarea placeholder="Enter your task here" :auto-grow="true" v-model="simpleTask"></ion-textarea>
                </ion-item>
            </ion-content>

            <ion-content class="bg-transparent" v-else-if="modalType === 'microphone'">
                <ion-title class="ion-text-center ion-margin-top ion-padding-top">
                    <small>New task using your voice</small>
                </ion-title>
            </ion-content>
        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { mic, checkmarkDone, list, close, add } from 'ionicons/icons';

const isOpen = ref(false);
const modalType = ref('simpleTask');
const items = ref([]);
const newItem = ref('');
const simpleTask = ref('');

const openModal = (type: string) => {
    modalType.value = type;
    isOpen.value = true;
};

const cancel = () => {
    isOpen.value = false;
};

const confirm = () => {
    // Handle confirm logic here
    isOpen.value = false;
};

const addItem = () => {
    // Handle adding item logic here
    newItem.value = '';
};

const removeItem = (id: number) => {
    // Handle removing item logic here
};

</script>

<style scoped>
/* Add your custom styles here */
.block {
    display: block;
}
.flex {
    display: flex;
    justify-content: center;
    gap: 0;
    padding: 0;
    margin: 0;
}
.flex-item {
    flex: 1;
    margin: 0;
}
</style>