import React, { useEffect, useReducer } from 'react';
import './css/SearchSection.css';
import flightData from './data/flightData.json';
import ResultSection from './ResultSection';

const i = [0, 1, 2, 3, 4]

//reducer
const initialState = {
    trip: 'oneWay',
    departureCity: '',
    arrivalCity: '',
    departureDate: '2021-07-20',
    arrivalDate: '2021-07-21',
    travellers: 1,
};

const SearchSection = () => {

    const reducer = (state, action) => {
        switch (action.type) {
            case 'TRIP':
                return { ...state, trip: action.payload }
            case 'DEPARTURECITY':
                return { ...state, departureCity: action.payload }
            case 'ARRIVALCITY':
                return { ...state, arrivalCity: action.payload }
            case 'DEPARTUREDATE':
                return { ...state, departureDate: action.payload }
            case 'ARRIVALDATE':
                return { ...state, arrivalDate: action.payload }
            case 'TRAVELLERS':
                return { ...state, travellers: action.payload }
            default: return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);
    const { trip, departureCity, arrivalCity, departureDate, arrivalDate, travellers } = state;

    //button handler
    const getResult = (e) => {
        e.preventDefault();
    }

    useEffect(() => {
        //Toggle city names in select options
        i.map((values) => {
            if (departureCity == values) {
                document.getElementById('id').options[values + 1].style.display = 'none';
            }
            else {
                document.getElementById('id').options[values + 1].style.display = 'block';
            }
        })
    }, [departureCity])

    return (
        <>
            {/*############################### Header ########################################*/}
            <div className="pageHeader make__flex">
                <div className="header__container">
                    <a href="/#" className="header__logo">
                        <img src={process.env.PUBLIC_URL + "/img/logo.png"} alt="Logo" />
                    </a>
                </div>
            </div>

            {/* //########################## Search Form ###################################*/}
            <div className="minContainer">
                <div className="widget__section">
                    <div className="make__flex">
                        <div className="fair__tabs">
                            <input type="radio" value="oneWay" checked={trip === 'oneWay'} name="fair" onChange={(event) => dispatch({ type: 'TRIP', payload: event.target.value })} />
                            <label htmlFor="onewaytrip">One Way</label>
                        </div>
                        <div className="fair__tabs">
                            <input type="radio" value="twoWay" checked={trip === 'twoWay'} name="fair" onChange={(event) => dispatch({ type: 'TRIP', payload: event.target.value })} />
                            <label htmlFor="roundtrip">Round Trip</label>
                        </div>
                    </div>

                    <div className="searchSection">
                        <form >
                            <div className="searchSection__inner make__flex">
                                <div className="input__box search__city">
                                    <label htmlFor="fromCity">
                                        <span className="lbl__input">From</span>
                                        <select className="input__field" defaultValue="{departureCity}" onChange={(event) => dispatch({ type: 'DEPARTURECITY', payload: event.target.value })}>
                                            <option defaultValue>Open this select menu</option>
                                            {
                                                flightData.map((currElem, index) => {
                                                    return Object.keys(currElem).map((key) => {
                                                        return (<option value={index} key={index}>{key}</option>);
                                                    })
                                                })
                                            }
                                        </select>
                                    </label>
                                </div>
                                <div className="input__box search__city">
                                    <label htmlFor="fromCity">
                                        <span className="lbl__input">To</span>
                                        <select className="input__field" defaultValue={arrivalCity} id="id" onChange={(event) => dispatch({ type: 'ARRIVALCITY', payload: event.target.value })}>
                                            <option defaultValue>Open this select menu</option>
                                            {
                                                flightData.map((currElem, index) => {
                                                    return Object.keys(currElem).map((key) => {
                                                        return (<option value={index - 1} key={index}>{key}</option>);
                                                    })
                                                })
                                            }
                                        </select>
                                    </label>
                                </div>
                                <div className="input__box search__dates">
                                    <label htmlFor="fromCity">
                                        <span className="lbl__input">Departure</span>
                                        <input type="date" className="input__field" defaultValue={departureDate} onChange={(event) => dispatch({ type: 'DEPARTUREDATE', payload: event.target.value })}></input>
                                    </label>
                                </div>
                                <div className="input__box search__dates">
                                    <label htmlFor="fromCity">
                                        <span className="lbl__input">Return</span>
                                        <input type="date" className="input__field" defaultValue={arrivalDate} onChange={(event) => dispatch({ type: 'ARRIVALDATE', payload: event.target.value })}></input>
                                    </label>
                                </div>
                                <div className="input__box flight__travellers">
                                    <label htmlFor="fromCity">
                                        <span className="lbl__input">Traveller</span>
                                        <input type="number" className="input__field input__field_number" min="1" max="5" defaultValue={travellers} onChange={(event) => dispatch({ type: 'TRAVELLERS', payload: event.target.value })}></input>
                                    </label>
                                </div>
                            </div>
                            <p className="make__flex verticle__center">
                                <input type="submit" defaultValue="Search" className="search__btn" onClick={getResult}></input>
                            </p>
                        </form>
                    </div>
                </div>

            </div>

            {/*//######################### Result Section ####################################*/}
            <ResultSection trip={trip} departureCity={departureCity} arrivalCity={arrivalCity} />
        </>
    )
}

export default SearchSection
