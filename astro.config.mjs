import { defineConfig, passthroughImageService } from "astro/config";
import { browserslistToTargets } from "lightningcss";

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
			lightningcss: {
				minify: true,
				sourceMap: import.meta.env.DEV ? true : false,
				errorRecovery: false,
				/* smh gotta install browserslist
				targets: browserslistToTargets(
					browserslist(
						">0.2% or last 3 versions or Firefox ESR and fully supports es6-module and fully supports es6-module-dynamic-import and not dead and not op_mini all and not and_uc 15 and not and_qq 14 and not kaios 3"
					)
				),
    				*/
			},
		},
		build: {
			cssMinify: "lightningcss",
		},
	},
});
