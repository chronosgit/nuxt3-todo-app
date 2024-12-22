<script setup lang="ts">
	import useTodosStore from '~/store/useTodosStore';

	const { removeTodo } = useTodosStore();

	const props = defineProps<{ todoId: string }>();
</script>

<template>
	<button
		v-if="props.todoId"
		class="bg-red-500 text-white rounded-md py-1 px-2"
		@click="removeTodo(props.todoId)"
	>
		Remove
	</button>
</template>
