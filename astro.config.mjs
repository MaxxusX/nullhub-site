import { defineConfig, passthroughImageService } from "astro/config";

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
		service: passthroughImageService(), // temp. cannot install sharp rn.
		/*
		service: {
			config: {
				limitInputPixels: false,
			},
		},
			*/
	},
	vite: {
		css: {
			transformer: "lightningcss",
		},
	},
});
