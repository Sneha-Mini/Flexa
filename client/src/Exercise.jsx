import React from 'react';
import './Exercise.css'; 
import BoxComponent from './BoxComponent';
import customImage1 from './assets/bmi.png';
import customImage2 from './assets/loss.png';
import customImage3 from './assets/gain.png';

function Exercise() {
    return (
        
        <div className="exercise-container" >
             <BoxComponent 
                heading="Personalized Workouts " 
                description="Calculate your BMI and access customized workouts to achieve your fitness goals. Tailored exercise plans for a healthier you, conveniently in one place." 
                buttonText="LOSE NOW"
                imageUrl={customImage1} 
             />
             <BoxComponent 
                heading="Lose Weight Smartly" 
                description="Our platform offers personalized workout plans designed specifically for weight loss. Tailored exercises and routines to help you reach your ideal weight effectively." 
                buttonText="START WORKOUT"
                imageUrl={customImage2} 
             />
             <BoxComponent 
                heading="Gain Weight Strategically" 
                description="Explore our custom workout plans for healthy weight gain. Targeted exercises and routines to help you achieve your desired physique effectively." 
                buttonText="START GAINING"
                imageUrl={customImage3} 
             />
        </div>
    );
}

export default Exercise;