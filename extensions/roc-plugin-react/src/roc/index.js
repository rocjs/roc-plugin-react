import { generateDependencies } from 'roc';

const packageJSON = require('../../package.json');

export default {
    dependencies: {
        exports: generateDependencies(packageJSON, [
            'react',
            'react-dom',
        ]),
    },
};
