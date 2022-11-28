const DEFAULT_SLEEP_MILLISECONDS = 1000;

function sleep(milliseconds) {
  return new Promise(resolve =>
    setTimeout(resolve, milliseconds || DEFAULT_SLEEP_MILLISECONDS)
  );
}

export { DEFAULT_SLEEP_MILLISECONDS, sleep }