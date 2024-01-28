import Header from "../Header/Header"
import { Outlet } from "react-router-dom"
import "./Layout.css"

export default function Layout() {
  return (
    <>
      <Header />
      <main className="main-content">
        <Outlet /> {/* renderiza o componente filho da rota atual */}
      </main>
      <footer>
        footer
      </footer>
    </>
  )
}
