import { h, hydrate } from 'nano-jsx/lib/core'
import { printVersion } from 'nano-jsx/lib/helpers'
import TodoList from '../components/TodoList'

const main = async () => {
  hydrate(<TodoList />, document.getElementById('todo-list'))

  // example of a lazy loaded module
  window.addEventListener(
    'click',
    () =>
      import('../components/LazyExample/LazyExample').then(({ default: LazyComponent }) => {
        const html = hydrate(<LazyComponent />)
        const homePage = document.getElementById('homePage')
        homePage?.appendChild(html)
      }),
    { once: true }
  )

  // print the nano-jsx version in the console
  printVersion()
}

main()
