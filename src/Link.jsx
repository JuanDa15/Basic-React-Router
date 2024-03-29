import { BUTTONS, EVENTS } from './consts'

export function navigate (href) {
  // Realizar la navegación sin recargar la pagina
  window.history.pushState({}, '', href)
  // Crear un evento personalizado para avisar que se cambio la url
  const navigationEvent = new Event(EVENTS.PUSHSTATE)
  window.dispatchEvent(navigationEvent)
}

export function Link ({ target, to, ...props }) {
  const handleClick = (event) => {
    const isMainEvent = event.button === BUTTONS.primary // primary click
    const isModifiedEvent = event.metaKey || event.altKey || event.ctrlKey || event.shiftKey
    const isManageableEvent = target === undefined || target === '_self'
    if (isMainEvent && isManageableEvent && !isModifiedEvent) {
      event.preventDefault()
      navigate(to) // Navegación con SPA
    }
  }

  return (
    <a onClick={handleClick} href={to} target={target} {...props} />
  )
}
