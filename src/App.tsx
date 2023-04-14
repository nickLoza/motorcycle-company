import Layout from "./components/layout/Layout"
import ContentContextProvider from "./provider/Provider"

function App() {

  return (
    <ContentContextProvider>
       <Layout/>
    </ContentContextProvider>
  )
}

export default App
