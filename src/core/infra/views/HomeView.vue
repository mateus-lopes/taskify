<template>
  <ion-page class="page">
    <header-app></header-app>
      <ion-content class="ion-padding-top">
        <ion-grid>
          <ion-row>
            <ion-col>
              <ion-text color="medium">No tasks</ion-text>
              {{ isLogged }}
            </ion-col>
          </ion-row>
        </ion-grid>
      </ion-content>
  </ion-page>
</template>

<script lang="ts" setup>
import HeaderApp from "@/core/infra/components/HeaderApp.vue";
import { IonContent, IonGrid, IonRow, IonCol, IonText } from '@ionic/vue';
import { useAuthStore } from "@/auth/controller/authController";

const { state } = useAuthStore();

const isLogged = state.isLogged;

</script>