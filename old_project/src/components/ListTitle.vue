<template>
    <div class="header container-fluid mb-4">
		<div class="row">
			<div class="col-8 pl-0">
				<h2 @update="update" :class="{'text-light':theme_dark}" class="h2_title">{{title}}</h2>
				<p @update="update" class="p_title">{{description}}</p>
			</div>
            <DivUser :src_user="src_user" />
		</div>
		<hr style="margin-left: -15px;margin-right:-15px;"> 
    </div>
</template>

<script>
import DivUser from './UserAvatar.vue'

export default {
    components: {
        DivUser,
    },
	props: {
		theme_dark:Boolean,
		title:String,
		description:String,
		src_user:String,
	},
	data() {
		return {

		}
	}
}
</script>

<style>

/* --- header --- */

/* -- title -- */
.header .h2_title {
	font-weight: 800;
	font-size: 1.2em;
	border: none;
	width: 100%;
}

.header .p_title {
	color: #3f97af;
	font-weight: 500;
	font-size: .7em;
}

</style>