import React from 'react'
import {cards} from '../../dates/jummy'
const Cards = () => {
  return (
    <div className="w-full inline-flex flex-wrap xl:flex-nowrap gap-4">
      {cards.map(({text, icon, money, percent , percentColor, trend, iconColor},index)=>{
       return ( <div key={index} className="min-w-[220px] xl:w-full grow shrink basis-0 rounded-xl drop-shadow gap-4 bg-white flex">
          <div className="grow shrink basis-0 rounded-xl bg-white flex-col inline-flex">
            <div className="w-full h-[164px] px-6 pt-6 pb-4 rounded-xl bg-white shadow gap-6 flex flex-col">
              <div className="self-stretch items-center gap-3 inline-flex">
                <i className={`${icon} ${iconColor}`}></i>
                <div className="text-zinc-900 font-medium">{text}</div>
              </div>
              <div className="self-stretch h-[72px] flex-col justify-center gap-1 flex">
                <div className="text-[40px] text-zinc-900 font-semibold leading-[48px]">{money}</div>
                <div className="h-5 relative flex gap-2">
                  <div className={`${percentColor} flex items-center gap-1`}>
                    <i className={`${trend} font-semibold leading-tight text-sm`}></i>
                    <div className="text-sm font-semibold leading-tight">{percent}</div>
                  </div>
                  <div className="text-zinc-500 text-xs font-medium leading-[18px] "> for last month</div>
                </div>
              </div>
            </div>
            <div className="w-full px-6 py-4 justify-between items-center gap-4 inline-flex">
              <p className="grow text-orange-600 text-sm font-semibold">View Details</p>
              <i className="fa-solid fa-chevron-right text-orange-600"></i>
            </div>
          </div>
        </div>)
      })}
    </div>
  )
}

export default Cards
