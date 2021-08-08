import React from 'react'
import styled from 'styled-components'
import { FiChevronDown } from 'react-icons/fi'
import { AiOutlineSearch } from 'react-icons/ai'
import Button from './Button'

const NavBar = () => {
    return (
        <NavBarContainer>
            <NavBarLeft>
                <NavBarLeftItem><h4>Products</h4>
                    <FiChevronDown size="25px" style={{marginBottom: "-4px", marginLeft: "5px"}}/>
                </NavBarLeftItem>
                <NavBarLeftItem><h4>Collections</h4></NavBarLeftItem>
                <NavBarLeftItem><h4>Gifts</h4></NavBarLeftItem>
                <NavBarLeftItem><h4>Our Magazine</h4></NavBarLeftItem>
            </NavBarLeft>

            <NavBarRight>
                <NavBarRightItem>
                    <AiOutlineSearch size="25px" style={{marginBottom: "-4px", marginLeft: "5px", cursor: "pointer"}}/>
                </NavBarRightItem>
                <NavBarRightItem style={{cursor: "pointer"}}><h4>Log In</h4></NavBarRightItem>
                <NavBarRightItem><Button content="SIGN UP" style="navbar-button"/></NavBarRightItem>
            </NavBarRight>
        </NavBarContainer>
    )
}

const NavBarContainer = styled.div`
    width: 85%;
    height: 110px;
    background-color: #EEEEEE;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: 'Merriweather', serif; 
`;

const NavBarLeft = styled.ul`
    text-decoration: none;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 100%;
    width: 540px;
    color: #476072;
`;

const NavBarLeftItem = styled.li`
    display: flex;
    align-items: center;
    cursor: pointer;
`;

const NavBarRight = styled.ul`
    text-decoration: none;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 100%;
    width: 360px;
    color: #476072;
`; 

const NavBarRightItem = styled.li`
    
`;

export default NavBar

