<script setup>
	import MyHeader from '~/components/layout/my-header/index.vue';
	import MyFooter from '~/components/layout/my-footer/index.vue';

	const route = useRoute();
	const { t, te } = useI18n();

	const head = useLocaleHead({
		addDirAttribute: true,
		identifierAttribute: 'id',
		addSeoAttributes: true,
	});

	// Localization-based title
	const title = computed(() =>
		te(route.meta.i18nTitleKey)
			? t(route.meta.i18nTitleKey)
			: 'yet another todo app',
	);
</script>

<template>
	<div>
		<Html :lang="head.htmlAttrs.lang" :dir="head.htmlAttrs.dir">
			<Head>
				<Title>{{ title }}</Title>

				<template v-for="link in head.link" :key="link.id">
					<Link
						:id="link.id"
						:rel="link.rel"
						:href="link.href"
						:hreflang="link.hreflang"
					/>
				</template>

				<template v-for="meta in head.meta" :key="meta.id">
					<Meta
						:id="meta.id"
						:property="meta.property"
						:content="meta.content"
					/>
				</template>
			</Head>

			<Body class="min-h-screen overflow-x-hidden">
				<MyHeader />

				<slot />

				<MyFooter />
			</Body>
		</Html>
	</div>
</template>
