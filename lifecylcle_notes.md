# Component Mounting Lifecycle Methods

## Mounting: 

### `constructor(props)`
 - created and inserted into dom
 - special funcion called upon creation
 - inits state and binds event Handlers
 - should not make calls
 - should always call `super(props)`

### `static getDerivedStateFromProps(props, state)`
 - when state depends on changes in props over time
 - use to set the state
 - does not have access to `this.state`
 - do not cause side effects

### `render()`
 - only req'd method in a class Component
 - reads props and state then returns JSX
 - not for changing state
 - not for interacting with dom
 - no ajax calls
 - child Components lifecycle methods are also executed

### `componentDidMethod()`
 - will only be called once
 - runs after component and it's children have been rendered
 - this is the place to cause side effects (eg interact with dom, ajax calls, etc)
 
```
// a parent component with a child component
LifecycleA constructor LifecycleA.js:11
LifecycleA getDerivedStateFromProps LifecycleA.js:14
LifecycleA render LifecycleA.js:23
LifecycleB constructor LifecycleB.js:10
LifecycleB getDerivedStateFromProps LifecycleB.js:13
LifecycleB render LifecycleB.js:22
LifecycleB componentDidMount LifecycleB.js:18
LifecycleA componentDidMount
```

## Updating


## Unmounting


## Error Handling
