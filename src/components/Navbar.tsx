import { NavBarStyle } from "../styles/NavBar.style"

export interface navBarInterface {};

const Navbar: React.FC<navBarInterface> = () => {
  return (
    <NavBarStyle>
        <h1>Navbar component</h1>
    </NavBarStyle>
  )
}

export default Navbar