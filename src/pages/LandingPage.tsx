import React from 'react';
import Hero from '../components/home/Hero';
import Review from '../components/home/Review';
import Features from '../components/home/Features';


export default function LandingPage() {

    return (
        <React.Fragment>
           <Hero/>
           <Features/>
           <Review/>
        </React.Fragment>
    )
}