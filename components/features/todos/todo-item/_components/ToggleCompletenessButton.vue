<script setup lang="ts">
	import type Todo from '~/interfaces/features/todos/Todo';
	import useTodosStore from '~/store/useTodosStore';

	const { toggleTodoCompleteness } = useTodosStore();

	const props = defineProps<{ todo: Todo }>();

	const btnTxt = computed(() => {
		if (props.todo?.isCompleted) return 'Resume';

		return 'Complete';
	});

	const btnClass = computed(() => {
		if (props.todo?.isCompleted)
			return 'bg-orange-500 hover:bg-orange-600 focus-within:bg-orange-600';

		return 'bg-green-600 hover:bg-green-700 focus-within:bg-green-700';
	});
</script>

<template>
	<button
		v-if="props.todo"
		class="rounded-md py-1 px-2 text-white transition-colors"
		:class="btnClass"
		@click="toggleTodoCompleteness(props.todo?.id)"
	>
		{{ btnTxt }}
	</button>
</template>
