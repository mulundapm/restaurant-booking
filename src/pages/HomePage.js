import React, { useContext } from 'react'
import MainLayout from '../Layout/MainLayout'
import HeroSection from '../heroSection'
import OrderDelivery from '../orderDelivery'



function HomePage() {

return (
    <MainLayout>
        <HeroSection />
        <OrderDelivery />
    </MainLayout>
)
}

export default HomePage

