import React from 'react';
import TestimonialBox from './TestimonialBox';
import "./Feedback.css"
import Image1 from './assets/feedback1.jpg';
import Image2 from './assets/feedback2.jpg';
import Image3 from './assets/feedback3.jpg';

function Feedback() {
    return (
        <div className="feedback-container">
             <TestimonialBox
                imageUrl={Image1}
                name="Sarah Johnson"
                feedback="“Flexa's personalized workout plans and expert support empowered me to surpass my fitness goals.”"
            />
             <TestimonialBox
                imageUrl={Image2}
                name="John Smith"
                feedback="“Flexa's dedicated team provided unparalleled assistance, ensuring I stayed on track and motivated.”"
            />
             <TestimonialBox
                imageUrl={Image3}
                name="Sarah Johnson"
                feedback="“Flexa's approach to fitness has transformed my lifestyle, leading to improvements in physical well-being.”"
            />
        </div>
        
    );
}

export default Feedback;
