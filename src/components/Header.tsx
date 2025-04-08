import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useMedicalProfile } from '../context/MedicalProfileContext';

const HeaderWrapper = styled.header`
  background-color: #5a1ab9;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  position: sticky;
  top: 0;
  z-index: 100;
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 0;
  max-width: var(--container-width);
  margin: 0 auto;
  padding: 0 20px;
`;

const Logo = styled(Link)`
  font-size: 24px;
  font-weight: 700;
  color: white;
  display: flex;
  align-items: center;
  
  span {
    color: #FFD700;
  }
`;

const LogoIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: white;
  color: #5a1ab9;
  border-radius: 8px;
  margin-right: 10px;
  font-weight: 700;
`;

interface NavProps {
  isOpen: boolean;
}

const Nav = styled.nav<NavProps>`
  display: flex;
  align-items: center;
  
  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 70px;
    left: 0;
    right: 0;
    background-color: white;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
    z-index: 10;
  }
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

const NavItem = styled.li`
  margin: 0 5px;
  
  @media (max-width: 768px) {
    margin: 5px 0;
    width: 100%;
  }
`;

const NavItemLink = styled(NavLink)`
  color: white;
  font-weight: 500;
  padding: 8px 15px;
  border-radius: var(--border-radius);
  transition: var(--transition);
  display: block;
  
  &:hover {
    color: #FFD700;
    background-color: rgba(255, 255, 255, 0.1);
  }
  
  &.active {
    color: #FFD700;
    background-color: rgba(255, 255, 255, 0.15);
  }
  
  @media (max-width: 768px) {
    padding: 12px 15px;
    color: var(--text-primary);
    
    &:hover, &.active {
      color: #5a1ab9;
      background-color: var(--light-gray);
    }
  }
`;

const ProfileButton = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 15px;
  border-radius: var(--border-radius);
  background-color: rgba(255, 255, 255, 0.1);
  border: none;
  cursor: pointer;
  color: white;
  font-weight: 500;
  transition: var(--transition);
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

const ProfileImage = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: white;
  color: #5a1ab9;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
`;

const MenuToggle = styled.button`
  display: none;
  background: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: white;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const Header: React.FC = () => {
  const { profile } = useMedicalProfile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  
  const initials = profile.name
    .split(' ')
    .map(name => name[0])
    .join('');
  
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <Logo to="/">
          <LogoIcon>P</LogoIcon>
          Provider<span>Now</span>
        </Logo>
        
        <MenuToggle onClick={toggleMenu}>
          {isMenuOpen ? '✕' : '☰'}
        </MenuToggle>
        
        <Nav isOpen={isMenuOpen}>
          <NavList>
            <NavItem>
              <NavItemLink to="/" onClick={closeMenu}>
                Home
              </NavItemLink>
            </NavItem>
            <NavItem>
              <NavItemLink to="/marketplace" onClick={closeMenu}>
                Marketplace
              </NavItemLink>
            </NavItem>
            <NavItem>
              <NavItemLink to="/consultation" onClick={closeMenu}>
                Consultations
              </NavItemLink>
            </NavItem>
            <NavItem>
              <NavItemLink to="/history" onClick={closeMenu}>
                Medical History
              </NavItemLink>
            </NavItem>
            <NavItem>
              <NavItemLink to="/about" onClick={closeMenu}>
                About Us
              </NavItemLink>
            </NavItem>
          </NavList>
        </Nav>
        
        <ProfileButton>
          <ProfileImage>{initials}</ProfileImage>
          <span>{profile.name}</span>
        </ProfileButton>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header; 