var path = require('path')

module.exports = {
    babel: {
        presets: ['stage-0'],
    },
    type: 'react-app',
    webpack: {
        rules: {
            css: {
                modules: true,
                localIdentName: '[local]_[hash:base64:5]',
            },
            postcss: {
                plugins: [
                    require('postcss-import')({
                        path: ['src/styles'],
                    }),
                    require('postcss-cssnext')(),
                    require('postcss-animation')(),
                ],
            },
        },
        aliases: {
            'src': path.resolve('src'),
            'components': path.resolve('src/components'),
            'containers': path.resolve('src/containers'),
            'helpers': path.resolve('src/helpers'),
            'images': path.resolve('images'),
            'services': path.resolve('src/services'),
        },
    },
}
