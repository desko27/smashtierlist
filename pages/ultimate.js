import { useLayoutEffect } from 'react'
import Router from 'next/router'

export default () => {
  useLayoutEffect(() => { Router.push('/') })
  return null
}
