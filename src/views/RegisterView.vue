<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { IonButton, IonContent, IonHeader, IonInput, IonPage, IonAlert } from '@ionic/vue';
import { useUserStore } from '@/stores/storeUser';

const router = useRouter();
const userStore = useUserStore();

const name = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const errorMessage = ref('');
const errorColor = ref('');
const loader = ref(false);

const register = async () => {
    try {
        loader.value = true;
        const userData = {
            name: name.value,
            email: email.value,
            photoUrl: 'https://practice365.co.uk/a82023/wp-content/uploads/sites/1113/2023/05/Default-Profile-Picture-Transparent.png',
            password: password.value,
        };
        await userStore.register(userData);
    } catch (error: any) {
        errorMessage.value = error.message;
        errorColor.value = 'danger';
    } finally {
        loader.value = false;
        router.push('/');
    }
};

const cleanLoader = () => {
    loader.value = false;
    errorMessage.value = '';
    errorColor.value = '';
};
</script>

<template>
    <ion-page>
        <ion-header></ion-header>
        <ion-img
            src="./logo.png"
            alt="Firebase logo"
            class="logo rotate-full"
            :class="{ 'rotate-loading': loader }"
        ></ion-img>
        <ion-content></ion-content>
        <ion-grid slot="bottom" class="form">
            <ion-row>
                <ion-label class="label" position="floating">Name</ion-label>
                <ion-input placeholder="Digite seu nome" v-model="name" type="text"></ion-input>
                <ion-label class="label" position="floating">Email</ion-label>
                <ion-input placeholder="Digite seu Email" v-model="email" type="email"></ion-input>
                <ion-label class="label" position="floating">Password</ion-label>
                <ion-input placeholder="********" v-model="password" type="password"></ion-input>
                <ion-label class="label" position="floating">Confirm Password</ion-label>
                <ion-input placeholder="********" v-model="confirmPassword" type="password"></ion-input>
            </ion-row>
            <ion-alert header="Authentication error" :message="errorMessage" :color="errorColor" :buttons="['OK']" :isOpen="!!errorMessage" @ionAlertDidDismiss="cleanLoader()"></ion-alert>
            <ion-button expand="full" @click="register">CREATE ACCOUNT</ion-button>
            <ion-button class="button-text ion-padding-top" expand="full" @click="router.push('/login')">ALREADY HAVE AN ACCOUNT?</ion-button>
        </ion-grid>
    </ion-page>
</template>

<style scoped>
.label {
    margin-bottom: 1em;
}

.logo {
    width: 125px;
    height: 125px;
    margin: 0 auto;
    margin-top: 3em;
    opacity: 0.7;
}

.form {
    margin-bottom: 2em;
    padding: 2em;
}

.bounce-in-top {
    animation: bounce 1s;
}

@keyframes bounce {
    0% {
        transform: translateY(-300px);
    }
    100% {
        transform: translateY(0);
    }
}

.rotate-full {
    animation: rotate 15s infinite;
}

.rotate-loading {
    opacity: 0.4;
    animation: rotate-loading .4s infinite;
}

@keyframes rotate {
    0% {
        transform: rotate(360deg);
    }
    100% {
        transform: rotate(0deg);
    }
}

@keyframes rotate-loading {
    0% {
        transform: rotate(360deg);
    }
    100% {
        transform: rotate(0deg);
    }
}

@media screen and (min-width: 1024px){
    .form { 
        padding: 2em 20em;
    }
}

@media screen and (min-width: 1440px){
    .logo {
        margin-top: 8em;
    }

    .form { 
        padding: 2em 30em;
    }
}
</style>