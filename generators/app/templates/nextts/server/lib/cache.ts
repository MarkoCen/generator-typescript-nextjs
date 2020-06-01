import LRU from 'lru-cache';

const cachePool = new LRU({
  max: 150, // maximum 150mb cache size in memory
  maxAge: 1000 * 60 * 60 * 3, // maximum 3hr cache time
  stale: false,
});

export default cachePool;
