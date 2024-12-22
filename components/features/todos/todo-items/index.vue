<script setup lang="ts">
	import TodoItem from '~/components/features/todos/todo-item/index.vue';
	import useTodosStore from '~/store/useTodosStore';

	const { todos } = useTodosStore();
</script>

<template>
	<div v-if="todos?.length" class="space-y-4 flex flex-col justify-between">
		<TodoItem
			v-for="t in todos"
			:key="t.id ?? generateRandomString(10)"
			:todo="t"
		/>
	</div>

	<p v-else>No todos found</p>
</template>
