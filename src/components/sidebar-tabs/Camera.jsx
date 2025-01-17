/* eslint-disable react/prop-types */
import Canon from '../camera/Canon'
import Sony from '../camera/Sony'
import Nikon from '../camera/Nikon'
import Fujifilm from '../camera/Fujifilm'
import Panasonic from '../camera/Panasonic'

const Camera = ({activePage, setActivePage}) => {
  return (
    <section>
      <div>
    <section className="mt-10 flex items-center justify-center gap-10">
      <button className={`${activePage === 'canon' ? 'bg-black text-white': 'bg-[#ebe6e6]'} py-3 px-5 rounded`} onClick={() => setActivePage('canon')}>Canon</button>
        <button className={`${activePage === 'sony' ? 'bg-black text-white': 'bg-[#ebe6e6]'} py-3 px-5 rounded`} onClick={() => setActivePage('sony')}>Sony</button>
        <button className={`${activePage === 'nikon' ? 'bg-black text-white': 'bg-[#ebe6e6]'} py-3 px-5 rounded`} onClick={() => setActivePage('nikon')}>Nikon</button>
        <button className={`${activePage === 'fujifilm' ? 'bg-black text-white': 'bg-[#ebe6e6]'} py-3 px-5 rounded`} onClick={() => setActivePage('fujifilm')}>Fujifilm</button>
        <button className={`${activePage === 'panasonic' ? 'bg-black text-white': 'bg-[#ebe6e6]'} py-3 px-5 rounded`} onClick={() => setActivePage('panasonic')}>Panasonic</button>
        </section>

        <section>
        {activePage === 'canon' && <Canon />}
        {activePage === 'sony' && <Sony />}
        {activePage === 'nikon' && <Nikon />}
        {activePage === 'Fujifilm' && <Fujifilm />}
        {activePage === 'panasonic' && <Panasonic />}
        </section>
    </div>
    </section>
  )
}

export default Camera
