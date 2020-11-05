import React, {useEffect} from 'react'
import Helmet from "react-helmet";

export function Functional(props) {
  const num = props.match.params.num || 100
  useEffect(() => {
    console.log('useEffect')
  })
  console.time('func')
  for (let i=0; i < num; i++) {
    console.log(i)
  }
  console.timeEnd('func')

  return <div>
    <Helmet>
      <title>functional component 実装</title>
      <meta
          name="description"
          content="functional component description class component description"
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
          content="functional component description"
      />
    </Helmet>
    <div>functional component</div>
  </div>
}
