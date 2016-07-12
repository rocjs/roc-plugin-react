import webpack from '../webpack';

export default {
    plugins: [require.resolve('roc-plugin-react')],
    config: {
        settings: {
            dev: {
                hotMiddleware: {
                    reload: false,
                },
            },
        },
    },
    actions: [{
        hook: 'build-webpack',
        description: 'Adds the needed Webpack configuration to be able to build and develop React code.',
        action: webpack,
    }],
};
