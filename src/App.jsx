import { Route, Routes } from "react-router"
import Main from "./layouts/main/index"
import Layout from "./layouts/Layout"

function App() {

  return (
    <Routes>
      <Route element={<Layout/>}>
        <Route path="/" element={<Main/>}/>
      </Route>
    </Routes>
  )
}

export default App
