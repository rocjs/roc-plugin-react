export default ({ context: { config: { settings } }, previousValue: webpackConfig }) => (target) => () => {
    const newWebpackConfig = { ...webpackConfig };
    const DEV = settings.build.mode === 'dev';
    const WEB = target === 'web';

    /**
    * Update babel configuration for React
    */
    newWebpackConfig.babel.presets.push(require.resolve('babel-preset-react'));

    if (DEV && WEB) {
        newWebpackConfig.babel.plugins.push([
            require.resolve('babel-plugin-react-transform'), {
                transforms: [
                    {
                        transform: require.resolve('react-transform-hmr'),
                        imports: ['react'],
                        locals: ['module'],
                    },
                    {
                        transform: require.resolve('react-transform-catch-errors'),
                        imports: ['react', require.resolve('redbox-react')],
                    },
                ],
            },
        ]);
    }

    return newWebpackConfig;
};
