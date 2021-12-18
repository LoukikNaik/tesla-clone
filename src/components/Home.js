import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import Section from './Section'
import ModelS from './model-s.jpg';
import Model3 from './model-3.jpg'
import ModelX from './model-x.jpg'
import ModelY from './model-y.jpg'
function Home() {
    return (
        <Container>
            <Header/>
            <Section 
                title="Model S"
                description="Order Online for Touchless Delivery"
                backgroundImg={ModelS}
                leftBtnTxt="Custom Order"
                rightBtnTxt="Existing Inventory"

            />
            <Section 
                title="Model 3"
                description="Order Online for Touchless Delivery"
                backgroundImg={Model3}
                leftBtnTxt="Custom Order"
                rightBtnTxt="Existing Inventory"
            />
            <Section 
                id="x"
                title="Model X"
                description="Order Online for Touchless Delivery"
                backgroundImg={ModelX}
                leftBtnTxt="Custom Order"
                rightBtnTxt="Existing Inventory"
            />
            <Section 
                id="Y"
                title="Model Y"
                description="Order Online for Touchless Delivery"
                backgroundImg={ModelY}
                leftBtnTxt="Custom Order"
                rightBtnTxt="Existing Inventory"
            />
            {/* <Section
                title="Lowest Cost Solar Panels in America"
                description="Money Back Guarantee"
                backgroundImg="solar-panel.jpg"
                leftBtnTxt="Order Now"
                rightBtnTxt="Learn More"
            />
            <Section
                title="Solar for New Roofs"
                description="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
                backgroundImg="solar-roof.jpg"
                leftBtnTxt="Order Now"
                rightBtnTxt="Learn More"
            />
            <Section
                title="Accessories"
                description=""
                backgroundImg="accessories.jpg"
                leftBtnTxt="Shop now"
            />  */}
        </Container>
    )
}

export default Home

const Container = styled.div`
    height: 100vh;
`