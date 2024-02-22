
import Header from "./header/Header"
import Main from "./main/Main"
import Footer from "./footer/Footer"
import { Box } from '@mui/material'
import { node } from 'prop-types'
function Layout({children}) {
  return (

<Box sx={{ minHeight: "100vh", backgroundColor: "lightgray" }}>
<Header/>
<Main>
{children}
</Main>

<Footer/>
</Box>



  )
}
Layout.propTypes={
  children:node.isRequired
}

export default Layout
