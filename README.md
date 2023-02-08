# async-resolve
Async Resolve is a utility method for resolving a promise with a value or a promise.
after a set amount of time.

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
  console.log(result);
});
```

```javascript

```