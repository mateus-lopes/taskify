<template>
  <ion-page class="page">
    <ion-row class="ion-justify-content-center ion-padding-top">
      <ion-avatar @click.stop="isOpen = true" >
        <img v-if="user.photoUrl != ''" :alt="user.name" :src="user.photoUrl" />
        <img v-else :alt="user.name" src="https://practice365.co.uk/a82023/wp-content/uploads/sites/1113/2023/05/Default-Profile-Picture-Transparent.png" />
      </ion-avatar>
      <ion-modal :is-open="isOpen" :fullscreen="true">
        <ion-header>
          <ion-toolbar>
            <ion-buttons slot="start">
              <ion-button @click="isOpen = false">Cancel</ion-button>
            </ion-buttons>
            <ion-title
              class="ion-text-center"
            >
              Profile Picture
            </ion-title>
            <ion-buttons slot="end">
              <ion-button :strong="true">Confirm</ion-button>
            </ion-buttons>
          </ion-toolbar>
        </ion-header> 
        <ion-content>
          <ion-title
            class="ion-text-center ion-margin-top ion-padding"
          >
            <small v-if="user.photoUrl === ''">
                Take a picture or select one from your gallery
              </small>
              <small v-else>
                {{ user.photoUrl }}
              </small>
            </ion-title>
            <ion-grid>
              <ion-row class="ion-justify-content-center">
                <ion-button size="large">
                  <ion-icon slot="icon-only" :icon="camera"></ion-icon>
                </ion-button>
                <ion-button size="large" color="medium">
                  <ion-icon slot="icon-only" :icon="imageOutline"></ion-icon>
                </ion-button>
                <ion-button size="large" color="danger">
                  <ion-icon slot="icon-only" :icon="trashOutline"></ion-icon>
                </ion-button>
              </ion-row>
              <ion-row class="ion-justify-content-center">
                <!-- example picture -->
                <ion-grid class="ion-margin ion-padding" >
                <img v-if="user.photoUrl !== ''" shape="round" :src="user.photoUrl" />
              </ion-grid>
            </ion-row>
            </ion-grid>
        </ion-content>
      </ion-modal>
    </ion-row>
    <ion-content>
      <ion-title class="ion-no-padding name">
        {{ user.name }}
      </ion-title>
      <ion-text color="medium email">
        {{ user.email }}
      </ion-text>
    </ion-content>
    <ion-button shape="round" fill="clear" expand="full" color="medium">change password</ion-button>
    <ion-button shape="round" fill="clear" expand="full" color="danger">Logout</ion-button>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { camera, imageOutline, trashOutline } from 'ionicons/icons';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonSegment, IonSegmentButton, IonLabel, IonGrid, IonRow, IonCol, IonText, IonAvatar, IonModal, IonButton, IonIcon } from '@ionic/vue';

const isOpen = ref(false);

const cancel = () => {
  isOpen.value = false;
}

const user = ref({
  name: 'Full Name',
  email: 'email',
  // photoUrl: 'https://avatars.githubusercontent.com/u/50590861?v=4?s=400'
  photoUrl: ''
})

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