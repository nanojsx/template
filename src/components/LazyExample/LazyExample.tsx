import * as Nano from 'nano-jsx/lib/core'

// you don't need "withStyles" if you include your css in the client bundle
// import { withStyles } from 'nano-jsx/lib/withStyles'

// import normal styling (ending with .client.scss)
import './LazyExample.client.scss'

// import css modules styling (ending with .client.module.scss)
import className from './LazyExample.client.module.scss'

// see home.hydrate.tsx to see how to lazy load (code splitting with dynamic Imports) this component
const LazyExample = () => {
  console.log('I am LazyExample')
  return (
    <div id="lazy-example" class={className['lazy-example']}>
      <p>
        LazyExample
        <br />
        <small>
          <i>
            This text and its styling are lazy loaded (in another .js file) and
            will appear once you click on the page.
          </i>
        </small>
      </p>
    </div>
  )
}

export default LazyExample
