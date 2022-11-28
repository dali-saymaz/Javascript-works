
import {DEFAULT_SLEEP_MILLISECONDS, sleep} from './utils.js'

document.getElementById('uykuButonu').addEventListener('click', async function() {
  await sleep();
  alert('uyandım');
});