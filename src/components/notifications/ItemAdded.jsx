import { IoIosCheckmarkCircle } from "react-icons/io";
import{ motion } from 'framer-motion'

const variants = {
  hidden: {opacity: 0, scale: 0.8},
  visible: {opacity: 1, scale: 1.1},
  exist: { opacity: 0, scale: 0.5},
}

const ItemAdded = () => {
  return (
    <motion.div variants={variants}  initial={'hidden'} animate={'visible'} exist={'exist'} transition={{duration: 1}} className='z-50 absolute shadow-xl top-1/3 left-2/4 transform -translate-x-1/2 -translate-y-1/4 w-[400px] h-[250px] bg-white rounded-md'>
      <div className="flex flex-col items-center justify-center">
      <div className="mt-8 text-6xl text-green-500"><IoIosCheckmarkCircle /></div>
        <h3 className='mt-8 w-1/2 text-center font-bold text-lg'>Successfully added to your shopping cart</h3>
      </div>
    </motion.div>
  )
}

export default ItemAdded
