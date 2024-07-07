<template>
    <ion-row class="ion-align-items-center ion-justify-content-end">
        <ion-col size="9">
            <ion-text class="title">My tasks</ion-text>
        </ion-col>
        <ion-col size="3" class="ion-align-items-center ion-justify-content-end flex">
            <router-link to="/user">
                <ion-avatar class="cursor-pointer" style="text-align: right;">
                    <img :alt="user.name" :src="user.photoUrl" style="text-align: right;" />
                </ion-avatar>
            </router-link>
        </ion-col>
    </ion-row>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { IonAvatar, IonCol, IonRow, IonText } from '@ionic/vue';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/plugins/firebase';
import { db } from '@/plugins/firebase';
import { getDoc, doc } from 'firebase/firestore';

const user = ref({
    name: '',
    email: '',
    photoUrl: ''
})
const userUID = ref(null)

onMounted(() => {
    onAuthStateChanged(auth, async (firebaseUser) => {
    userUID.value = firebaseUser?.email;

    if (userUID.value) {
        console.log('UID do usuário:', userUID.value);
        try {
        const userDoc = await getDoc(doc(db, 'users', userUID.value));
        if (userDoc.exists()) {
            const userData = userDoc.data();
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