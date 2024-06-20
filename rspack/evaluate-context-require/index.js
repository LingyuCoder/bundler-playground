async function aaa(type, lng) {
  await import(
    `./imgs/${IS_OVERSEA ? 'a' : 'b'}-${type}-${lng}.png`
  )
}

aaa("type", "lng");
