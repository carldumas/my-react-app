import './Header.css';

// Libraries
import styled from 'styled-components';
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Wrapper>
      <Logo to='/'>
        <Title>
          <span>My React App</span>
        </Title>
      </Logo>
      <div>
        <nav>
          <NavigationList className='menu'>
            <li>
              <div style={{ padding: '20px', cursor: 'pointer' }}>
                <span>Nav</span>
              </div>
              <ul className='sub-menu'>
                <div>
                  <NavElement>
                    <Link to='/'>Home</Link>
                  </NavElement>
                  <NavElement>
                    <Link to='/about'>About</Link>
                  </NavElement>
                </div>
              </ul>
            </li>
          </NavigationList>
        </nav>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  padding: 24px;
  background-color: #000;
  color: #fff;
  position: fixed;
  left: 0;
  z-index: 10;
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  color: #fff;
  text-decoration: none;
`;

const Title = styled.span`
  font-size: 1.5em;
  padding-left: 5px;
`;

const NavigationList = styled.ul`
  display: flex;
  flex-flow: row nowrap;
  width: 40%;
  align-items: center;
  list-style: none;
  text-decoration: none;
`;

const NavElement = styled.li`
  cursor: pointer;
  padding: 20px 3px;
  width: 200px;
`;

export default Header;
