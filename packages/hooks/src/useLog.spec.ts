import { renderHook } from '@testing-library/react-hooks'

import { useLog } from './useLog'

afterEach(() => {
  jest.resetAllMocks()
})

describe('useLog', () => {
  it('Should call console.log', () => {
    spyOn(console, 'log')

    renderHook(() => useLog('foo', 'bar'))

    expect(console.log).toHaveBeenCalledWith('foo', 'bar')
  })

  it('Should call console.log only once when values have not changed', () => {
    spyOn(console, 'log')

    const { rerender } = renderHook(() => useLog('foo', 'bar'))
    rerender()

    expect(console.log).toHaveBeenCalledTimes(1)
  })

  it('Should call everytime values have changed', () => {
    spyOn(console, 'log')

    const { rerender } = renderHook(
      (props: { prop: string }) => useLog('foo', props.prop),
      {
        initialProps: { prop: 'bar' }
      }
    )

    rerender({ prop: 'baz' })

    expect(console.log).toHaveBeenCalledTimes(2)
    expect(console.log).toHaveBeenCalledWith('foo', 'bar')
    expect(console.log).toHaveBeenCalledWith('foo', 'baz')
  })
})
