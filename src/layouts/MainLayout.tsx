import Nano, { withStyles, Link } from 'nano-jsx'
import { VERSION } from 'nano-jsx/lib/version'

import styles from '../styles.scss'
import mainStyles from './MainLayout.scss'

const MainLayout = (props: any) => {
  const { path } = props

  const isBold = (href: string) => (href === path ? { fontWeight: 'bold' } : {})

  return (
    <div id="root">
      <header>
        <nav>
          <Link prefetch href="/" style={isBold('/')}>
            Home
          </Link>
          <Link prefetch href="/about" style={isBold('/about')}>
            About
          </Link>
        </nav>
      </header>
      <div id="content">{props.children}</div>
      <footer>
        <div>
          <a href="https://nanojsx.github.io/">Visit Website</a> |{' '}
          <a href="https://github.com/nanojsx/template">Get the Template</a> |{' '}
          <a href="https://github.com/sponsors/yandeu">Become a Sponsor</a>
        </div>
        <div>
          <small>Nano JSX v{VERSION}</small>
        </div>
      </footer>
    </div>
  )
}

export default withStyles(styles.concat(mainStyles))(MainLayout)
