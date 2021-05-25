import { BrowserRouter } from "react-router-dom";
import { ApolloProvider } from "@apollo/client"
import Rutas from "./routes";
import 'antd/dist/antd.css'
import{useAppApolloClient} from './customHook/useAppApolloClient'
function App() {
  const client = useAppApolloClient()
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
            <Rutas />
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
