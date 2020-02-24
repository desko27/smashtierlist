import { useEffect, useRef, useState } from 'react'

const isServer = typeof window === 'undefined'

export default function useOnScreen ({ ref, once = true, rootMargin = '0px' } = {}) {
  const [isIntersecting, setIntersecting] = useState(isServer)
  const outerRef = useRef()

  useEffect(() => {
    const usableRef = ref || outerRef
    const { current } = usableRef || {}
    if (!current) return

    let observer
    ;(window.IntersectionObserver
      ? Promise.resolve()
      : import('intersection-observer')
    ).then(() => {
      observer = new window.IntersectionObserver(
        ([entry]) => {
          // update state when observer callback fires
          setIntersecting(entry.isIntersecting)
          if (entry.isIntersecting) {
            // unobserve now if we've set once option
            once && observer && observer.unobserve(current)
          }
        },
        { rootMargin }
      )

      current && observer.observe(current)
    })

    return () => {
      observer && observer.unobserve(current)
    }
  }, [once, ref, rootMargin])

  return [isIntersecting, outerRef]
}
