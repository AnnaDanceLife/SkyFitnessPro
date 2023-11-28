import { useEffect } from 'react'

const useDropdownClose = (ref, handler) => {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return
      }
      handler(event)
    }
    document.addEventListener('mouseout', listener)
    return () => {
      document.removeEventListener('mouseout', listener)
    }
  }, [ref, handler])
}

export default useDropdownClose
