lodash.dom-traverse
==============

[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/szarouski/lodash.dom-traverse?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

tiny (1.28kb min, gzip) lodash extension for dom traversing (for those cases where native dom is not so easy to use):

```javascript
_.$(selector, context); //get element(s)
```
```javascript
_.$(selector, context).find(selector); //traverses down
```
```javascript
_.$(selector, context).filter(selector); //filter by selector
_.$(selector, context).filter(function () {}); //filter with function
```
```javascript
_.$(selector, context).siblings(); //get siblings
```
```javascript
_.$(selector, context).next();  //get next
_.$(selector, context).prev();  //get previous
_.$(selector, context).nextAll();  //get all next
_.$(selector, context).prevAll();  //get all previous
```
```javascript
_.$(selector, context).text(); //get text for element(s)
_.$(selector, context).text(string); //set text
```
```javascript
_.$(selector, context).is(selector); //check if matches selector
```
```javascript
_.$(selector, context).closest(selector); //traverses up
```
```javascript
_.$(selector, context).css({}); //sets styles
_.$(selector, context).css(string); //returns style
```

easy to chain
```javascript
_.$('table td').filter(_.$.simpleOdd).css({'background-color': 'rgb(0, 0, 0)'}).text()
```
==============
### Browser support
* IE8+
* Modern browsers
