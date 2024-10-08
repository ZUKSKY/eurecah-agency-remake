import React from 'react'

import Link from 'next/link';

import { motion } from 'framer-motion';
import { MoveUpRight } from 'lucide-react';


const PrimaryBtn = ({title} : {title ?: string}) => {
  return (
    <div className='w-40'>
      <motion.div
                className="border-2 border-[#fafafa42] rounded-[30px] p-2 cursor-pointer"
                whileHover={{ borderColor: "#fff" }}
              >
                <Link
                  href="https://zuksky.site"
                  target="_blanck"
                  className="flex items-center w-36 gap-x-2 h-6 overflow-hidden"
                >
                  <motion.div
                    className="flex flex-col items-center h-full m-auto"
                    whileHover={{ y: -25 }}
                  >
                    <span className="text-white text-xs lg:text-sm lg:font-base uppercase">
                      {title ? title : 'GET IN TOUCH'} 
                    </span>
                    <span className="text-white text-xs lg:text-sm lg:font-base mt-2 uppercase">
                      {title ? title : 'GET IN TOUCH'} 
                    </span>
                  </motion.div>

                  <div className="-translate-x-2 -translate-y-0.5">
                    <motion.span className="text-white opacity-50">
                      <MoveUpRight width={16} height={16}/>
                    </motion.span>
                  </div>
                </Link>
              </motion.div>
    </div>
  )
}

export default PrimaryBtn;