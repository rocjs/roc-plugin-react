import { resolvePath } from 'roc-plugin-react';

export default () => ({ settings, previousValue: rocBuilder }) => (target) => () => {
    let {
        buildConfig,
        builder,
        info
    } = rocBuilder;

    const DEV = settings.build.mode === 'dev';
    const WEB = target === 'web';

    /**
    * Update babel configuration for React
    */
    buildConfig.babel.presets.push(require.resolve('babel-preset-react'));
    if (DEV && WEB) {
        buildConfig.babel.plugins.push([
            require.resolve('babel-plugin-react-transform'), {
                transforms: [
                    {
                        transform: require.resolve('react-transform-hmr'),
                        imports: ['react'],
                        locals: ['module']
                    },
                    {
                        transform: require.resolve('react-transform-catch-errors'),
                        imports: ['react', require.resolve('redbox-react')]
                    }
                ]
            }
        ]);
    }

    /**
    * Add resolver from roc-plugin-react
    */
    buildConfig.resolve.fallback.push(resolvePath);

    return {
        buildConfig,
        builder,
        info
    };
};
