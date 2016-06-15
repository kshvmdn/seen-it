export default function promiseWhile(condition, action) {
  let resolver = Promise.defer();

  function loop() {
    if (!condition()) return resolver.resolve();
    return Promise.resolve(action())
      .then(loop)
      .catch(resolver.reject);
  };

  process.nextTick(loop);
  return resolver.promise;
};
