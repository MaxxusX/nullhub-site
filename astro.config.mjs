import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	site: "https://nullhub.pages.dev",
	base: "/",
	trailingSlash: "ignore",
	output: "static",
	compressHTML: true,
	build: {
		format: "file",
		inlineStylesheets: `never`,
	},
	server: {
		host: false,
		port: 8080,
	},
	devToolbar: {
		enabled: false,
	},
	prefetch: {
		prefetchAll: true,
		defaultStrategy: "viewport",
	},
	image: {
		// Example: Enable the Sharp-based image service with a custom config
		service: {
			config: {
				limitInputPixels: false,
			},
		},
	},
	vite: {
		css: {
			transformer: "lightningcss",
		},
	},
});
