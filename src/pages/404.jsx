import { Link } from '../Link'

export function Page404 () {
  return (
    <>
      <div>
        <h1>This is NOT fine</h1>
        <img src='https://media.giphy.com/media/9M5jK4GXmD5o1irGrF/giphy.gif' alt='gift' />
      </div>
      <Link to='/'>Volver al home</Link>
    </>
  )
}
