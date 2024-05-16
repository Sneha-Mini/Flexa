import React from 'react';
import Button from './Button'; 
import './Home.css'; 
import image from './assets/image1.png';
import { Link} from 'react-router-dom';

function Home() {
  return (
    <div id="home">
    <section className="home-section">
      <div className="left-column">
      <h1 className="home-heading"><p className='smallheading'>Flexa</p>Achieve<br/>Your Goals With<br/>Flexa World</h1>
        <p className="paragraph">
          Empower your fitness journey with Flexa World. Achieve your goals, redefine your limits
        </p>
        <Link to="/LoginPage">
        <Button text="GET STARTED" />
      </Link>
      </div>
      <div className="right-column2" >
        <img src={image} alt="Fitness" className="home-image" /> 
      </div>
    </section>
    </div>
  );
};


export default Home;
