import React from 'react'
import { dateStaff } from '../../dates/jummy'

const Staff = () => {
  return (
    <div className='w-full bg-white rounded-xl p-6'>
      <div className="flex justify-between pb-4">
        <div className="text-zinc-900 font-semibold">Staff wise report</div>
        <div className="text-right text-orange-600 text-sm font-semibold leading-tight">View All</div>
      </div>
      <div className="flex-col inline-flex w-full">
        {
          dateStaff.map(({img,name, percent,color, money})=>{
            return(
              <div key={img} className=' w-full p-3 md:px-6 py-3 bg-white, border-b border-neutral-200 items-center  gap-4 inline-flex'>
                <div className="grow shrink basis-0 h-11 items-center gap-4 flex">
                  <img src={img} alt="" />
                  <div className="text-zinc-900 font-medium">{name}</div>
                </div>
                <div className="flex-col inline-flex">
                  <div className="self-stretch text-right text-zinc-900 font-medium">{money}</div>
                  <div className={`self-stretch text-right ${color} text-xs leading-[18px]`}>{percent}</div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Staff
