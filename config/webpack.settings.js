// Webpack settings exports.
module.exports = {
	entries: {
		// JS files.
		admin: './assets/js/admin/admin.js',
		frontend: './assets/js/frontend/frontend.js',
		shared: './assets/js/shared/shared.js',
		styleguide: './assets/js/styleguide/styleguide.js',

		// CSS files.
		'admin-style': './assets/css/admin/admin-style.css',
		'editor-style': './assets/css/frontend/editor-style.css',
		'shared-style': './assets/css/shared/shared-style.css',
		style: './assets/css/frontend/style.css',
		'styleguide-style': './assets/css/styleguide/styleguide.css',

		// Blocks
		'example-block': './includes/blocks/example-block/',
	},
	filename: {
		js: 'js/[name].js',
		css: 'css/[name].css',
	},
	paths: {
		src: {
			base: './assets/',
			blocks: './includes/blocks/',
			css: './assets/css/',
			js: './assets/js/',
		},
		dist: {
			base: './dist/',
			clean: ['./images', './css', './js'],
		},
	},
	stats: {
		// Copied from `'minimal'`.
		all: false,
		errors: true,
		maxModules: 0,
		modules: true,
		warnings: true,
		// Our additional options.
		assets: true,
		errorDetails: true,
		excludeAssets: /\.(jpe?g|png|gif|svg|woff|woff2)$/i,
		moduleTrace: true,
		performance: true,
	},
	copyWebpackConfig: {
		from: '**/*.{jpg,jpeg,png,gif,svg,eot,ttf,woff,woff2}',
		to: '[path][name].[ext]',
	},
	ImageminPlugin: {
		test: /\.(jpe?g|png|gif|svg)$/i,
	},
	BrowserSyncConfig: {
		host: 'localhost',
		port: 3000,
		proxy: 'http://tenup-scaffold.test',
		open: false,
		files: [
			'**/*.php',
			'dist/js/**/*.js',
			'dist/css/**/*.css',
			'dist/svg/**/*.svg',
			'dist/images/**/*.{jpg,jpeg,png,gif}',
			'dist/fonts/**/*.{eot,ttf,woff,woff2,svg}',
		],
	},
	performance: {
		maxAssetSize: 100000,
	},
	manifestConfig: {
		basePath: '',
	},
};
