import React from 'react'
import styled from 'styled-components'
import Button from './Button';
import Card from './Card';
import BannerImage from "../images/banner-image.png"
import CardImage1 from "../images/card-image1.png"
import CardImage2 from "../images/card-image2.png"

const ContentContainer = () => {
    return (
        <Contents>
            <BannerContainer>
                <BannerContentBox>
                    <h1>The gift of happiness</h1>
                    <p>Show your gratitude with one of our gift sets, large and small, specially designed to spread joy to someone you love.</p>
                    <Button content="SHOP NOW" style="banner-button"/>
                </BannerContentBox>
            </BannerContainer>
            <MainContainer>
                <CardsContainer>
                    <Card 
                        header="Ready for autumn collection" 
                        subcontent="Treat yourself to some of our brand new autumn collection - all with the wonderful colours sorrounding you."
                        image={CardImage1}
                    />
                    <Card 
                        header="Ready for autumn collection" 
                        subcontent="Treat yourself to some of our brand new autumn collection - all with the wonderful colours sorrounding you."
                        image={CardImage2}
                    />
                </CardsContainer>
            </MainContainer>
        </Contents>
    )
}

const Contents = styled.div`
    width: 85%;
`;

const BannerContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 430px;
    background-image: url(${BannerImage});
    background-repeat: no-repeat;
`;

const BannerContentBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 310px;
    width: 45%;
    padding: 40px;
    border-radius: 20px;
    background-color: rgb(15, 4, 76, 0.4);
    

    h1 {
        color: #fff;
        font-family: 'Merriweather', serif;
        font-size: 42px;
        font-weight: 400;
    }

    p {
        font-family: 'Merriweather', serif;
        font-size: 16px;
        font-weight: 300;
        color: #fff;
        text-align: center;
        line-height: 30px;
    }
`;

const MainContainer = styled.div`
    height: 700px;
    background-color: #eeeeee;
    display: flex;
    justify-content: center;
`;

const CardsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 1000px;
    height: 600px;
    margin-top: 100px;
`;

export default ContentContainer
