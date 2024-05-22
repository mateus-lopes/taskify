<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script setup lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/plugins/firebase';
import { useRouter } from 'vue-router';

const router = useRouter()

const verifyUser = () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log('Usuário logado:', user.uid);
    } else {
      console.log('Usuário não logado');
      router.push('/login');
    }
  });
}

verifyUser();
</script>