import { renderHook, act } from '@testing-library/react-hooks'

import { useToggle } from './useToggle'

describe('useToggle', () => {
  it('Should set default value', () => {
    const test1 = renderHook(() => useToggle(true))

    expect(test1.result.current[0]).toEqual(true)

    const test2 = renderHook(() => useToggle(false))

    expect(test2.result.current[0]).toEqual(false)
  })

  it('Should toggle boolean', () => {
    const { result } = renderHook(() => useToggle(true))

    act(() => {
      result.current[1]()
    })

    expect(result.current[0]).toEqual(false)
  })
})
