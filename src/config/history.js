function wrapState(type) {
  const raw = history[type];
  return function () {
    raw.apply(this, arguments);
    const event = new Event(type);
    event.pathname = window.location.pathname;
    window.dispatchEvent(event);
  };
}

history.pushState = wrapState("pushState");
history.replaceState = wrapState("replaceState");
