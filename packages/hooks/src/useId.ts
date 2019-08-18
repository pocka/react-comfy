import { useMemo } from 'react'

const counter = {
  internalValue: 0,
  get value() {
    return (counter.internalValue++).toString(32)
  }
}

export const useId = (prefix: string = 'react_use_id__') => {
  return useMemo(() => {
    return prefix + counter.value
  }, [prefix])
}

export default useId
