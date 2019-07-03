import {
  composeBundlesRaw,
  createUrlBundle,
  createCacheBundle,
  appTimeBundle,
  asyncCountBundle,
  onlineBundle,
  createReactorBundle,
  createDebugBundle,
} from 'redux-bundler';

import cache from '../utils/cache';
import user from './user';

export default composeBundlesRaw(
  // default bundles
  createUrlBundle(),
  createReactorBundle({ idleTimeout: 1500 }),
  createDebugBundle(),
  createCacheBundle({ cacheFn: cache.set }),
  appTimeBundle,
  onlineBundle,
  asyncCountBundle,

  // user's bundles
  user,
);
