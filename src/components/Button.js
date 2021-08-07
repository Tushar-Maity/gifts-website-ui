import React from 'react'
import styled from 'styled-components'

const STYLE = ['navbar-button', 'banner-button', 'card-button']

const Button = ({ content, style }) => {

    const checkStatusStyles = STYLE.includes(style) ? style : STYLE[0];

    return (
        <ButtonContainer className={`${checkStatusStyles}`}>
            {content}
        </ButtonContainer>
    )
}

const ButtonContainer = styled.button.attrs(props => ({
    className: props.className
}))`
    border: none;
    outline: none;
    border-radius: 20px;
    cursor: pointer;
    
    &.navbar-button {
        height: 40px;
        width: 110px;
        color: #fff;
        background-image: linear-gradient(to right bottom, #d65685, #fa6930e8);
    }

    &.banner-button {
        height: 43px;
        width: 130px;
        color: #fff;
        background-image: linear-gradient(to right bottom, #d65685, #fa6930e8);
    }

    &.card-button {
        height: 40px;
        width: 170px;
        background-color: #fff;
        border: 1.7px solid #262A53;
        font-size: 16px;
        transition: all .3s;
        font-weight: bold;
        color: #262A53;

        &:hover {
            background-color: #262A53;
            color: #fff;
        }
    }
`;

export default Button
