import { Link } from 'react-router-dom';
import './Header.css';
import rectangle from '../../images/rectangle13.svg';
import polygon from '../../images/polygon1.svg';
import ellipse from '../../images/ellipse8.svg';

function Header(){
    return (
      <header>
          <nav className='gr-header'>
            <div className='gr-logo'>
              <div className='ellipse8'>
                <img src={ ellipse } className="#" alt="logo" />
              </div>
              <div className='rectangle13'>
                <img src={ rectangle } className="#" alt="logo" />
              </div>
              <div className='polygon1'>
                <img src={ polygon } className="#" alt="logo" />
              </div>
              <p className='text-header somosmas'>SOMOS MAS</p>
            </div>
              <ul className='menu'>
                <li className='menu-item'>
                  <a className="text-header inicio" href='#'>Inicio</a>
                  {/* <Link className="text-header" to="/inicio">Inicio</Link> */}
                </li>
                <li className='menu-item'>
                  <a className="text-header" href="#">Nosotros</a>
                  {/* <Link className="text-header" to="/nosotros">Nosotros</Link> */}
                </li>
                <li className='menu-item'>
                  <a className="text-header" href='#'>Novedades</a>
                  {/* <Link className="text-header" to="/novedades">Novedades</Link> */}
                </li>
                <li className='menu-item'>
                  <a className="text-header" href='#'>Testimonios</a>
                  {/* <Link className="text-header" to="/testimonios">Testimonios</Link> */}
                </li>
                <li className='menu-item'>
                  <a className="text-header" href="#">Contacto</a>
                  {/* <Link className="text-header" to="/contacto">Contacto</Link> */}
                </li>
                <li className='menu-item'>
                  <a className="text-header" href='#'>Campañas</a>
                  {/* <Link className="text-header" to="/campanias">Campañas</Link> */}
                </li>
                <li className='menu-item login'>
                  <a className="text-header" href='#'>Log In</a>
                  {/* <Link className="text-header" to="/login">Log In</Link> */}
                </li>
                <li className='menu-item register'>
                  <a className="text-header white" href="#">Registrate</a>
                  {/* <Link className="text-header" to="/register">Registrate</Link> */}
                </li>
              </ul>
          </nav>
      </header>
    );
  }

/* Dejo comentados los Link porque falta crear las páginas */
   
  export default Header;

