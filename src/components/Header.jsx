import './Header.css'

function Header() {
  return (
    <header className="main-header">
      <div className="header-content">
        <div className="logo">
          <h1>SAFEENA</h1>
          <p>PREMIUM BASMATI RICE</p>
        </div>
        
        <nav className="main-nav">
          <a href="#home">Home</a>
          <a href="#products">Products <span className="dropdown-arrow">▼</span></a>
          <a href="#distributor">Become a Distributor</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="header-icons">
          <svg className="icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.35-4.35"></path>
          </svg>
          <svg className="icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
          <svg className="icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <path d="M16 10a4 4 0 0 1-8 0"></path>
          </svg>
        </div>
      </div>
    </header>
  )
}

export default Header

