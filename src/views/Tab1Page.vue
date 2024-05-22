<template>
  <ion-page class="page">
    <ion-row class="ion-align-items-center">
      <ion-col size="10">
        <ion-text class="title">My tasks</ion-text>
      </ion-col>
      <ion-col size="2">
        <ion-avatar>
          <img alt="Silhouette of a person's head" src="https://avatars.githubusercontent.com/u/50590861?v=4?s=400" />
        </ion-avatar>
      </ion-col>
    </ion-row>
    <ion-content class="ion-padding-top">
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
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonSegment, IonSegmentButton, IonLabel, IonGrid, IonRow, IonCol, IonText } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
import { apps, checkmarkDoneOutline, checkmarkOutline
 } from 'ionicons/icons';

</script>

<style scoped>
.title {
  font-size: 2em;
  font-weight: bold;
}
</style>