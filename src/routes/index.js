import { useRoutes } from "react-router-dom"
import { useSelector } from "react-redux"
/* config theme */
import { ThemeProvider } from "styled-components"
import { darkTheme, GlobalStyles, lightTheme } from "../theme"
import { routes } from "./rutes"
const Rutas = () => {
  const { darkmode, rolLogin} = useSelector(state => state.user)

  const routing = useRoutes(routes(rolLogin))
  return (
      <ThemeProvider theme={darkmode ? darkTheme : lightTheme}>
        <GlobalStyles/>
        {
          routing
        }
      </ThemeProvider>
  )
}

export default Rutas