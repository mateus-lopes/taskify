<template>
  <ion-page class="page">
    <ion-content :fullscreen="true">
      <header-app></header-app>
      <ion-grid>
        <ion-row>
          <ion-col>
            <ion-text color="medium">No tasks</ion-text>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import HeaderApp from '@/components/HeaderApp.vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonText } from '@ionic/vue';
</script>