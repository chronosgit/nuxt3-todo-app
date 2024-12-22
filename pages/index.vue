<script setup lang="ts">
	import TodoCreater from '~/components/features/todos/todo-creater/index.vue';
	import TodoItems from '~/components/features/todos/todo-items/index.vue';

	useHead({ title: 'Main' });
</script>

<template>
	<div class="mt-4 container mx-auto px-4">
		<TodoCreater />

		<TodoItems class="mt-8" />
	</div>
</template>
