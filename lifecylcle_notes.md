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


## Updating


## Unmounting


## Error Handling