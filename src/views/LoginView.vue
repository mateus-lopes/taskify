<template>
    <ion-page>
        <ion-header></ion-header>
        <ion-img
            src="../../resources/logo-blue.png"
            alt="Firebase logo"
            class="logo rotate-full"
            :class="{ 'rotate-loading': loader }"
        ></ion-img>
        <ion-content></ion-content>
        <ion-grid slot="bottom" class="form">
            <ion-row width="100%">
                <ion-label class="label" position="floating">Email</ion-label>
                <ion-input placeholder="Digite seu Email" v-model="email" type="email"></ion-input>
                <ion-label class="label" position="floating">Password</ion-label>
                <ion-input placeholder="********" v-model="password" type="password"></ion-input>
            </ion-row>
            <ion-alert header="Authentication error" :message="errorMessage" :color="errorColor" :buttons="['OK']" :isOpen="!!errorMessage" @ionAlertDidDismiss="cleanLoader()"></ion-alert>
            <ion-button expand="full" @click="login">Login</ion-button>
            <ion-button class="button-text ion-padding-top" expand="full" @click="router.push('/register')">Register</ion-button>
        </ion-grid>
    </ion-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { IonButton, IonContent, IonHeader, IonInput, IonItem, IonPage, IonTitle, IonToolbar, IonAlert } from '@ionic/vue';

const email = ref('');
const password = ref('');
const errorMessage = ref('');
const errorColor = ref('');
const loader = ref(false);
const router = useRouter();

const login = async () => {
    const auth = getAuth();
    try {
        loader.value = true;
        await signInWithEmailAndPassword(auth, email.value, password.value);
        console.log('Logged in successfully');
        router.push('/');
    } catch (error) {
        console.error('Error logging in:', (error as any).message);
        errorMessage.value = (error as any).message;
        errorColor.value = 'danger';
    }
};

const cleanLoader = () => {
    loader.value = false;
    errorMessage.value = '';
    errorColor.value = '';
};
</script>

<style scoped>
.label {
    margin-bottom: 1em;
}

.logo {
    width: 125px;
    height: 125px;
    margin: 0 auto;
    margin-top: 7em;
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
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

@keyframes rotate-loading {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

@media screen and (min-width: 1024px){
    .logo {
        margin-top: 10em;
    }
}
</style>