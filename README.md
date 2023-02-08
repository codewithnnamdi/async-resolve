# async-resolve
Async Resolve is a utility method for resolving a module in object 
form after a set amount of time.

## Installation
```bash
npm install async-resolve
```

## Usage
```javascript
const asyncResolve = require('async-resolve');
```

### asyncResolve(value, time)
Returns a promise that resolves with the value after the specified time.

```javascript
var module ={
  asyncMethod: function(){
    return asyncResolve({
        foo: 'bar'
        }, 1000);
  }
}

module.asyncMethod().then(function(result){
  console.log(result); // { foo: 'bar' }
});

```
### Options
#### time
Type: `Number`
Default value: `1000`

The time in milliseconds to wait before resolving the promise.

### interpolate
Type: `Boolean`
Default value: `false`

If set to true, the value will be interpolated with the module object.

```javascript
var module ={
  asyncMethod: function(){
    return asyncResolve({
        foo: 'bar',
        __esModule: true
        }, 1000, true);
  }
}

module.asyncMethod().then(function(result){
  console.log(result); 
    // { foo: 'bar', __esModule: true,
    // default: { foo: 'bar', __esModule: true }
})


```
