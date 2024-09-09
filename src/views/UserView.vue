<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { camera, imageOutline, trashOutline, close } from 'ionicons/icons';
import { IonAvatar, IonButton, IonButtons, IonContent, IonGrid, IonHeader, IonIcon, IonModal, IonPage, IonRow, IonTitle, IonToolbar, IonText } from '@ionic/vue';
import { useUserStore } from '@/stores/storeUser';

const userStore = useUserStore();
const isOpen = ref(false);

onMounted(() => {
  userStore.getUserData();
});
</script>

<template>
  <ion-page class="m-page">
    <ion-fab vertical="start" horizontal="end">
      <router-link to="/app" class="p-close">
        <ion-icon :icon="close" class="medium-font" color="dark"></ion-icon>
      </router-link>
    </ion-fab>
      <ion-row class="ion-justify-content-center ion-padding-top">
        <ion-avatar @click.stop="isOpen = true" class="cursor-pointer">
          <img :alt="userStore.state.name" :src="userStore.state.photoUrl" />
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
              <small v-if="userStore.state.photoUrl === ''">
                  Take a picture or select one from your gallery
                </small>
                <small v-else>
                  {{ userStore.state.photoUrl }}
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
                  <ion-grid class="ion-margin ion-padding" >
                  <img v-if="userStore.state.photoUrl !== ''" shape="round" :src="userStore.state.photoUrl" />
                </ion-grid>
              </ion-row>
              </ion-grid>
          </ion-content>
        </ion-modal>
      </ion-row>
      <ion-content>
        <ion-title class="ion-no-padding name">
          {{ userStore.state.name }}
        </ion-title>
        <ion-text color="medium email">
          {{ userStore.state.email }}
        </ion-text>
      </ion-content>
      <ion-button shape="round" fill="clear" expand="full" color="medium">change password</ion-button>
      <ion-button shape="round" fill="clear" expand="full" color="danger" @click.stop="userStore.logout()">Logout</ion-button>
  </ion-page>
</template>

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
.medium-font {
  font-size: 1.5em;
}

</style>