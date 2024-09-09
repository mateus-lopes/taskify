<script setup lang="ts">
import { onMounted } from 'vue';
import { IonPage, IonContent, IonGrid, IonRow, IonCol, IonText } from '@ionic/vue';
import { useTaskStore } from '@/stores/storeTasks';
import { useUserStore } from '@/stores/storeUser';
import HeaderApp from '@/components/HeaderApp.vue';

const taskStore = useTaskStore();
const userStore = useUserStore();

onMounted(async () => {
  userStore.getUserData();
  taskStore.getTasks();
});
</script>

<template>
  <ion-page class="m-page">
    <ion-content :fullscreen="true">
      <header-app></header-app>
      <ion-grid v-if="taskStore.tasks.length > 0">
        <ion-row>
          <ion-col>
            <ion-text color="medium">{{taskStore.tasks}}</ion-text>
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