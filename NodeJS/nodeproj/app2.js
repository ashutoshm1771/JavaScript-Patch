// Global
console.log(); // global , use it anywhere, browser, client, etc

setTimeout(); // call a function after a delay
clearTimeout(); // clear it

setInterval(); // repeatedly call a function after a delay
clearInterval(); // stop fn from being called repeatedly

// Browsers

window.console.log() ; // or console.log();

window.setTimeout(); // all are window object

var message = '';
window.message;

// In node, we have global instead of window

global.message;
global.setTimeout();
