<script setup lang="ts">
	import ToggleCompletenessButton from './_components/ToggleCompletenessButton.vue';
	import RemoveTodoButton from './_components/RemoveTodoButton.vue';
	import type Todo from '~/interfaces/features/todos/Todo';

	const props = defineProps<{ todo: Todo }>();
</script>

<template>
	<div v-if="props.todo" class="flex justify-between gap-4 sm:items-center">
		<p
			class="basis-2/3 flex-wrap break-words overflow-hidden decoration-red-500 decoration-4"
			:class="{ 'line-through': todo.isCompleted }"
		>
			{{ props.todo.content }}
		</p>

		<div
			class="basis-1/6 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2"
		>
			<ToggleCompletenessButton :todo="props.todo" class="min-w-24" />

			<RemoveTodoButton :todo-id="props.todo.id" class="min-w-24" />
		</div>
	</div>
</template>
