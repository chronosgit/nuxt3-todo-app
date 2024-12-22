// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2024-04-03',
	devtools: { enabled: true },

	components: false,
	alias: {
		components: './components',
		services: './services',
		store: './store',
	},

	imports: {
		dirs: ['composables', 'composables/**'],
	},

	plugins: ['~/plugins/01.color-theme.client.js'],

	runtimeConfig: {},

	modules: [
		'@pinia/nuxt',
		'pinia-plugin-persistedstate/nuxt',
		'@nuxt/image',
		'@nuxt/fonts',
		'@nuxt/icon',
		'@nuxtjs/i18n',
		'@nuxt/eslint',
	],

	// Tailwind
	css: ['~/assets/css/tailwind.css'],
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},

	// NuxtImage
	image: {
		dir: 'assets', // Questionable
		screens: {
			'2xs': 360,
			xs: 480,
			sm: 640,
			md: 768,
			lg: 1024,
			xl: 1280,
			'2xl': 1536,
		},
	},

	// I18n
	i18n: {
		vueI18n: './i18n.config.ts',
		baseUrl: 'http://localhost:3000/', // Changes in production?
		strategy: 'prefix',
		lazy: true,
		langDir: 'locales',

		defaultLocale: 'en',
		locales: [
			{
				code: 'en',
				language: 'en-US',
				file: 'en.json',
			},
			{
				code: 'ru',
				language: 'ru-RU',
				file: 'ru.json',
			},
		],

		detectBrowserLanguage: {
			useCookie: true,
			cookieKey: 'i18n_redirected',
			redirectOn: 'root',
		},
	},
});
