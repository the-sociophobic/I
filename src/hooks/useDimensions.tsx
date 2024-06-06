import { useSyncExternalStore } from 'react'


const useDimensions = (getSnapshot = _getSnapshot) => {
  return useSyncExternalStore(subscribe, getSnapshot)
}

const subscribe = (onStoreChange: () => void = () => {}) => {
  window.addEventListener('resize', onStoreChange)

  return () => window.removeEventListener('resize', onStoreChange)
}

const _getSnapshot = () => {
  return {
    width: window.innerWidth,
    height: window.innerHeight
  }
}


export default useDimensions
