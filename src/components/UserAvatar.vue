<template>
    <div class='col-4 text-right' @click="toggleGender">
		<img v-if="userMan" class='img-fluid img_user shadow' src='../assets/img/users/3003035.png' alt='Avatar'>
		<img v-if="!userMan" class='img-fluid img_user shadow' src='../assets/img/users/219969.png' alt='Avatar'>
    </div>
</template>

<script>
export default {
	name: 'UserAvatar',
	data() {
		return {
			userMan: JSON.parse(localStorage.getItem('userMan')) ?? true 
		};
	},
	methods: {
		toggleGender() {
			this.userMan = !this.userMan;
			localStorage.setItem('userMan', JSON.stringify(this.userMan));
		}
	}
};
</script>

<style>

/* -- img user -- */

.header .img_user {
	border-radius: 50%;
	cursor: pointer;
}

</style>
