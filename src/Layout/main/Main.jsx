
import Container from '@mui/material/Container'
import { useTheme } from '../../ui/Providers/ThemeProvider'

function Main({children}) {
  const {isDark}=useTheme()
  return (
<Container maxWidth="100%" sx={{minHeight:"94vh", color:"initial",  paddingTop:"3vh", backgroundColor: isDark? "#fffffff": "e3f2fd" }  }  >
{children}
</Container>
  )
}

export default Main
