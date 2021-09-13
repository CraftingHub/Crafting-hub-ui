import React from 'react';
import Hero from '../components/home/Hero';
import Footer from '../components/home/Footer';
import Review from '../components/home/Review';


export default function LandingPage() {

    return (
        <React.Fragment>
           <Hero/>
           <Review/>
           <Footer/>
        </React.Fragment>
    )
}