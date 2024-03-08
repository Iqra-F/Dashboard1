
import React from 'react'
import Options from '../options/options';
import  Column  from '../charts/marketing-bar/columns'
import  Pie  from '../charts/marketing-pie/pie'
import  Items  from '../admin-items/items'
import Staff from '../staff/staff'

// import { Column } from '../charts/marketing-bar/columns'
// import { Pie } from '../charts/marketing-pie/pie'
// import { Items } from '../admin-items/items'
// import {Staff} from '../staff/staff'
import { topSellingAndGrossingItems } from '../../dates/jummy'


const Marketing = () => {
  return (
    <div className='p-6 min-h-screen'>
     <Options/>
     <div className="flex mb-6 gap-6 flex-wrap lg:flex-nowrap justify-between">
      <div className="w-full"><Column/></div>
      <div className="w-full"><Pie/></div>
     </div>
     <div className="w-full gap-6 lg:flex-nowrap flex-wrap flex justify-between">
      {
        topSellingAndGrossingItems.map((date =>{
         return <Items key={date} array={date}/>
        }))
}
     </div>
     <div className="w-full my-6">
      <Staff/>
     </div>
    </div>
  )
}

export default Marketing
