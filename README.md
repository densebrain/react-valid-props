# react-valid-props

If you havent already - when you upgrade to react 15.2 - you may start getting a few
unknown prop errors - problem now solved

```
import filterProps from 'react-valid-props'

<div {...filterProps(this.props)}></div>

```

Simple!