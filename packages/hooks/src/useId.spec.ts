import { renderHook } from '@testing-library/react-hooks'

import { useId } from './useId'

describe('useId', () => {
  it('Should generate an id', () => {
    const { result } = renderHook(() => useId())

    expect(result).toBeTruthy()
  })

  it('Should not re-generate id when component rerendered', () => {
    const { result, rerender } = renderHook(() => useId())

    const first = result.current

    rerender()

    expect(result.current).toEqual(first)
  })

  it('Should prepend prefix', () => {
    const { result } = renderHook(() => useId('foo_'))

    expect(result.current).toMatch(/^foo_/)
  })
})
