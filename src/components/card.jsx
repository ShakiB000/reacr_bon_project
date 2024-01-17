import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoCloseCircleOutline } from "react-icons/io5";
import { motion } from "framer-motion"

function Card({ data, reference }) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale: 1.2}} dragElastic={1}  dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }} className=' relative flex-shrink-0 w-60 h-72 rounded-[40px] bg-zinc-900/50 px-5 py-10 overflow-hidden'>
       <FaRegFileAlt />
       <p className='text-sm font-semibold leading-tight mt-5'>{data.desc}</p>
       <div className='footer absolute  w-full   bottom-0 left-0'>
            <div className='flex items-center justify-between mb-3 py-3 px-8'>
            <h5>{data.fileSize}</h5>
            <span className='w-6 h-6  bg-zinc-600 rounded-full flex items-center justify-center'>
              
                {data.close ? <IoCloseCircleOutline /> :  <MdOutlineFileDownload size='.7em' color='#fff'/>}
            </span>
            </div>

            {
            data.tag.isOpen && (
                <div className={`tag w-full py-4 ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} flex items-center justify-center`}>
                    <h5 className='text-sm font-semibold'>{data.tag.tagTitle}</h5>
                </div>
            ) 
            }
           
       </div>
    </motion.div>
  )
}

export default Card