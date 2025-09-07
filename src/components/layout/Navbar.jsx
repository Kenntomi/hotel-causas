import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #ffffff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Logo = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  color: #1a365d;
  font-family: 'Playfair Display', serif;

  span {
    color: #d4af37;
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: ${({ $isOpen }) => ($isOpen ? '0' : '-100%')};
    width: 70%;
    height: 100vh;
    flex-direction: column;
    justify-content: center;
    background-color: #ffffff;
    box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
    transition: right 0.3s ease-in-out;
    z-index: 1001;
  }
`;


const NavLink = styled(Link)`
  margin: 0 1rem;
  color: #333;
  text-decoration: none;
  font-weight: 500;
  position: relative;
  transition: all 0.3s ease;

  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -5px;
    left: 0;
    background-color: #d4af37;
    transition: width 0.3s ease;
  }

  &:hover {
    color: #d4af37;

    &:after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    margin: 1.5rem 0;
    font-size: 1.2rem;
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #333;
  z-index: 1002;

  @media (max-width: 768px) {
    display: block;
  }
`;

const BookNowButton = styled(Link)`
  padding: 0.5rem 1.5rem;
  background-color: #d4af37;
  color: white;
  border: none;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background-color: #b8971f;
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    margin-top: 1.5rem;
  }
`;

const Overlay = styled.div`
  display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <NavbarContainer style={{ 
      backgroundColor: scrolled ? '#ffffff' : 'rgba(255, 255, 255, 0.9)',
      boxShadow: scrolled ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none'
    }}>
      <Logo as={Link} to="/" style={{ textDecoration: 'none', cursor: 'pointer' }}>
        Hotel <span>Causas</span>
      </Logo>

      <MenuButton onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </MenuButton>

      <Overlay $isOpen={isOpen} onClick={toggleMenu} />

      <NavLinks $isOpen={isOpen}>
        <NavLink to="/" onClick={() => setIsOpen(false)}>Inicio</NavLink>
        <NavLink to="/habitaciones" onClick={() => setIsOpen(false)}>Habitaciones</NavLink>
        <NavLink to="/servicios" onClick={() => setIsOpen(false)}>Servicios</NavLink>
        <NavLink to="/galeria" onClick={() => setIsOpen(false)}>Galería</NavLink>
        <NavLink to="/nosotros" onClick={() => setIsOpen(false)}>Nosotros</NavLink>
        <BookNowButton to="/reservar" onClick={() => setIsOpen(false)}>Reservar Ahora</BookNowButton>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;