import * as Nano from 'nano-jsx/lib/core'
import TodoList from '../components/TodoList'

const hydrate = async () => {
  Nano.hydrate(<TodoList />, document.getElementById('todo-list'))
}

hydrate()
