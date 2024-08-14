import { useCallback, useState } from 'react'
import { Snack } from '../types/snack'

interface Properties {
  loading: boolean
  snacks: Snack[]
}

export function useSnack() {
  const [properties, setProperties] = useState<Properties>({} as Properties)

  const handleSetProperties = useCallback((params: Partial<Properties>) => {
    setProperties((oldState) => ({ ...oldState, ...params }))
  }, [])

  const handleCreateSnack = useCallback(
    (params: Snack) => {
      handleSetProperties({
        snacks: [...properties.snacks, params],
      })
    },
    [handleSetProperties, properties.snacks],
  )

  return {
    loading: properties.loading,
    snacks: properties.snacks,
    handlers: {
      handleCreateSnack,
    },
  }
}
