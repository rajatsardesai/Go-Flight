import React from 'react'

const ResultCard = ({ data, trip }) => {
    return (
        <>
        {/*//######################### Result Card ####################################*/}
            <div className="listing__card">
                <div className="make__flex space__between card__resp">
                    <div className="make__flex flight__name">
                        <img src={data.img} alt="airlines" />
                        <span>{data.flightName}</span>
                    </div>
                    <div className="make__flex timing__section">
                        <div className="make__flex flight__timings">
                            <div className="make__flex timing__options">
                                <p className="departure__timing">{data.departureTime}</p>
                                <p className="departure__city">{data.From.value}</p>
                            </div>

                            <div className="fill__section">
                                <p className="fill__line"></p>
                            </div>

                            <div className="make__flex timing__options">
                                <p className="departure__timing">{data.arrivalTime}</p>
                                <p className="departure__city">{data.To.value}</p>
                            </div>
                        </div>
                    </div>
                    {/*//######################### Condition for radio buttons ####################################*/}
                    {
                        trip === 'oneWay' ?

                            <>
                                <div className="make__flex flight__timings">
                                    <div className="make__flex timing__options">
                                        <p className="departure__city">Price</p>
                                        <p className="departure__timing">Rs. {data.price}</p>
                                    </div>
                                </div>
                            </>
                            :

                            <>
                                <div className="make__flex flight__timings">
                                    <div className="make__flex timing__options">
                                        <p className="departure__city">Return Price</p>
                                        <p className="departure__timing">Rs. {data.returnPrice}</p>
                                    </div>
                                </div>
                            </>
                    }
                </div>
            </div>
        </>
    )
}

export default ResultCard
