import { Children, useEffect, useState } from 'react'
import { EVENTS } from './consts'
import { match } from 'path-to-regexp'
import { getCurrentPath } from './utils'

export function Router ({ children, routes = [], defaultComponent: DefaultComponent = () => <h1>404</h1> }) {
  const [currentPath, setCurrentPath] = useState(getCurrentPath())
  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(getCurrentPath())
    }

    window.addEventListener(EVENTS.PUSHSTATE, onLocationChange)
    window.addEventListener('popstate', onLocationChange)
    return () => {
      window.removeEventListener(EVENTS.POPSTATE, onLocationChange)
      window.removeEventListener('popstate', onLocationChange)
    }
  }, [])

  let routeParams = {}

  // Add routes from children Route
  const routesFromChildren = Children.map(children, ({ props, type }) => {
    const { name } = type
    const isRoute = name === 'Route'
    return isRoute ? props : null
  })

  const routesToUse = routes.concat(routesFromChildren).filter(Boolean)
  const PageToRender = routesToUse.find(({ path }) => {
    if (path === currentPath) return true

    // Se a usado path to regex para poder detectar url's dinamicas como
    // esta /query/:query
    const matcherUrl = match(path, { decode: decodeURIComponent })
    const matched = matcherUrl(currentPath)
    if (!matched) return false

    // Guardar los parametros de la url para poder retornarlos
    routeParams = matched.params
    return true
  })?.Component
  return PageToRender ? <PageToRender routeParams={routeParams} /> : <DefaultComponent routeParams={routeParams} />
}
