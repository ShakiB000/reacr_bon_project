import React from 'react'
import Card from './card'
import { useRef } from 'react'
function Fourground() {
    
      const ref = useRef(null);
     const data = [
         {desc: 'Lorem ipsum dolor sit amet consectetur.',
           fileSize: '.9mb',
           close: true,
           tag: {isOpen: true, tagTitle: 'Downlode Now', tagColor: 'green'},

        },
         {desc: 'this is me',
           fileSize: '.9mb',
           close: false,
           tag: {isOpen: false, tagTitle: 'Downlode Now', tagColor: 'green'},

        },
         {desc: 'Lorem ipsum dolor sit amet consectetur.',
           fileSize: '.9mb',
           close: false,
           tag: {isOpen: true, tagTitle: 'Uplode Now', tagColor: 'blue'},

        },
        

    ];

  return (
    <div ref={ref} className='fixed z-[3] w-full h-full text-white flex gap-10 p-5 flex-wrap'>
      {data.map((item, index)=>(
        <Card data={item} reference={ref} />
      ))}
    </div>
  )
}

export default Fourground