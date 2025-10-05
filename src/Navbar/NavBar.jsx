import { Link } from 'react-router-dom';
import React from 'react';
import "./NavBar.css";
import CartWidget from '../CartWidget/CartWidget';
import Logo from './logo';
import Catalogo from '../pages/Catalogo';
import HomePage from '../pages/HomePage';
import {SalesContext} from '../Context/salesContext'
const NavBar = ({ onFilterChange }) => {
  return (
    <header style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '10px 20px',
      backgroundColor: '#f0f0f0',
      borderRadius: '8px',
      marginBottom: '20px'
    }}>
      <Logo />
      <h1 style={{ margin: 0 }}>Tienda Pc Gamer</h1>
      <nav>
        <ul style={{
          display: 'flex',
          listStyle: 'none',
          padding: 0,
          margin: 0
        }}>
          <Link to="/catalogo">Catálogo</Link>
          <Link to="/">Inicio</Link>
          <li
            style={{
              margin: '0 15px',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
            onClick={() => onFilterChange('todos')}
          >
            Todos
          </li>
          <li
            style={{
              margin: '0 15px',
              cursor: 'pointer'
            }}
            onClick={() => onFilterChange('pc armada')}
          >
            Pc Armadas
          </li>
          <li
            style={{
              margin: '0 15px',
              cursor: 'pointer'
            }}
            onClick={() => onFilterChange('perifericos')}
          >
            Periféricos
          </li>
          <li
            style={{
              margin: '0 15px',
              cursor: 'pointer'
            }}
            onClick={() => onFilterChange('monitores')}
          >
            Monitores
          </li>
          <li>
            <Link to={"/shop"} className='li-sales'><CartWidget/> {SalesContext}</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;