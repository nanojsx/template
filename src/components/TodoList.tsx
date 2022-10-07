import { h } from 'nano-jsx/lib/core.js'
import { Component } from 'nano-jsx/lib/component.js'

import styles from './TodoList.scss'
import { withStyles } from 'nano-jsx/lib/withStyles.js'

class TodoList extends Component<{}, { todos: string[] }> {
  constructor(props: any) {
    super(props)

    // set a unique id if you use this component more than
    // once across your app and it is using a state
    this.id = 'TodoList'

    // this state now has the id 'TodoList' and can be accessed
    // by any other component using that id and the useState() hook
    this.state = { todos: [] }
  }

  didMount() {
    // get todos from localStorage
    const t = localStorage.getItem('todos')
    if (t) {
      this.state.todos = JSON.parse(t)
      this.saveAndUpdate()
    }
  }

  saveAndUpdate() {
    // save todos to localStorage
    localStorage.setItem('todos', JSON.stringify(this.state.todos))
    // update component
    this.update()
    // set focus to input element
    document.getElementById('input')?.focus()
  }

  submitHandler(e: Event) {
    e.preventDefault()
    const input = document.getElementById('input') as HTMLInputElement
    if (input.value.length > 0) {
      this.state.todos.push(input.value)
      this.saveAndUpdate()
    }
  }

  removeHandler(i: number) {
    this.state.todos.splice(i, 1)
    this.saveAndUpdate()
  }

  render() {
    return (
      <form onSubmit={(e: Event) => this.submitHandler(e)}>
        <label>Add Todo</label>
        <br />
        <input id="input" />
        <button type="submit">Add</button>
        <ul>
          {this.state.todos.map((todo: any, index: number) => (
            <li>
              {todo}{' '}
              <span onClick={() => this.removeHandler(index)} style={{ color: 'red', cursor: 'pointer' }}>
                x
              </span>
            </li>
          ))}
        </ul>
      </form>
    )
  }
}

export default withStyles(styles)(TodoList)
