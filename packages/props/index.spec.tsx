import * as React from 'react'
import {
  StyleableProps,
  ButtonProps,
  ControlledInputProps,
  UncontrolledInputProps
} from '.'

const render = (el: React.ReactElement) => void 0

const Styleable: React.FC<StyleableProps & { foo: string }> = () => <div />

render(<Styleable foo="bar" />)
render(<Styleable foo="bar" className="" style={{ fill: 'currentColor' }} />)

const Button: React.FC<ButtonProps> = () => <div />

render(<Button />)
render(
  <Button
    id=""
    disabled
    onClick={ev => console.log(ev.currentTarget.disabled)}
  />
)

const ControlledInput: React.FC<ControlledInputProps> = () => <div />

render(<ControlledInput value="" />)
render(
  <ControlledInput
    value=""
    id=""
    name=""
    disabled
    onBlur={console.log}
    onChange={(ev, value) => console.log(ev.currentTarget.value, value)}
  />
)

const ControlledNumber: React.FC<
  ControlledInputProps<HTMLInputElement, number>
> = () => <div />

render(<ControlledNumber value={0} />)
render(
  <ControlledNumber
    value={0}
    onChange={(ev, value) => console.log(value * 2)}
  />
)

const UncontrolledInput: React.FC<
  UncontrolledInputProps<HTMLTextAreaElement, boolean>
> = () => <div />

render(<UncontrolledInput />)
render(
  <UncontrolledInput
    value={true}
    onChange={(ev, value) => console.log(value)}
  />
)
render(
  <UncontrolledInput
    defaultValue={true}
    onChange={(ev, value) => console.log(ev.currentTarget.rows, value)}
  />
)
