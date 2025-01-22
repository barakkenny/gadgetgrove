import { motion } from 'framer-motion'

const SamsungPhone = () => {
  return (
    <motion.section initial={{y: 100}} animate={{y: 0}} transition={{duration: 1}}>
      Samsung phone
    </motion.section>
  )
}

export default SamsungPhone
