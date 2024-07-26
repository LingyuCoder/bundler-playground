(async function() {
  const { a, b } = await import('./lib');
  console.log(a, b);
  import('./lib-2').then((a, b) => {
    console.log(a, b);
  });
})();