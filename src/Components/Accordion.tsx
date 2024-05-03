import { useState } from "react";
import arrowDown from '../Assets/arrowdown.svg';

export const Accordion = (props:any) => {

    const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className='py-1 border-b border-black'>
      <button className='flex justify-between w-full'
      onClick={() => setAccordionOpen(!accordionOpen)}>
        <span className='sm:text-[26px] font-medium'>
            {props.title}
        </span>
        <span className='my-3'>
        <img src={arrowDown} alt="" 
        width='16'
        height='16'
        className={`transform origin-center transition-all duration-200 ease-out ${
            accordionOpen && '!rotate-180'}`}/>
        </span>

        
      </button>
      <div className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
        accordionOpen 
                    ? 'grid-rows-[1fr] opacity-100' 
                    :'grid-rows-[0fr] opacity-0'
      }`}   >
        <div className='font-normal text-gray-700 overflow-hidden'>
            {props.answer}
        </div>
      </div>
    </div>
  )
}
