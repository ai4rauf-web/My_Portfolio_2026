import { NavLink } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/lab', label: 'My Lab' },
  { to: '/contacts', label: 'Contacts' },
]

const Navbar = () => (
  <nav className="sticky top-4 z-50 flex justify-center px-4 sm:top-10">
    <div className="flex gap-1 rounded-full border-[0.5px] border-[#949494] bg-white/90 p-1 backdrop-blur-md">
      {navItems.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          end={item.to === '/'}
          className={({ isActive }) =>
            `whitespace-nowrap rounded-full px-3 py-2 text-sm transition-colors sm:px-4 sm:text-base ${
              isActive ? 'bg-ink text-white' : 'text-muted hover:text-ink'
            }`
          }
        >
          {item.label}
        </NavLink>
      ))}
    </div>
  </nav>
)

export default Navbar
