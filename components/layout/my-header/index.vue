<script setup lang="ts">
	import { IconWine } from '~/components/ui/icons';
</script>

<template>
	<header class="p-1 flex justify-between items-center">
		<p
			class="font-bold underline underline-offset-2 decoration-indigo-500 text-indigo-500"
		>
			yetanothertodolist
		</p>

		<NuxtLink href="https://github.com/chronosgit" target="_blank">
			<span class="sr-only">Github link</span>

			<LazyClientOnly>
				<IconWine class="scale-125 text-indigo-500" />
			</LazyClientOnly>
		</NuxtLink>
	</header>
</template>
