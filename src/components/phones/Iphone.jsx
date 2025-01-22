import React from 'react'
import {motion} from 'framer-motion'

const Iphone = () => {
  return (
    <motion.section initial={{y: 100}} animate={{y: 0}} transition={{duration: 1}} className=''>
      Iphone
    </motion.section>
  )
}

export default Iphone
