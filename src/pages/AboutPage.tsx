import Nano, { Helmet } from 'nano-jsx'
import MainLayout from '../layouts/MainLayout'

export const AboutPage = (props: any) => {
  return (
    <MainLayout {...props}>
      <Helmet>
        <title>About Page</title>
      </Helmet>
      <h1>About page</h1>
      <p>This is the Nano JSX Template.</p>
      <p>
        Although, this App is completely build using Isomorphic JSX, it contains{' '}
        <b>only very little JavaScript.</b>
      </p>
      <p>It is a MPA but feels like an SPA.</p>
      <p>
        Repository:{' '}
        <a
          style="text-decoration: underline;"
          href="https://github.com/nanojsx/template"
        >
          github.com/nanojsx/template
        </a>
      </p>

      <p>
        Author:{' '}
        <a
          style="text-decoration: underline;"
          href="https://github.com/yandeu/"
        >
          @yandeu
        </a>
      </p>
    </MainLayout>
  )
}
