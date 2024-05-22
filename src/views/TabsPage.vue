<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar :translucent=true slot="bottom">
        <ion-tab-button tab="tab1" href="/tabs/tab1">
          <ion-icon aria-hidden="true" :icon="apps"></ion-icon>
        </ion-tab-button>
        <ion-tab-button id="open-action-sheet">
          <ion-action-sheet trigger="open-action-sheet" header="How would you like to register your new task?" :buttons="actionSheetButtons" @didDismiss="logResult($event)"></ion-action-sheet>
          <ion-icon size="large" aria-hidden="true" :icon="add" />
        </ion-tab-button>



        <ion-modal :is-open="isOpen" :fullscreen="true">
          <ion-header>
            <ion-toolbar>
              <ion-buttons slot="start">
                <ion-button @click="cancel()">Cancel</ion-button>
              </ion-buttons>
              <ion-title
                class="ion-text-center"
              >
                New task
              </ion-title>
              <ion-buttons slot="end">
                <ion-button :strong="true" @click="confirm()">Confirm</ion-button>
              </ion-buttons>
            </ion-toolbar>
          </ion-header>




          <ion-content v-if="modal_type == 'itemsList'">
            <ion-item>
              <ion-input placeholder="List Name"></ion-input>
            </ion-item>
            <ion-item v-for="i in items">
              <ion-label>{{ i.label }}</ion-label>
              <ion-button fill="clear" @click="removeItem(i.id)">
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




          <ion-content
            v-else-if="modal_type == 'simpleTask'"
          >
          <ion-item>
            <ion-textarea
              placeholder="Enter your task here"
              :auto-grow="true"
              :value="simpleTask"
              v-model="simpleTask"
            >
            </ion-textarea>
          </ion-item>
          </ion-content>
          <ion-content v-else-if="modal_type == 'microphone'">
            <ion-title
                class="ion-text-center ion-margin-top ion-padding-top"
              >
                <small>
                  New task using your voice
                </small>
              </ion-title>
          </ion-content>
        </ion-modal>



        <ion-tab-button tab="tab3" href="/tabs/tab3">
          <ion-icon aria-hidden="true" :icon="person" />
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { apps, add, person, mic, checkmarkDone, list, close } from 'ionicons/icons';
import { OverlayEventDetail } from '@ionic/core';
import { IonButton, IonIcon, IonTabs, IonTabBar, IonTabButton, IonRouterOutlet, IonPage, IonContent, IonTitle, IonHeader, IonToolbar, IonSegment, IonSegmentButton, IonLabel, IonGrid, IonRow, IonCol, IonText, IonAvatar, IonModal, IonInput, IonItem, IonButtons, IonActionSheet } from '@ionic/vue';

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

const getTitle = (type: string) => computed(() => {
  switch (type) {
    case 'microphone':
      return 'New task using your voice';
    case 'simpleTask':
      return 'New simple task';
    case 'itemsList':
      return 'New list of items';
    default:
      return 'New task';
  }
});

const cancel = () => isOpen.value = false;

const confirm = () => isOpen.value = false;

const removeItem = (id: number) => {
  items.value = items.value.filter(i => i.id !== id);
}

const addItem = () => {
  console.log(newItem)
  items.value = [...items.value, {
    label: newItem.value,
    id: items.value.length + 1,
  }];
  newItem.value = '';
  input.value.$el.setFocus();
}


</script>