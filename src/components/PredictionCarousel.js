import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import UserPrediction from './UserPrediction.js';

const otherPredictions = [
  { name: "Alex", prediction: "I think Rajoy will resign as president" },
  { name: "Jonny", prediction: "Catalonia will be granted independence from Spain" },
  { name: "JD", prediction: "Spain will try and block Catalonian independence" },
  { name: "Andrea", prediction: "The EU will try to prevent Catalonian secession" },
  { name: "Mitch", prediction: "Spain and Catalonia will enter into civil war" },
  { name: "Ollie", prediction: "Spain and Catalonia will enter into civil war" },
  { name: "Dennis", prediction: "I think Rajoy will resign as president" },
  { name: "Rosie", prediction: "I think Rajoy will resign as president" },
  { name: "Kerry", prediction: "The EU will try to prevent Catalonian secession" },
  { name: "Sam", prediction: "Spain and Catalonia will enter into civil war"  }
]

export default class extends React.Component {
  render() {
    return (
      <div id="innerSlide" className='uk-card uk-card-default uk-card-hover'>
        <CarouselProvider 
          naturalSlideWidth={100}
          naturalSlideHeight={50}
          totalSlides={10}>
          <Slider>
            {otherPredictions.map((otherPrediction, i) => {
              return <Slide index={i} ><UserPrediction name={otherPrediction.name} prediction={otherPrediction.prediction} /></Slide>
            })}
          </Slider>
        </CarouselProvider>
      </div>
    );
  }
}
