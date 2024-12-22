<script setup lang="ts">
	const value = defineModel<string>('value');
</script>

<template>
	<!-- eslint-disable-next-line -->
	<input
		v-model="value"
		placeholder="Write your todo here"
		required
		class="transition-colors hover:placeholder:text-indigo-500 focus:placeholder:text-indigo-500 focus:border-indigo-500 border-[1px] p-1 rounded-md border-white outline-none"
	/>
</template>
