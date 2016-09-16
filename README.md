# evx 
Route-managed client-side binding controller in ES6. **1.1kb gzipped.**

## Install 
```javascript
npm i evx --save
```

## Usage
```javascript
import evx from 'evx'

evx.on('click', '.js-selector', e => {
  // do stuff
})

events.add(instanceOfLibrary)

myRouter.on('newRoute', route => {
  events.drop(route)
})
```

Usage of `.on()` or `.add()` also returns the individual instance that was added to the evx cache.
```javascript
import flickity from 'flickity'

const slider = new flickity('#slider')

const sliderInstance = evx.add(slider)

console.log(sliderInstance) // entire flickity object

// Something happens

sliderInstance.destroy()
```

## API

### .on(event, selector, callback)
Add an event listener using event delegation via [delegate](https://github.com/zenorocha/delegate). See that documentation for more information.
```javascript
evx.on('click', '#selector', e => {
  console.log(e.target) // vanilla
  console.log(e.delegateTarget) // #selector clicked on
})
```

### .add(instance)
Add an instance of an object to evx at the current route. Useful for libraries that manage their own event bidnings. This object should have a `destroy` method that removes it's listeners and clears the instance.
```javascript
import flickity from 'flickity'

const slider = new flickity('#slider')

evx.add(slider)
```

### .getCache()
Returns an object containing nested route objects, each with an array of bindings managed by evx.
```javascript
console.log(evx.getCache())

/*
{
  '/': [
    boundObj,
    boundObj,
    boundObj
  ],
  '/products': [
    boundObj,
    boundObj
  ]
}
*/
```

## Dependencies
- [delegate:](https://github.com/zenorocha/delegate) Lightweight event delegation. by [@zenorocha](https://github.com/zenorocha)

* * *
MIT