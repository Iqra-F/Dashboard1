import React from 'react'
import Options from '../options/options'
import Cards from '../admin-sale-cards/cards'
import Line from '../charts/linechart/line'
import Bar from '../charts/bar-graph/bar'
import {dateCards} from '../../dates/jummy'
const Main = () => {
  return (
    <div className='p-6 mb-6  bg-slate-50 min-h-screen'>
      <div><Options/></div>
      <div><Cards/></div>
      <div className="flex gap-4 flex-wrap">
        <div className="p-6 w-full my-4 lg:w-[64%] bg-white rounded-xl" >
          <div className="text-zinc-900 font-medium leading-normal mb-8">
            Selected Location
          </div>
          <div className="gap-2 flex flex-wrap">
            {dateCards.map(({text, earn, percent, color})=>{
              return(
                <div className={`grow shrink-0 basis-0 h-[100px] p-3 bg-white rounded-sm shadow border-t-2 ${color} flex-col gap-4 inline-flex`}>
                  <div className="self-stretch text-zinc-500 text-xs font-medium leading-[18px]">
                    {text}
                  </div>
                  <div className="self-stretch gap-1 inline-flex  items-baseline">
                    <div className="text-zinc-900 text-xl font-semibold leading-[30px]">{earn}</div>
                    <div className="grow shrink basis-0 text-lime-500 text-xs leading-[18px]">+{percent}</div>
                  </div>
                </div>
              )
            })}
          <Line/>
          </div>
        </div>
        <div className="p-6 w-full my-4 lg:w-1/3 bg-white rounded-xl"><Bar/></div>
      </div>
    </div>
  )
}

export default Main

