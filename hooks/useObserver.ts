import { RefObject, useEffect } from 'react'

export const useObserver = (
  elementRef: RefObject<Element>,
  callback: () => void
): void => {
  useEffect(() => {
    const node = elementRef?.current
    const observerParams = { threshold: 0, root: null, rootMargin: '100%' }
    const observer = new IntersectionObserver((entries) => {
      const first = entries[0]
      if (first.isIntersecting) {
        callback?.()
      }
    }, observerParams)
    if (!node) return
    observer.observe(node)

    return () => observer.disconnect()
  }, [callback, elementRef])
}
