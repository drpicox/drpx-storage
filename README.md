drpx-storage
===========

A minimal wrapper for mozilla localforage.

Why? Because it can store data in indexeddb, websql or localstore.




Install
-------

With bower: 

```bash
$ bower install --save drpx-storage
```

add to your module the dependence:

```javascript
    angular.module('yourModule', ['drpxStorage']);
```

include the javascript library in your application:

```html
<script src="bower_components/localforage/dist/localforage.nopromises.js"></script>
<script src="bower_components/drpx-storage/drpx-storage.js"></script>
```

With browserify:

```bash
$ npm install --save drpx-storage
```

and require it in your module:

```javascript
    angular.module('yourModule', [require('drpx-storage')]);
```
