import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	site: "https://maxxusx.github.io/nullhub-site/",
	base: "/nullhub-site/",
	trailingSlash: "ignore",
	output: "static",
	compressHTML: true,
	build: {
		format: "file",
		inlineStylesheets: "never",
	},
	server: {
		host: false,
		port: 8080,
	},
	devToolbar: {
		enabled: false,
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
