import React, { useContext } from 'react'
import {Context} from '../../context'
import dinein from '../../dates/imgs/dinein.png'
import walkin from '../../dates/imgs/walkin.png'
import logo from '../../dates/imgs/logo.png'
const Navbar = () => {
  let {state,dispatch} = useContext(Context)
  let toggle=()=>{
      dispatch({type:"SET_TOGGLE_NAVBAR" ,payload: !state.toggleNavbar})
  }
  return (
    <div className='z-50 fixed left-0 right-0 top-0 h-[76px] px-6 py-4 bg-white border-b border-neutral-200 justify-between items-center gap-5 inline-flex'>
      <div className='flex gap-6 items-center'> 
        <div className="border-r pr-6 border-[#e4e4e4]">
        <img src={logo} alt="" />
        </div>
         <div onClick={toggle} className="text-xl font-semibold leading-8 text-[#19191c]">
          Dashboard
         </div>
      </div>
      <div className="justify-start items-center gap-8 flex">
        <div className="hidden rounded-[50px] border border-neutral-200 justify-start items-start md-flex">
          <div className="px-8 py-2.5 hover:bg-neutral-200 rounded-l-full items-center duration-300 gap-2 flex">
            <div className="w-6 h-6 relative">
              <div className="h-5 left-[px] top-0.5 absolute">
                <img src={walkin} alt="" />
              </div>
            </div>
            <div className="text-zinc-900 text-base ">walk-in</div>
          </div>
          <div className="px-8 py-2.5 hover:bg-neutral-200 rounded-r-full border-l border-neutral-200 duration-300 items-center gap-2 flex">
            <div className="w-6 h-6 relative">
              <div className="h-5 left-[px] top-0.5 absolute">
                <img src={dinein} alt="" />
              </div>
            </div>
            <div className="text-zinc-900 text-base ">Dine-in</div>
          </div>
        </div>
        <div className="flex gap-8 items-center">
          <img className="w-11 h-11 rounded-full" src="https:via.placeholder.com/44x44" alt="" />
        </div>
      </div>
    </div>
    
  )
}

export default Navbar
