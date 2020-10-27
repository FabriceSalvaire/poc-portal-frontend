// https://github.com/michael-ciniawsky/postcss-load-config
module.exports = {
    plugins: {
	// https://github.com/csstools/postcss-preset-env
	'postcss-preset-env': {
    	    // https://github.com/postcss/autoprefixer
	    autoprefixer: {},
	},

	// https://cssnano.co
	'cssnano': {},
    }

    // https://getbootstrap.com/docs/4.0/getting-started/webpack/
    // plugins: function () {
    //     return [
    //         require('precss'),
    //         require('autoprefixer')
    //     ];
    // }
}
