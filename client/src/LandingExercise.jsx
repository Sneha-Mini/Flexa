import React from 'react';
import './LandingExercise.css'; // Import your CSS file for styling if needed
import imageuw1 from './assets/uwUppercuts.gif';
import imageuw2 from './assets/uwBasic-Step-Touch.gif';
import imageuw3 from './assets/uwHigh-knee-march.gif';
import imageuw4 from './assets/uwJumping-Jacks.gif';
import imageuw5 from './assets/uwFront-Jabs.gif';
import imageuw6 from './assets/uwPivot-and-Reach.gif';

import imageow1 from './assets/owAirplane-Pose.gif';
import imageow2 from './assets/owAlternating-Hamstring-curls.gif';
import imageow3 from './assets/owForward-Lunges-with-Dumbbells.gif';
import imageow4 from './assets/owHigh-knee-march-pull.gif';
import imageow5 from './assets/owHip-Flexion-Extension.gif';
import imageow6 from './assets/owBurpees.gif';

import imagef1 from './assets/fAnkle-raise.gif';
import imagef2 from './assets/fDead-Lifts-with-Dumbbells.gif';
import imagef3 from './assets/fDolphin-pose.gif';
import imagef4 from './assets/fKneeling-roll-with-foam-roller.gif';
import imagef5 from './assets/fLunge-Twist.gif';
import imagef6 from './assets/fStanding-Abduction.gif';


const LandingExercise = ({ bmi }) => {
  const renderExerciseData = () => {
    let exerciseData = [];
    if (bmi < 18.5) {
      // Render exercise data for underweight
      exerciseData = [
        { heading: "Uppercuts", content: "3sets.30mins", image: imageuw1 },
        { heading: "Basic Step Touch", content: "6sets.1hr", image: imageuw2 },
        { heading: "High knee march", content: "4sets.40mins", image: imageuw3 },
        { heading: "Jumping Jacks", content: "3sets.30mins", image: imageuw4 },
        { heading: "Front Jabs", content: "4sets.40mins", image: imageuw5 },
        { heading: "Pivot and Reach", content: "6sets.1hr", image: imageuw6 }
      ];
    } else if (bmi >= 18.5 && bmi < 25) {
      // Render exercise data for normal weight
      exerciseData = [
        { heading: "Ankle raise", content: "3sets.30mins", image: imagef1 },
        { heading: "Dead Lifts with Dumbbells", content: "4sets.40mins", image: imagef2 },
        { heading: "Dolphin pose", content: "6sets.1hr", image: imagef3 },
        { heading: "Kneeling roll with foam roller", content: "3sets.30mins", image: imagef4 },
        { heading: "Lunge Twist", content: "6sets.1hr", image: imagef5 },
        { heading: "Standing Abduction", content: "4sets.40mins", image: imagef6 }
      ];
    } else if (bmi >= 25 && bmi < 30) {
      // Render exercise data for overweight
      exerciseData = [
        { heading: "Airplane Pose", content: "3sets.30mins", image: imageow1 },
        { heading: "Alternating Hamstring curls", content: "6sets.1hr", image: imageow2 },
        { heading: "Forward Lunges with Dumbbells", content: "4sets.40mins", image: imageow3 },
        { heading: "High knee march pull", content: "3sets.30mins", image: imageow4 },
        { heading: "Hip Flexion Extension", content: "6sets.1hr", image: imageow5 },
        { heading: "Burpees", content: "4sets.40mins", image: imageow6 }
       
      ];
    } else {
      console.log("error")
    }

    return exerciseData.map((exercise, index) => (
      <div key={index} className={`exercise-box color${index % 3 + 1}`}>
        <div className="left">
          <h3 className="box-heading">{exercise.heading}</h3>
          <p className="box-content">{exercise.content}</p>
        </div>
        <div className="right">
          <img src={exercise.image} alt={`Exercise ${index + 1} GIF`} className="gif" />
        </div>
      </div>
    ));
  };

  return (
    <section id="exercise" className="landing-exercise">
      <h2 className="exercise-heading">Exercise</h2>
      <div className="exercise-container1">
        {renderExerciseData()}
      </div>
    </section>
  );
};

export default LandingExercise;
