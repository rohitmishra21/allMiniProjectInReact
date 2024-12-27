import React, { useState } from 'react'

const Calculator = () => {

  const [numValue, setNumValue] = useState("")
  function numHendler(e) {
    setNumValue(numValue + e.target.value)
  }

  const inputClass = 'bg-[#343332] h-16 text-3xl text-[#E36D70] border-2 border-black cursor-pointer w-16 font-serif text-center rounded-full';
  return (
    <div className='w-1/2 bg-slate-200 flex flex-col justify-center items-center' >
      <div className=' text-4xl uppercase font-bold text-black py-7 flex gap-7'>
        <h1>12.<span>&#x29;</span></h1>
        <h1 className=''>Calculator</h1>
      </div>
      <div className='h-[80vh] rounded-3xl p-2 w-[50vh] shadow-md shadow-black  bg-[#242424]'>
        <input type="text" value={numValue} className='w-full text-end rounded-3xl px-4  text-[#D2D2D2] bg-slate-950 py-4 text-5xl my-4' />
        <div className='flex-col flex gap-6 py-2'>
          <div className='flex gap-2 px-2 ' >
            <input className={`${inputClass} bg-[#E36D70] text-[#D2D2D2]`} onClick={() => setNumValue("")} value={"AC"} />

          </div>
          <div className='flex gap-2 justify-evenly' >
            <input className={`${inputClass}`} onClick={numHendler} value={"1"} />
            <input className={`${inputClass}`} onClick={numHendler} value={"2"} />
            <input className={`${inputClass}`} onClick={numHendler} value={"3"} />
            <input className={`${inputClass}`} onClick={numHendler} value={"/"} />
          </div>
          <div className='flex gap-2  justify-evenly' >
            <input className={`${inputClass}`} onClick={numHendler} value={"4"} />
            <input className={`${inputClass}`} onClick={numHendler} value={"5"} />
            <input className={`${inputClass}`} onClick={numHendler} value={"6"} />
            <input className={`${inputClass}`} onClick={numHendler} value={"*"} />
          </div>
          <div className='flex gap-2  justify-evenly' >
            <input className={`${inputClass}`} onClick={numHendler} value={"7"} />
            <input className={`${inputClass}`} onClick={numHendler} value={"8"} />
            <input className={`${inputClass}`} onClick={numHendler} value={"9"} />
            <input className={`${inputClass}`} onClick={numHendler} value={"-"} />
          </div>
          <div className='flex gap-2  justify-evenly' >
            <input className={`${inputClass}`} onClick={numHendler} value={"0"} />
            <input className={`${inputClass}`} onClick={numHendler} value={"."} />
            <input className={`${inputClass} bg-[#E36D70] text-[#D2D2D2] `} onClick={() => setNumValue(eval(numValue))} value={"="} />
            <input className={`${inputClass}`} onClick={numHendler} value={"+"} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Calculator
