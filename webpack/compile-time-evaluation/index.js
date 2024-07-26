const el = {};
el.innerHTML = 'hello, world' || undefined || undefined
if (false && "true") {
  el.innerHTML = 1111
}
