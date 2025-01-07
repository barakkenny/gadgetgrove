import {useState, useEffect} from 'react';

export const tvBrands = ()=> {
    const [tvBrands, setTvBrands] = useState(false)

    return (
        <section className='flex flex-col items-center justify-center mt-8 cursor-pointer'>
          <h3 onClick={handleTvBrand}>Television</h3>
        </section>
    )

}