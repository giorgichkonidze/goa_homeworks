const nested = Promise.resolve(
    Promise.resolve("resolved")
)
nested.then(inner => inner.then(console.log))