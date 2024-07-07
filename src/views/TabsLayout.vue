<template>
  <ion-page class="m-fab">
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-fab slot="fixed" horizontal="end" vertical="bottom">
        <ion-fab-button>
          <ion-icon :icon="add"></ion-icon>
        </ion-fab-button>
        <ion-fab-list side="start">
          <ion-fab-button @click="navigateTo('/new-done')">
            <ion-icon :icon="checkmarkDone"></ion-icon>
          </ion-fab-button>
          <ion-fab-button @click="navigateTo('/new-mic')">
            <ion-icon :icon="mic"></ion-icon>
          </ion-fab-button>
          <ion-fab-button @click="navigateTo('/new-list')">
            <ion-icon :icon="list"></ion-icon>
          </ion-fab-button>
        </ion-fab-list>
      </ion-fab>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { add, mic, checkmarkDone, list } from 'ionicons/icons';
import { IonIcon, IonTabs, IonRouterOutlet, IonPage } from '@ionic/vue';
import { useRouter } from 'vue-router';

const isOpen = ref(false);
const items = ref([]);
const newItem = ref('');

const router = useRouter();

const navigateTo = (path: string) => {
  router.push(path);
};

</script>