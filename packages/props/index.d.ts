import {
  CSSProperties,
  ChangeEvent,
  ChangeEventHandler,
  FocusEventHandler,
  MouseEventHandler
} from 'react'

/**
 * Components which allow users to style them should have
 * these props and pass them down to outermost element.
 */
export interface StyleableProps {
  style?: CSSProperties

  className?: string
}

/**
 * Props for button and button-like components.
 */
export interface ButtonProps<T = HTMLButtonElement> {
  id?: string
  disabled?: boolean

  onClick?: MouseEventHandler<T>
}

/**
 * Props for controlled input components.
 * More about controlled components: https://reactjs.org/docs/forms.html#controlled-components
 */
export interface ControlledInputProps<T = HTMLInputElement, V = string> {
  id?: string
  name?: string
  disabled?: boolean

  value: V

  onBlur?: FocusEventHandler<T>
  onChange?(ev: ChangeEvent<T>, value: V): void
}

/**
 * Props for uncontrolled input components.
 * More about uncontrolled components: https://reactjs.org/docs/uncontrolled-components.html
 */
export type UncontrolledInputProps<T = HTMLInputElement, V = string> = Omit<
  ControlledInputProps<T, V>,
  'value'
> & {
  value?: V

  defaultValue?: V
}
