import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom"
import HomePage from "./pages/Home/Home"
import AboutPage from "./pages/About/About"

const browserRouter = createBrowserRouter(createRoutesFromElements(
  <Route path="/">
    <Route index element={<HomePage />} />
    <Route path="about" element={<AboutPage />} />
  </Route>
))

function App() {
  return (
    <RouterProvider router={browserRouter} />
  )
}

export default App
