import * as Nano from 'nano-jsx/lib/core'

// see home.hydrate.tsx to see how to lazy load (code splitting with dynamic Imports) this component

const LazyExample = () => {
  console.log('I am LazyExample')
  return (
    <div>
      LazyExample
      <br />
      <small>
        <i>
          This text is lazy loaded (in another .js file) and will appear once
          you click on the page.
        </i>
      </small>
    </div>
  )
}

export default LazyExample
