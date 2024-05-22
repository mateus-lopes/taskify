<template>
  <ion-page class="page">
    <ion-row class="ion-align-items-center">
      <ion-col size="10">
        <ion-text class="title">My tasks</ion-text>
      </ion-col>
      <ion-col size="2">
        <ion-avatar @click.stop="goProfile()" class="cursor-pointer">
        <img :alt="user.name" :src="user.photoUrl" />
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
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonSegment, IonSegmentButton, IonLabel, IonGrid, IonRow, IonCol, IonText } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
import { apps, checkmarkDoneOutline, checkmarkOutline
 } from 'ionicons/icons';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/plugins/firebase';
import { db } from '@/plugins/firebase';
import { getDoc, doc } from 'firebase/firestore';

const router = useRouter()

const user = ref({
  name: '',
  email: '',
  photoUrl: ''
})
const userUID = ref(null)
const goProfile = () => {
  router.push('/app/user')
}

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
            name: userData?.fullName,
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
</style>