window.addEventListener("hashchange", changed);
window.addEventListener("popstate", changed);
let events = [];
function changed() {
  events.forEach((e) => e?.());
}
export function onUrlChange(fn) {
  if (!events.find((e) => e === fn)) {
    events.push(fn);
  }
}
export function offUrlChange(fn) {
  let i = events.findIndex((e) => e === fn);
  if (i > -1) {
    events.splice(i, 1);
  }
}
 