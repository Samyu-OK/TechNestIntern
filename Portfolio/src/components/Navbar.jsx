import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <header className="header">
        <NavLink to="/" className="w-20 h-8 rounded-lg bg-white items-center justify-center flex font-bold shadow-md">
          <p className="pink-gradient_text">Home</p>
        
        </NavLink>
        <nav className="flex text-lg gap-7  font-medium">
          <NavLink to="/about" className={({isActive}) => isActive ? 'text-pink-500':'text-white'}>

          About
          </NavLink>
          <NavLink to="/projects" className={({isActive}) => isActive ? 'text-pink-500':'text-white '}>

          Projects
          </NavLink>
          <NavLink to="/contact" className={({isActive}) => isActive ? 'text-pink-500':'text-white '}>

          Contact
          </NavLink>
        
        </nav>
        
        </header>
  )
}

export default Navbar