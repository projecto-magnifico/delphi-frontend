import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import UserPrediction from './UserPrediction.js';

const users = ['Alex', 'Jonny', 'JD', 'Andres', 'Mitch', 'Donald Duck']

export default class extends React.Component {
    render() {
        return (
            <div id="innerSlide">
                <CarouselProvider
                    naturalSlideWidth={100}
                    naturalSlideHeight={50}
                    totalSlides={10}>
                    <Slider>
                        {this.props.answers.map((answer, i) => {
                            return <Slide index={i} ><UserPrediction name={users[i]} prediction={answer.proto} /></Slide>
                        })}
                    </Slider>
                    <ButtonBack>Back</ButtonBack>
                    <ButtonNext>Next</ButtonNext>
                </CarouselProvider>
            </div>
        );
    }
}
