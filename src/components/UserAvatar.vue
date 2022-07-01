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

/* ---- resposividade ---- */

@media screen and (min-width:375px) {
	/* -- img user -- */
	.header .img_user {
		max-width: 100%;
	}
}

@media screen and (min-width:425px) {
	/* -- img user -- */
	.header .img_user {
		max-width: 70%;
	}
}

@media screen and (min-width:768px) {
	/* -- img user -- */
    .header .img_user {
			max-width: 50%;
    }
}
</style>
