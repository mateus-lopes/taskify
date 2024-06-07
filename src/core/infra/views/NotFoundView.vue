<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Not Found</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
            <div class="ion-text-center">
                <h1>404</h1>
                <p>Page not found</p>
                <ion-button href="/">Go to Home</ion-button>
            </div>
        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/vue';
</script>

<style scoped>
.ion-text-center {
    text-align: center;
}
</style>