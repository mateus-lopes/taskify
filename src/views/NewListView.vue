<script setup>
import { ref } from 'vue';
import { close, add, chevronForwardOutline, flashOffOutline, checkmarkOutline, arrowBackOutline } from 'ionicons/icons';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonInput, IonButton, IonIcon, IonLabel } from '@ionic/vue';
import { useRouter } from 'vue-router';
import { collection, addDoc } from 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const router = useRouter();
const items = ref([]);
const newItem = ref('');
const listTitle = ref('');
const focus = ref(false);

const addItem = () => {
    items.value.push({ id: items.value.length, label: newItem.value });
    newItem.value = '';
    focus.value = true;
};

const removeItem = (id) => {
    items.value = items.value.filter(item => item.id !== id);
};

const navigateTo = (path) => {
    router.push(path);
};

const db = getFirestore();
const auth = getAuth();

const addNewList = async () => {
    if (!listTitle.value) {
        console.log('List Title is required');
        return;
    } else if (items.value.length === 0) {
        console.log('Items are required');
        return;
    }

    try {
        const user = auth.currentUser;
        const docRef = await addDoc(collection(db, 'tasks'), {
            title: listTitle.value,
            items: items.value,
            authorUid: user.uid
        });
        console.log('Document written with ID: ', docRef.id);
    } catch (error) {
        console.error('Error adding document: ', error);
    }
    navigateTo('/')
};
</script>


<template>
    <ion-page>
        <ion-header> 
            <ion-toolbar class="pt-1">
                <ion-icon slot="start" class="ion-padding cursor-pointer" :icon="arrowBackOutline" size="small" @click="navigateTo('/')"></ion-icon>
                <ion-title>
                    <ion-input placeholder="Enter List Name" v-model="listTitle"></ion-input>
                </ion-title>
                <ion-button slot="end" class="mr-1" @click="addNewList()">
                    <ion-icon :icon="checkmarkOutline" size="default"></ion-icon>
                     <!-- save -->
                </ion-button>
            </ion-toolbar>
        </ion-header>

        <ion-content :fullscreen="true">
            <div class="empty-icon" v-if="items.length === 0">
                <ion-icon :icon="flashOffOutline" color="light"></ion-icon>
            </div>
            <ion-item class="bg-transparent" v-for="item in items" :key="item.id">
                <ion-input class="pa-1" ref="input" :autofocus="true" v-model="item.label" placeholder="New Item">
                    <ion-icon slot="start" :icon="chevronForwardOutline" aria-hidden="true"></ion-icon>
                </ion-input>
                <ion-button fill="clear" @click="removeItem(item.id)">
                    <ion-icon color="danger" :icon="close"></ion-icon>
                </ion-button>
            </ion-item>
            <ion-item class="add-div">
                <ion-icon :icon="chevronForwardOutline"></ion-icon>
                <ion-input ref="input" class="pa-2" :autofocus="true" v-model="newItem" placeholder="New Item"></ion-input>
                <ion-button @click="addItem()" size="small">
                    <ion-icon :icon="add"></ion-icon>
                </ion-button>
            </ion-item>
        </ion-content>
    </ion-page>
</template>

<style scoped>
.pt-1 {
    padding: 1rem 0 .5rem 0 !important;
}
.add-div {
    position: fixed;
    bottom: 0;
    width: 100%;
}
.mr-1 {
    margin-right: 1rem;
}
.pa-1 {
    padding: .5rem 0 !important;
}
.pa-2 {
    padding: 1rem !important;
}
.empty-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 3rem;
}
</style>