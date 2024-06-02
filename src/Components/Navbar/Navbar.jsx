
import {assets} from '../../assets/assets'
import { Link } from 'react-scroll';
import './Navbar.css';
import { useRef } from 'react';
const Navbar = () => {
 const menuRef=useRef();

 const openMenu=()=>{
  menuRef.current.style.right="0"
 }
 const closeMenu=()=>{
  menuRef.current.style.right="-350px"
 }
  return (
    <div className='navbar'>
      <h1 >PAWAN KUMAR SANGARE</h1>
      <img src={assets.menu_open} alt="" className='nav-mob-open' onClick={openMenu}/>
      <ul ref={menuRef} className='nav-menu' onClick={closeMenu}>
      <img src={assets.menu_close}  alt=""  className='nav-mob-close' />
        <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='about' smooth={true} offset={-50} duration={500}>About</Link></li>
        <li><Link to='service' smooth={true} offset={-110} duration={700}>Service</Link></li>
        <li><Link to='work' smooth={true} offset={-150} duration={900}>Portfolio</Link></li>
        <li><Link to='contact' smooth={true} offset={-150} duration={900}>Contact</Link></li>
        </ul>
        <div className="nav-connect">
        <Link to='follow' smooth={true} offset={-150} duration={900}>Follow</Link>
        </div>
    </div>
  )
}

export default Navbar