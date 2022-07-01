<template>
    <div class='col-4 text-right'>
		<img class='img-fluid img_user shadow' src='../assets/img/users/user_default.png' alt='Avatar'>
    </div>
</template>

<script>
export default {
	props: {
		// não funca
		src:String,
	}
}
</script>

<style>

/* -- img user -- */

.header .img_user {
	border-radius: 50%;
	cursor: pointer;
}

</style>
