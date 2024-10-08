import React from 'react'

import styles from './styles.module.scss';
import PrimaryBtn from '../primary-btn';

const Footer = () => {
  return (
    <div className={styles.main}>
      <div className='flex justify-center flex-col items-center h-[95%]'>
          <div>
            <p className='text-[#ffffff7a] uppercase text-lg'>[want to chat?]</p>
          </div>
          <div className='my-2 z-50'>
            <PrimaryBtn />
          </div>
          <h1 className={styles.heading}>Eureach</h1>
      </div>

      <div id="contact" className='flex items-center p-4 h-[5%]'>
        <p>
          <span >© 2024 Eureach. All rights reserved.</span>
        </p>
      </div>
    </div>  
      
  )
}

export default Footer
