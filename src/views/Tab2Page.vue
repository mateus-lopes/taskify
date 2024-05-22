<template>
  <ion-page class="page">
    <ion-content :fullscreen="true">
      <ion-row class="ion-align-items-center">
        <ion-col size="12">
          <ion-text class="title">Add a new task</ion-text>
        </ion-col>
      </ion-row>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonSegment, IonSegmentButton, IonLabel, IonGrid, IonRow, IonCol, IonText } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
import { apps } from 'ionicons/icons';

</script>

<style scoped>
.title {
  font-size: 2em;
  font-weight: bold;
}
</style>