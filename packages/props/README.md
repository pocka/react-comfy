# @react-comfy/props

A set of props typings in TypeScript.

## Installation

```sh
yarn add -D @react-comfy/props
# or
npm i --save-dev @react-comfy/props
```

## Usage

Import typings and use them as props. You can combine props by using [intersection types](https://www.typescriptlang.org/docs/handbook/advanced-types.html#intersection-types).

```tsx
// Example usage of ControlledInputProps and StyleableProps
import * as React from 'react'
import { ControlledInputProps, StyleableProps } from '@react-comfy/props'

interface MyComponentProps {
  foo: 'bar'
}

export const MyComponent: React.FC<
  MyComponentProps & StyleableProps & ControlledInputProps
> = ({ foo, disabled, value, className, style, onChange, ...rest }) => {
  const change = React.useCallback<React.ChangeEventHandler<HTMLInputElement>>(
    ev => {
      if (onChange) {
        onChange(ev, ev.currentTarget.value)
      }
    },
    [onChange]
  )

  return (
    <div className={className} style={style} {...rest}>
      <input disabled={disabled} value={value} onChange={change} />
    </div>
  )
}
```
