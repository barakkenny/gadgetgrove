/* eslint-disable react/prop-types */
import Hisense from "../tv-brands/Hisense"
import Lg from "../tv-brands/Lg"
import Samsung from "../tv-brands/Samsung"
import Sony from "../tv-brands/Sony"
import Panasonic from "@/components/tv-brands/Panasonic"
import { motion } from 'framer-motion'

const Television = ({activePage, setActivePage}) => {

  return (
    <section >
      <section>
      <motion.section initial={{y: -100}} animate={{y: 0}} transition={{duration: 1}} className='mt-10 flex items-center justify-center gap-10'>
      <button className={`${activePage === 'samsung' ? 'bg-black text-white': 'bg-[#ebe6e6]'} py-3 px-5 rounded`} onClick={() => setActivePage('samsung')}>Samsung</button> 
      <button className={`${activePage === 'lg' ? 'bg-black text-white': 'bg-[#ebe6e6]'} py-3 px-5 rounded`} onClick={() => setActivePage('lg')}>LG</button>
      <button className={`${activePage === 'hisense' ? 'bg-black text-white': 'bg-[#ebe6e6]'} py-3 px-5 rounded`} onClick={() => setActivePage('hisense')}>Hisense</button>
      <button className={`${activePage === 'sony' ? 'bg-black text-white': 'bg-[#ebe6e6]'} py-3 px-5 rounded`} onClick={() => setActivePage('sony')}>Sony</button>
      <button className={`${activePage === 'panasonic' ? 'bg-black text-white': 'bg-[#ebe6e6]'} py-3 px-5 rounded`} onClick={() => setActivePage('panasonic')}>Panasonic</button> 
      </motion.section>

      </section>
  
      {activePage === 'samsung' && <Samsung />}
      {activePage === 'lg' && <Lg />}
      {activePage === 'hisense' && <Hisense />}
      {activePage === 'sony' && <Sony />}
      {activePage === 'panasonic' && <Panasonic />}
    </section>
  )
}

export default Television
