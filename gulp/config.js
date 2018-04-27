module.exports = {
    root: './build',
    source: './source',
    proxy: 'http://template.dev/',
    host: 'template.dev',
    minify: false,

    autoprefixerConfig: ['last 3 version', '> 1%', 'ie 8', 'ie 9', 'Opera 12.1']
};