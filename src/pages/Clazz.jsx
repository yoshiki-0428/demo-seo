import React from 'react'
import Helmet from "react-helmet";

export default class Clazz extends React.Component {
  render () {
    const num = this.props.match.params.num || 100
    console.time('clazz')
    for (let i=0; i < num; i++) {
      console.log(i)
    }
    console.timeEnd('clazz')

    return (<div>
        <Helmet>
          <title>class component 実装</title>
          <meta
              name="description"
              content="class component description class component description"
          />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@test" />
          <meta property="og:locale" content="ja_JP" />
          <meta
              property="og:title"
              content="class component og:title"
          />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="http://dummyimage.com/570×295" />
          <meta property="og:url" content="https://example.com" />
          <meta property="og:site_name" content="example" />
          <meta
              property="og:description"
              content="class component description"
          />

        </Helmet>
        <div>class component!!</div>
      </div>)
  }
}
