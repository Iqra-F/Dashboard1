import React from 'react'

const Items = (props) => {
  return (
   <div className="p-6 w-full relative bg-white rounded-xl">
    <div className="flex items-center justify-between mb-6">
      <div className="text-zinc-900 font-semibold">{props.array.title}</div>
      <div className="text-right text-orange-600 text-sm font-semibold leading-tight ">View All </div>
    </div>
    <div className="flex-col w-full gap-4 inline-flex">
      {
        props.array.items.map(({img,text, percentage,color, money})=>{
          
          <div key={img} className='self-stretch w-full pb-4 bg-white border-b border-neutral-200 items-center  gap-3 inline-flex'>
           <div className="md:w-[74px] md:h-[74px] h-12 w-12 relative">
            <img src={img} className='rounded-xl' alt="" />
           </div>
           <div className="grow shrink items-center basis-0 h-12  justify-between md:items-start gap-2 flex">
            <div className="flex-col justify-start gap-2 inline-flex">
              <div className="text-zinc-900  text-sm md:text-base font-semibold">{text}</div>
            </div>
            <div className="hidden h-6 items-baseline gap-1.5 sm:flex flex-wrap">
              <div className="text-zinc-900 font-medium">{money}</div>
              <div className={` grow shrink basis-0 ${color} text-xs font-medium leading-[18px] text-center `}>{percentage}</div>
            </div>
           </div>
          </div>
        })
      }
    </div>
   </div>
  )
}

export default Items
