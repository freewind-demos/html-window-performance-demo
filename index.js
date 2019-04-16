// we have to delay the code, otherwise `timing.loadEventEnd` will be 0

setTimeout(function () {
  console.log(window.performance);
  const timing = window.performance.timing;
  const pageLoadTime = timing.loadEventEnd - timing.navigationStart
  document.getElementById('main').innerText = `Page Load Time: ${pageLoadTime} ms`
}, 0);


