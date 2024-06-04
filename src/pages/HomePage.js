import React from 'react'
import MainLayout from '../Layout/MainLayout'
import HeroSection from '../component/heroSection'
import OrderDelivery from '../component/orderDelivery'



function HomePage() {

return (
    <MainLayout>
        <HeroSection />
        <OrderDelivery />
    </MainLayout>
)
}

export default HomePage

