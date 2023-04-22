import { useEffect } from 'react'

export function QueryPage ({ routeParams }) {
  useEffect(() => {
    document.title = `search: ${routeParams.query}`
  }, [])
  return (
    <>
      <h1>Haz buscado: {routeParams.query}</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus ipsam deserunt, praesentium et alias natus libero totam aliquam doloribus? Possimus, vel sunt! Ipsum quas repellat quod facilis asperiores reprehenderit, earum, dolores iste tempora non culpa illo! Reiciendis rerum possimus aperiam. Minus soluta totam nisi similique omnis ullam beatae, eos corporis!
      </p>
    </>
  )
}
