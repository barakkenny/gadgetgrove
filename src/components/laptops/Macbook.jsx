import { motion } from 'framer-motion';

const Macbook = () => {
  return (
    <motion.section initial={{y: 100}} animate={{y: 0}} transition={{duration: 1}}>
          Macbook
    </motion.section>
  )
}

export default Macbook
