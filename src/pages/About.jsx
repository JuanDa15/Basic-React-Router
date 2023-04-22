import { Link } from '../Link'

const i18n = {
  es: {
    title: 'Sobre nosotros',
    description: 'Hola mi nombre es Juan David Osorio, Tengo 23 años',
    button: 'Inicio'
  },
  en: {
    title: 'About us',
    description: 'Hello my name is Juan David Osorio, Im 23 years old',
    button: 'Home'
  }
}

const useI18n = (lang) => {
  return i18n[lang] || i18n.en
}

function About ({ routeParams }) {
  const i18n = useI18n(routeParams.lang ?? 'en')
  return (
    <>
      <h1>{i18n.title}</h1>
      <p>{i18n.description}</p>
      <picture>
        <img src='https://avatars.githubusercontent.com/u/59321452?v=4' alt='foto' />
      </picture>
      <Link to='/'>{i18n.button}</Link>
    </>
  )
}

export default About
