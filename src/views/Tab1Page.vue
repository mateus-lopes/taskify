<template>
  <ion-page class="page">
    <ion-row class="ion-align-items-center">
      <ion-col size="10">
        <ion-text class="title">My tasks</ion-text>
      </ion-col>
      <ion-col size="2">
        <ion-avatar @click.stop="goProfile()" >
        <img v-if="user.photoUrl != ''" :alt="user.name" :src="user.photoUrl" />
        <img v-else :alt="user.name" src="https://practice365.co.uk/a82023/wp-content/uploads/sites/1113/2023/05/Default-Profile-Picture-Transparent.png" />
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
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonSegment, IonSegmentButton, IonLabel, IonGrid, IonRow, IonCol, IonText } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
import { apps, checkmarkDoneOutline, checkmarkOutline
 } from 'ionicons/icons';

const router = useRouter()

const user = ref({
  name: 'Full Name',
  email: 'email',
  // photoUrl: 'https://avatars.githubusercontent.com/u/50590861?v=4?s=400'
  photoUrl: ''
})

const goProfile = () => {
  router.push('/tabs/tab3')
}

</script>

<style scoped>
.title {
  font-size: 2em;
  font-weight: bold;
}
</style>