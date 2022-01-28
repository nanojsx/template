import Nano, { h, Helmet } from 'nano-jsx'
import MainLayout from '../layouts/MainLayout'
import TodoList from '../components/TodoList'

export const HomePage = (props: any) => {
  return (
    <MainLayout {...props}>
      <Helmet>
        <title>Home Page</title>
      </Helmet>

      <Helmet footer>
        <script async src="/public/js/home.hydrate.js"></script>
      </Helmet>

      <div id="homePage">
        <h1>Home Page</h1>
        <div id="todo-list">
          <TodoList />
        </div>
      </div>
    </MainLayout>
  )
}
