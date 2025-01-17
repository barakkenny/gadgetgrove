/* eslint-disable react/prop-types */

import Apple from "../smartwatch/Apple"
import Pixel from "../smartwatch/Pixel"
import SamsungWatch from '../smartwatch/SamsungWatch'

const SmartWatch = ({activePage, setActivePage}) => {
  return (
    <section>
      <section className="mt-10 flex items-center justify-center gap-10">
      <button className={`${activePage === 'apple' ? 'bg-black text-white': 'bg-[#ebe6e6]'} py-3 px-5 rounded`} onClick={() => setActivePage('apple')}>Apple</button>
        <button className={`${activePage === 'samsung' ? 'bg-black text-white': 'bg-[#ebe6e6]'} py-3 px-5 rounded`} onClick={() => setActivePage('samsung')}>samsung</button>
        <button className={`${activePage === 'pixel' ? 'bg-black text-white': 'bg-[#ebe6e6]'} py-3 px-5 rounded`} onClick={() => setActivePage('pixel')}>Pixel</button>
        </section>

        <section>
        {activePage === 'apple' && <Apple />}
        {activePage === 'samsung' && <SamsungWatch />}
        {activePage === 'pixel' && <Pixel />}
        </section>
    </section>
  )
}

export default SmartWatch
