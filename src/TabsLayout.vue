<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar :translucent=true slot="bottom">
        <ion-tab-button tab="app" href="/app">
          <ion-icon aria-hidden="true" :icon="apps"></ion-icon>
        </ion-tab-button>
        <ion-tab-button id="open-action-sheet">
          <ion-action-sheet trigger="open-action-sheet" header="How would you like to register your new task?"></ion-action-sheet>
          <ion-icon size="large" aria-hidden="true" :icon="add" />
        </ion-tab-button>
        <ion-tab-button tab="user" href="/app/user">
          <ion-icon aria-hidden="true" :icon="person" />
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import { apps, add, person } from 'ionicons/icons';
import { IonIcon, IonTabs, IonTabBar, IonTabButton, IonRouterOutlet, IonPage, IonActionSheet } from '@ionic/vue';
</script>