import React from 'react';
import Banner from '../Banner/Banner';
import Howitworks from '../HowItWorks/Howitworks';
import OurServices from '../OurServices/OurServices'
import Teams from '../ProvidedTeams/Teams';
import Features from '../Features/Features';
import BecomeMerchant from '../Merchant/BecomeMerchant';
import Reviews from '../Reviews/Reviews';
import FAQ from '../FAQ/FAQ';
const HomePage = () => {
    return (
        <div>
            <Banner></Banner>
            <Howitworks></Howitworks>
            <OurServices></OurServices>
            <Teams></Teams>
            <Features></Features>
            <BecomeMerchant></BecomeMerchant>
            <Reviews></Reviews>
            <FAQ></FAQ>
        </div>
    );
};

export default HomePage;