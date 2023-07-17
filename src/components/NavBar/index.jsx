import { Header, Logo, Ul, IconMenuMobile, ButtonSearch, InputSearch} from "./styled"
import {Link, useNavigate} from "react-router-dom"
import { BiCameraMovie, BiSearchAlt2, BiMenu, BiX} from "react-icons/bi"
import { useEffect, useState } from "react"


const NavBar = () => {
  const [windowWidth, setWindowWidth] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [openMenu, setOpenMenu] = useState(false)
  const [openSearch, setOpenSearch] = useState(false)
  const [search, setSearch] = useState("")
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if(!search) return
    navigate(`/search?q=${search}`)
    setSearch("")
  }

  useEffect(() => {    
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    if(windowWidth < 950) setIsMobile(true); 
    else setIsMobile(false)
    return () => window.removeEventListener("resize", handleResize);
  }, [windowWidth]);

  return(
    <>
    <Header>
      <Logo>
        <h2><Link to="/"> <BiCameraMovie />TheMovies</Link></h2>
        <small>By Valeska</small>
      </Logo>
      <div className="container">
        <Ul className={`${ isMobile && openMenu ? "open-menu" : "close-menu" }`} onClick={isMobile ? () => setOpenMenu(!openMenu) : undefined} >
          <li><a href="#best">Melhores</a></li>
          <li><a href="#popular">Populares</a></li>
          <li><a href="#upcoming">Recentes</a></li>
          <li><a href="#nowplaying">Em Cartaz</a></li>        
        </Ul>
        <ButtonSearch onClick={() => setOpenSearch(!openSearch)}>
            <BiSearchAlt2 />          
        </ButtonSearch>       
      
      <IconMenuMobile onClick={() => setOpenMenu(!openMenu)}>
        {openMenu ?  <BiX /> : <BiMenu />}
      </IconMenuMobile>
      </div> 
    </Header>
    <InputSearch onSubmit={handleSubmit} className={`${openSearch ? "open-search" : "close-search" }`}>
      <input type="text" placeholder="Busque um filme" value={search}
          onChange={(e) => setSearch(e.target.value)} />
    </InputSearch>
    </>
  )
}

export default NavBar