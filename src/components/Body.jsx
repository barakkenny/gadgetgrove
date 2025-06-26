import { useState, useEffect, useContext } from "react";
import { gadgetData } from "../utils/data";
import { Link } from "react-router-dom";
import "./Body.css";
import Shimmer from "./Shimmer";
// import useOnlineStatus from "../utils/useOnlineStatus";
import Header from "./Header";
import { homePageGadget } from "../utils/data";
import { motion } from 'framer-motion'


function Body() {
  const [electronicItems, setElectronicItems] = useState(gadgetData);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   fetchGadgetData();
  // }, []);

  // function fetchGadgetData() {
  //  setTimeout(() => {
  //   setElectronicItems(gadgetData.slice(0, 8));
  //   setLoading(false)
  //  }, 3000); 
   
  // }


  // const onlineStatus = useOnlineStatus();
  // if(!onlineStatus) return <div>You are offline</div>

  return (
  <>
  <Header />
    <section className="body__container">
      <section className="body__content">
        <motion.section initial={{y: -100}} animate={{y: 0}} transition={{duration: 2}} className="content__one">
          <h2>Your One-Stop Electronic Market</h2>
          <p>
            Welcome to e-shop, a place where you can buy everything about
            electronics. <br/>Sale every day!
          </p>
          <button className="shop__now" type="button">Shop Now</button>
        </motion.section>
        <motion.section initial={{x: 100}} animate={{x: 0}} transition={{duration: 2}} className="content__two">
          <img className="gadget__image" src="Gadget.png" alt="electronics images" />
        </motion.section>
      </section>

      <div className="featured__products">
        <h2 className='font-bold text-4xl'>Featured Products</h2>
      </div>

      {/* <section className="items__card__container">
        {loading ? <Shimmer /> :
            electronicItems.map((electronicItem) => {
              const { id, name, image } = electronicItem;
              return (
                <Link to={`/products/${id}`} className="items__card__content" key={id}>
                  <img className="items__image" src={image} alt="" />
                  <section className="items">
                    <li className="items__text">{name}</li>
                  </section>
                </Link>
              )
            })  
          }
      
      </section> */}
      <section className="flex items-center justify-center flex-wrap px-20 gap-10 mt-14">
        {homePageGadget.map((home) => {
          const {id, img } = home
          return (
            <motion.section whileInView={{scale: [1.1, 1]}} transition={{duration: 2}} key={id} className="w-[280px] h-[300px]">
              <img src={img} alt="gadget" className="w-[280px] height-[230px] bg-[#eeeef1]" />
            </motion.section>
          )
        })}
      </section>
    </section>
    </>
  );
}

export default Body;
