import { name } from './util';
import resolvePath from '../resolver';

export default {
    name,
    actions: {
        react: {
            extension: 'roc-plugin-start',
            hook: 'get-resolve-paths',
            action: () => () => () => () => resolvePath
        }
    }
};
