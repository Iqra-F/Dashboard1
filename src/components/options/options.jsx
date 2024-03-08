import React, { useState } from "react";
import {time} from '../../dates/jummy'
const Options = () => {
  let [modalCountries, setModalCountries] = useState(false);
  let [modalCities, setModalCities] = useState(false);
  let [cityArray, setCityArray] = useState([{ city: "not found" }]);
  let [changeCountry, setChangeCountry] = useState("Select Country");
  let [changeCity, setChangeCity] = useState("Cities");
  let [multiLocation, setMultiLocation] = useState(["not found"]);
  let [modalMultiLocation, setModalMultiLocation] = useState(false);
  let [changeMultiLocation, setChangeMultiLocation] = useState(false);
  let [changeWalkIn, setChangeWalkIn] = useState("walk-in");
  let [walkIn, setWalkIn] = useState(false);

  const toggleModalCountries = () => {
    setModalCountries((prev)=>{
      return !prev
    })
    setModalCities(false)
    setModalMultiLocation(false)

  };
  const SelectedCountry=(data)=>{
    setChangeCountry(data)
    setModalCountries(false)
  }
  const toggleModalCities = () => {
    setModalCities((prev)=>{
      return !prev
    })
    setModalCountries(false)
    setModalMultiLocation(false)
  };
  const SelectedCity=(data)=>{
    setChangeCity(data)
    setModalCities(false)
  }
  const toggleModalMultiLocation = () => {
    setMultiLocation((prev)=>{
      return !prev
    })
    setModalCities(false)
    setModalCountries(false)
  };
  const SelectedMultiLocation=(data)=>{
    setChangeMultiLocation(data)
    setModalCountries(false)
  }
  const toggleModalWalkIn =()=>{
    setWalkIn((prev)=>{
      return !prev
    })
  }
  const SelectedWalkIn=(data)=>{
    setChangeWalkIn(data)
    setWalkIn(false)
  }

  return (
    <div className="mb-4 justify-between items-center w-full flex-wrap inline-flex gap-9">
      <div className="w-full xl:w-auto items-center gap-3  flex flex-wrap">
        <div className="group relative grow min-w-fit shrink basis-0 h-[42px] px-3.5 flex bg-white rounded-lg border border-neutral-200">
          <div
            className="items-center gap-3 flex min-w-[120px]"
            onClick={toggleModalCountries}
          >
            <div className="grow shrink basis-0 text-zinc-900 text-sm leading-[18px]">
              {changeCountry}
            </div>
            <div>
              <i className="fa-solid fa-shevron-down "></i>
            </div>
          </div>
          <div className={`${modalCountries?'block':'hidden'} duration-300 w-full absolute overflow-hidden bg-white rounded drop-shadow-lg py-3 top-full left-0 mt-1 z-50 `}>
            {
              multiLocation.map(({country,cities},index)=>{
                return(
                  <div key={index} onclick={()=>{
                    SelectedCountry(country)
                    setCityArray(cities)
                  }}
                  className="p-2 px-3 text-zinc-900 hover:text-orange-600 duration-300 hover:bg-orange-50 text-lg hover:font-semibold"
                  >{country}</div>
                )
              })
            }
          </div>
        </div>
        <div className="group relative grow min-w-fit shrink basis-0 h-[42px] px-3.5 flex bg-white rounded-lg border border-neutral-200">
          <div
            className="items-center gap-3 w-full flex min-w-[120px]"
            onClick={toggleModalCities}
          >
            <div className="grow shrink basis-0 text-zinc-900 text-sm leading-[18px]">
              {changeCity}
            </div>
            <div>
              <i className="fa-solid fa-shevron-down "></i>
            </div>
          </div>
          <div className={`${modalCities?'block':'hidden'} duration-300 w-full absolute overflow-hidden bg-white rounded drop-shadow-lg py-3 top-full left-0 mt-1 z-50 `}>
            {
               cityArray.map(({city,multiLocation},index)=>{
                return(
                  <div key={index} onclick={()=>{
                    SelectedCity(city)
                    console.log(multiLocation)
                    setMultiLocation(multiLocation)
                  }}
                  className="p-2 px-3 text-zinc-900 hover:text-orange-600 duration-300 hover:bg-orange-50 text-lg hover:font-semibold"
                  >{city}</div>
                )
              })
            }
          </div>
        </div>
        <div className="group relative grow min-w-fit shrink basis-0 h-[42px] px-3.5 flex bg-white rounded-lg border border-neutral-200">
          <div
            className="items-center gap-3 flex min-w-[120px]"
            onClick={toggleModalMultiLocation}
          >
            <div className="grow shrink basis-0 text-zinc-900 text-sm leading-[18px]">
              {changeMultiLocation}
            </div>
            <div>
              <i className="fa-solid fa-chevron-down "></i>
            </div>
          </div>
          <div className={`${modalMultiLocation?'block':'hidden'} duration-300 w-full absolute overflow-hidden bg-white rounded drop-shadow-lg py-3 top-full left-0 mt-1 z-50 `}>
            {
             multiLocation.map((eL,index)=>{
                return(
                  <div key={index} onclick={()=>{
                    SelectedMultiLocation(eL)
                  }}
                  className="p-2 px-3 text-zinc-900 hover:text-orange-600 duration-300 hover:bg-orange-50 text-lg hover:font-semibold"
                  >{eL}</div>
                )
              })
            }
          </div>
        </div>
        <div className="group relative grow min-w-fit shrink basis-0 h-[42px] px-3.5 flex bg-white rounded-lg border border-neutral-200">
          <div
            className="items-center gap-3 flex min-w-[120px]"
            onClick={toggleModalWalkIn}
          >
            <div className="grow shrink basis-0 text-zinc-900 text-sm leading-[18px]">
              {changeWalkIn}
            </div>
            <div>
              <i className="fa-solid fa-chevron-down "></i>
            </div>
          </div>
          <div className={`${walkIn?'block':'hidden'} duration-300 w-full absolute overflow-hidden bg-white rounded drop-shadow-lg py-3 top-full left-0 mt-1 z-50 `}>
            {
             time.map((eL,index)=>{
                return(
                  <div key={index} onclick={()=>{
                    SelectedWalkIn(eL)
                  }}
                  className="p-2 px-3 text-zinc-900 hover:text-orange-600 duration-300 hover:bg-orange-50 text-lg hover:font-semibold"
                  >{eL}</div>
                )
              })
            }
          </div>
        </div>
      </div>
      <div className="h-[42px] w-full xl:w-auto px-3.5 py-3 bg-white rounded border border-neutral-200 flex items-center gap-3">
        <div className="text-orange-600 text-lg">
          <i className="fa-solid fa-calendar-days"></i>
        </div>
      <div className="grow shrink basis-0 text-zinc-900 text-xs leading-[18px]">Today: jan 16, 2024 9:50 PM- jan 17, 2024 9:50 PM
      </div>
      </div>
    </div>
  );
};

export default Options;
