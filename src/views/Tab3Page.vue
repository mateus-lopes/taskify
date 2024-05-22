<template>
  <ion-page class="page">
    <ion-row class="ion-justify-content-center">
        <ion-avatar>
          <img alt="Silhouette of a person's head" src="https://avatars.githubusercontent.com/u/50590861?v=4?s=400" />
        </ion-avatar>
    </ion-row>
    <ion-content>
      <ion-title class="ion-no-padding name">
        Mateus Lopes Albano
      </ion-title>
      <ion-text color="medium email">
        mateusalbano22@gmail.com
      </ion-text>
    </ion-content>
    <ion-button shape="round" fill="clear" expand="full" color="medium">reset account</ion-button>
    <ion-button shape="round" fill="clear" expand="full" color="danger">Logout</ion-button>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonSegment, IonSegmentButton, IonLabel, IonGrid, IonRow, IonCol, IonText } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
import { apps } from 'ionicons/icons';
import { computed } from 'vue';
</script>

<style scoped>
.title {
  font-size: 2em;
  font-weight: bold;
}

.name {
  text-align: center;
  padding-top: 1.7em;
  font-weight: bold;
}

.email {
  text-align: center;
  display: block;
  padding-top: .5em;
  font-size: .9em;
}

</style>