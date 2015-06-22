
var prevLocalforage = window.localforage;
window.localforage = require('localforage');
require('./drpx-storage.js');
window.localforage = prevLocalforage;

module.exports = 'drpxStorage';
