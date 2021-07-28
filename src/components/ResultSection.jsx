import React, { useState } from 'react';
import './css/ResultSection.css';
import flightData from './data/flightData.json';
import ResultCard from './subComponent/ResultCard';

const ResultSection = (props) => {

    //props
    const { trip, departureCity, arrivalCity } = props;

    //slider state
    const [slider, setSlider] = useState({
        max: 100,
        min: 0,
        value: 0
    });

    return (
        <>
            {/*//######################### Slider ####################################*/}
            <div className="slideContainer">
                <input type="range" min={slider.min} max={slider.max} value={slider.value} onChange={(e) => setSlider({ value: e.target.value })} className="slider" />
                <p>Rs. {slider.value * 200}</p>
            </div>

            {/*//######################### Result Section ####################################*/}
            <div className="flightBody">
                <div className="flights__container">
                    <div className="listingcard__wrap">
                        {
                            (departureCity && arrivalCity) === '' ? <>
                                <div className="listing__card">
                                    <div className="make__flex space__between">
                                        <div className="make__flex flight__name">
                                            <span>No data found</span>
                                        </div>
                                    </div>
                                </div>
                            </> :
                                Object.values(flightData[departureCity]).map((dept) => {
                                    return dept.map((arr, index) => {
                                        return ((arrivalCity === Object.keys(arr)[0]) ?
                                            arr[index].map((data,index) => {
                                                return (
                                                    slider.value === 0 ?
                                                        <ResultCard data={data} trip={trip} key={index} />
                                                        :
                                                        (data.price) < (slider.value * 200) ?
                                                            <ResultCard data={data} trip={trip} key={index} />
                                                            :
                                                            null
                                                )
                                            })
                                            : null)
                                    })

                                })

                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default ResultSection
