# Stylesheet

* [ Block Element Modifier](http://getbem.com/introduction)
* [Sass](https://sass-lang.com)

## [JSS](https://cssinjs.org/?v=v10.4.0) / react-jss

* [Setting up Content Security Policy with JSS](https://cssinjs.org/csp?v=v10.4.0#setting-up-content-security-policy-with-jss)

```
import React from 'react'
import {render} from 'react-dom'
import {createUseStyles} from 'react-jss'

// Create your Styles. Remember, since React-JSS uses the default preset,
// most plugins are available without further configuration needed.
const useStyles = createUseStyles({
  myButton: {
    color: 'green',
    margin: {
      // jss-expand gives more readable syntax
      top: 5, // jss-default-unit makes this 5px
      right: 0,
      bottom: 0,
      left: '1rem'
    },
    '& span': {
      // jss-nested applies this to a child span
      fontWeight: 'bold' // jss-camel-case turns this into 'font-weight'
    }
  },
  myLabel: {
    fontStyle: 'italic'
  }
})

const Button = ({children}) => {
  const classes = useStyles()
  return (
    <button className={classes.myButton}>
      <span className={classes.myLabel}>{children}</span>
    </button>
  )
}

const App = () => <Button>Submit</Button>

render(<App />, document.getElementById('root'))
```

## CSS

## Grid

* https://developer.mozilla.org/fr/docs/Web/CSS/CSS_Grid_Layout
* https://css-tricks.com/snippets/css/complete-guide-grid/
