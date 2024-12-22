<script setup lang="ts">
	import type Todo from '~/interfaces/features/todos/Todo';
	import CreateButton from './_components/CreateButton.vue';
	import TodoInput from './_components/TodoInput.vue';
	import useTodosStore from '~/store/useTodosStore';

	const { addTodo } = useTodosStore();

	const todoInput = ref('');

	const onFormSubmit = () => {
		if (!todoInput.value) return;

		const newTodo = {
			id: generateRandomString(30),
			content: todoInput.value,
			isCompleted: false,
		} as Todo;

		try {
			addTodo(newTodo);

			todoInput.value = '';
		} catch (err) {
			console.error(err);
		}
	};
</script>

<template>
	<form
		class="flex justify-between gap-4 items-center"
		@submit.prevent="onFormSubmit"
	>
		<TodoInput
			v-model:value="todoInput"
			class="basis-3/4 md:basis-5/6 flex-grow-0"
		/>

		<CreateButton class="flex-grow-0 basis-1/4 md:basis-1/6" />
	</form>
</template>
