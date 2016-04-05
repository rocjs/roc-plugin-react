import { name } from './util';
import builder from '../builder';

export default {
    name,
    config: {
        settings: {
            dev: {
                hotMiddleware: {
                    reload: false
                }
            }
        }
    },
    actions: {
        react: {
            hook: 'build-webpack',
            action: builder
        }
    }
};
