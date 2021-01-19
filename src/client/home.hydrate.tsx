import * as Nano from 'nano-jsx/lib/core'
import { printVersion } from 'nano-jsx/lib/helpers'
import TodoList from '../components/TodoList'

const hydrate = async () => {
  Nano.hydrate(<TodoList />, document.getElementById('todo-list'))

  // print the nano-jsx version in the console
  printVersion()
}

hydrate()
