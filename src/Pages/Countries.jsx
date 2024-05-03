import { Selector } from "../Components/Selector"
import { Country, State, City} from 'country-state-city';
import React,{ useEffect, useState } from "react";


export const Countries = () => {

    let countryData = Country.getAllCountries();
    const [stateData, setStateData] = React.useState();
    const [cityData, setCityData] = React.useState();


    const [country, setCountry] = useState(countryData[0]);
    const [state, setState] = useState();
    const [city, setCity] = useState();

    useEffect(()=>{
        function fetchData(){
            setStateData(State.getStatesOfCountry(country?.isoCode));
        }
        fetchData()
    },[country])

    useEffect(()=>{
        function fetchData(){
            setCityData(City.getCitiesOfState(country?.isoCode,state?.isoCode));
        }
         fetchData()
    },[country,state])


    useEffect(()=>{
        stateData && setState(stateData[0])
    },[stateData])


    useEffect(()=>{
        cityData && setCity(cityData[0])
    },[cityData])

  return (
    <div className='min-h-screen px-3 grid place-items-center
    selection-bg-teal-500 bg-gradient-to-t from-teal-400 to-teal-500'>
        <div className='text-center'>
            <h2 className='text-2xl font-bold text-teal-900 mb-8'>
                Country, State and City Selection
            </h2>
            <div className='mx-auto flex flex-col xl:flex-row bg-teal-300 rounded-lg gap-8 py-8 px-8'>
                <div className=" mx-auto">
                    <p className="text-teal-800 font-semibold xl:text-left">Country:</p>
                <Selector data={countryData} selected={country} setSelected={setCountry}/>
                </div>
                {state && (
                <div className=" mx-auto">
                    <p className="text-teal-800 font-semibold xl:text-left">State:</p>
                    <Selector data={stateData} selected={state} setSelected={setState}/>
                </div>
                 )}
                 {city && (
                    <div className=" mx-auto">
                        <p className="text-teal-800 font-semibold xl:text-left">City:</p>
                        <Selector data={cityData} selected={city} setSelected={setCity}/>
                    </div>
                 )}

  
            </div>
        </div>
    </div>
  )
}

