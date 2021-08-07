import React from 'react'
import styled from 'styled-components'
import Button from './Button'

const Card = ({ header, subcontent, image }) => {
    return (
        <CardContainer>
            <CardContainerActions>
                <h2>{header}</h2>
                <p>{subcontent}</p>
                <Button content="Purchase Now" style="card-button"/>
            </CardContainerActions>
            <img src={image}/>
        </CardContainer>
    )
}

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 600px;
    width: 480px;
    background-color: #fff;

    img {
        width: inherit;
    }
`;

const CardContainerActions = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    padding: 30px 40px;
    text-align: center;

    h2 {
        font-family: 'Merriweather', serif;
        font-size: 30px;
    }

    p {
        font-family: 'Merriweather', serif;
        font-size: 14px;
        line-height: 20px;
    }
`;

export default Card
