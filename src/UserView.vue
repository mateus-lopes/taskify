<template>
  <ion-page class="page">
    <ion-row class="ion-justify-content-center ion-padding-top">
      <ion-avatar @click.stop="isOpen = true" class="cursor-pointer">
        <img :alt="user.name" :src="user.photoUrl" />
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
    <ion-button shape="round" fill="clear" expand="full" color="danger" @click.stop="logout">Logout</ion-button>
  </ion-page>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { camera, imageOutline, trashOutline } from 'ionicons/icons';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonText, IonAvatar, IonModal, IonButton, IonIcon } from '@ionic/vue';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import { db } from './firebase';
import { getDoc, doc } from 'firebase/firestore';

const user = ref({
  name: '',
  email: '',
  photoUrl: ''
});
const userUID = ref(null);
const isOpen = ref(false);

const logout = () => {
  auth.signOut();
};

onMounted(() => {
  onAuthStateChanged(auth, async (firebaseUser) => {
    userUID.value = firebaseUser?.email;

    if (userUID.value) {
      console.log('UID do usuário:', userUID.value);
      try {
        const userDoc = await getDoc(doc(db, 'users', userUID.value));
        if (userDoc.exists()) {
          const userData = userDoc.data();
          console.log('Dados do usuário:', userData);
          user.value = {
            name: userData?.name,
            email: userData?.email,
            photoUrl: userData?.photoUrl
          };
        } else {
          console.log('Usuário não encontrado.');
        }
      } catch (error) {
        console.log('Erro ao buscar dados do usuário:', error.message);
      }
    }
  });
});
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