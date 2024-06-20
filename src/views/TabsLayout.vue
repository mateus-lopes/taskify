<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar :translucent=true slot="bottom">
        <ion-tab-button tab="app" href="/app">
          <ion-icon aria-hidden="true" :icon="apps"></ion-icon>
        </ion-tab-button>
        <ion-tab-button tab="task" href="/task">
          <ion-action-sheet trigger="open-action-sheet" header="How would you like to register your new task?" :buttons="actionSheetButtons" @didDismiss="logResult($event)"></ion-action-sheet>
          <ion-icon size="large" aria-hidden="true" :icon="add" />
        </ion-tab-button>
        <ion-tab-button tab="user" href="/user">
          <ion-icon aria-hidden="true" :icon="person" />
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { apps, add, person, mic, checkmarkDone, list, close } from 'ionicons/icons';
import { IonButton, IonIcon, IonTabs, IonTabBar, IonTabButton, IonRouterOutlet, IonPage, IonContent, IonTitle, IonHeader, IonToolbar, IonLabel, IonGrid, IonRow, IonCol, IonText, IonAvatar, IonModal, IonInput, IonItem, IonButtons, IonActionSheet } from '@ionic/vue';

const isOpen = ref();
const items = ref([])
const input = ref();
const modal_type = ref('');
const simpleTask = ref('');
const newItem = ref('');
const actionSheetButtons = [
  {
    text: 'Mic',
    role: 'microphone',
    icon: mic,
  },
  {
    text: 'Simple Task',
    role: 'simpleTask',
    icon: checkmarkDone,
  },
  {
    text: 'Items list',
    role: 'itemsList',
    icon: list,
    handler: 'itemsListAction',
  },
]

const logResult = (ev: CustomEvent) => {
  isOpen.value = true;
  modal_type.value = ev.detail.role;
};

const cancel = () => isOpen.value = false;

const confirm = () => isOpen.value = false;

const removeItem = (id: number) => {
  items.value = items.value.filter((i: { id: number }) => i.id !== id);
}

const addItem = () => {
  console.log(newItem)
  items.value = [...items.value, {
    label: newItem.value,
    id: items.value.length + 1,
  }] as { label: string; id: number; }[];
  newItem.value = '';
  input.value.$el.setFocus();
}


</script>