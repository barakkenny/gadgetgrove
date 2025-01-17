import Asus from "../laptops/Asus"
import Hp from "../laptops/Hp"
import Lenovo from "../laptops/Lenovo"
import Macbook from "../laptops/Macbook"
import Microsoft from "../laptops/Microsoft"


// eslint-disable-next-line react/prop-types
const Laptop = ({activePage, setActivePage}) => {
  return (
    <section>
      <div>
    <section className="mt-10 flex items-center justify-center gap-10">
      <button className={`${activePage === 'macbook' ? 'bg-black text-white': 'bg-[#ebe6e6]'} py-3 px-5 rounded`} onClick={() => setActivePage('macbook')}>MacBook</button>
        <button className={`${activePage === 'hp' ? 'bg-black text-white': 'bg-[#ebe6e6]'} py-3 px-5 rounded`} onClick={() => setActivePage('hp')}>Hp</button>
        <button className={`${activePage === 'asus' ? 'bg-black text-white': 'bg-[#ebe6e6]'} py-3 px-5 rounded`} onClick={() => setActivePage('asus')}>Asus</button>
        <button className={`${activePage === 'lenovo' ? 'bg-black text-white': 'bg-[#ebe6e6]'} py-3 px-5 rounded`} onClick={() => setActivePage('lenovo')}>Lenovo</button>
        <button className={`${activePage === 'microsoft' ? 'bg-black text-white': 'bg-[#ebe6e6]'} py-3 px-5 rounded`} onClick={() => setActivePage('microsoft')}>Microsoft</button>
        </section>

        <section>
        {activePage === 'macbook' && <Macbook />}
        {activePage === 'hp' && <Hp />}
        {activePage === 'asus' && <Asus />}
        {activePage === 'lenovo' && <Lenovo />}
        {activePage === 'microsoft' && <Microsoft />}
        </section>
    </div>
    </section>
  )
}

export default Laptop
