import { defineConfig, passthroughImageService } from "astro/config";

const isProd = import.meta.env.PROD;

export default defineConfig({
	site: "https://maxxusx.github.io/nullhub-site/",
	base: "/nullhub-site/",
	trailingSlash: "ignore",
	output: "static",
	compressHTML: isProd,
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
			lightningcss: {
				minify: isProd,
				sourceMap: false,
				errorRecovery: false,
				targets: {
					and_chr: 127 << 16,
					and_ff: 127 << 16,
					android: 127 << 16,
					chrome: 109 << 16, // vite default: 87
					edge: 120 << 16, // vite default: 88
					firefox: 115 << 16, // vite default: 78
					ios_saf: (15 << 16) | (6 << 8),
					op_mob: 80 << 16,
					opera: 109 << 16,
					safari: (15 << 16) | (6 << 8), // vite default: 14
					samsung: 25 << 16,
				},
			},
		},
		build: {
			// vite default: ["es2020", "edge88", "firefox78", "chrome87", "safari14"]
			target: ["es2020", "edge120", "firefox115", "chrome109", "safari15.6"],
			assetsInlineLimit: 0,
			cssCodeSplit: false,
			cssMinify: isProd ? "lightningcss" : false,
			minify: isProd ? "esbuild" : false,
			sourcemap: false,
			reportCompressedSize: false,
		},
	},
});
