import { useEffect } from 'react'

const useLogFactory = (
  level: Extract<
    keyof typeof console,
    'log' | 'info' | 'warn' | 'error' | 'debug'
  >
) => (...values: any[]): void => {
  useEffect(() => {
    console[level](...values)
  }, values)
}

export const useLog = useLogFactory('log')

export default useLog

export const useInfoLog = useLogFactory('info')
export const useWarnLog = useLogFactory('warn')
export const useErrorLog = useLogFactory('error')
export const useDebugLog = useLogFactory('debug')

export const useDevLog =
  process.env.NODE_ENV === 'development' ? useLog : () => void 0
export const useDevInfoLog =
  process.env.NODE_ENV === 'development' ? useInfoLog : () => void 0
export const useDevWarnLog =
  process.env.NODE_ENV === 'development' ? useWarnLog : () => void 0
export const useDevErrorLog =
  process.env.NODE_ENV === 'development' ? useErrorLog : () => void 0
export const useDevDebugLog =
  process.env.NODE_ENV === 'development' ? useDebugLog : () => void 0
