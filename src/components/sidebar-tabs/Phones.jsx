/* eslint-disable react/prop-types */

import Iphone from "../phones/Iphone"
import SamsungPhone from "../phones/SamsungPhone"
import Xiaomi from "../phones/Xiaomi"
import {motion} from 'framer-motion'
const Phones = ({activePage, setActivePage}) => {
  return (
    <div>
    <motion.section initial={{y: -100}} animate={{y: 0}} transition={{duration: 1}} className="mt-10 flex items-center justify-center gap-10">
      <button className={`${activePage === 'samsung' ? 'bg-black text-white': 'bg-[#ebe6e6]'} py-3 px-5 rounded`} onClick={() => setActivePage('samsung')}>Samsung</button>
        <button className={`${activePage === 'iphone' ? 'bg-black text-white': 'bg-[#ebe6e6]'} py-3 px-5 rounded`} onClick={() => setActivePage('iphone')}>iphone</button>
        <button className={`${activePage === 'xiaomi' ? 'bg-black text-white': 'bg-[#ebe6e6]'} py-3 px-5 rounded`} onClick={() => setActivePage('xiaomi')}>xiaomi</button>
        </motion.section>

        <section>
        {activePage === 'samsung' && <SamsungPhone />}
        {activePage === 'iphone' && <Iphone />}
        {activePage === 'xiaomi' && <Xiaomi />}
        </section>
    </div>
  )
}

export default Phones
