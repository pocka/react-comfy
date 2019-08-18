# @react-comfy/hooks

Handy hooks.

## Installation

```sh
yarn add @react-comfy/hooks
# or
npm i @react-comfy/hooks
```

## Usage

Import hooks and use them in your components.

`@react-comfy/hooks` is transpiled to ES2015.
If you're targeting ES5, use `@react-comfy/hooks/esm/es5` (ESModule) or `@react-comfy/hooks/cjs/es5` (CommonJS) instead.

```tsx
// Example usage of useId
import * as React from 'react'
import { useId } from '@react-comfy/hooks'

export const MyComponent: React.FC = () => {
  const labelId = useId('my_component_label__')

  return (
    <div>
      <span id={labelId}>Description for input</span>
      <input aria-labelledby={labelId} />
    </div>
  )
}
```
