import { h, hydrate } from 'nano-jsx/lib/core.js'
import { printVersion } from 'nano-jsx/lib/helpers.js'
import TodoList from '../components/TodoList.js'

const main = async () => {
  hydrate(<TodoList />, document.getElementById('todo-list'))

  // example of a lazy loaded module
  window.addEventListener(
    'click',
    () =>
      import('../components/LazyExample/LazyExample.js').then(({ default: LazyComponent }) => {
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
