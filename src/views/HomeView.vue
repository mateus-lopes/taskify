<template>
  <ion-page class="m-page">
    <ion-content :fullscreen="true">
      <header-app></header-app>
      <ion-grid v-if="tasks.length > 0">
        <ion-row>
          <ion-col>
            <ion-text color="medium">{{tasks}}</ion-text>
          </ion-col>
        </ion-row>
      </ion-grid>
      <ion-grid v-else>
        <ion-row>
          <ion-col>
            <ion-text color="medium">
              No tasks 
            </ion-text>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import HeaderApp from '@/components/HeaderApp.vue';
import { IonPage, IonContent, IonGrid, IonRow, IonCol, IonText } from '@ionic/vue';
import { db } from '@/plugins/firebase';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getDocs, collection } from 'firebase/firestore';

const auth = getAuth();
const tasks: any = ref([]);
const userUID = ref(
  auth.currentUser ? auth.currentUser.uid : null
);

onMounted(() => {
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      userUID.value = user.uid;
      try {
        const querySnapshot = await getDocs(collection(db, 'tasks'));
        querySnapshot.forEach((doc) => {
          const taskData = doc.data();
          if (taskData.authorUid === userUID.value) {
            tasks.value.push(taskData);
          }
        });
      } catch (error) {
        console.error('Erro ao obter os documentos:', error);
      }
    }
  });
});
</script>