// pages/index.jsx
/** @jsx jsx */
import { jsx } from 'theme-ui'
import Link from 'next/link'

export default () => (
  <div sx={{ height: `calc(100vh - 60px)`, backgroundColor: '#278ea5', color:'#21e6c1'}}>
    <div sx={{variant: 'containers.page', display: 'flex', alignItems: 'center', height: '100%'}}>
      <h1 sx={{fontSize: 8, my: 0}}>Welcome to ranting randy, where you can let it all out!</h1>
    </div>
  </div>
)