import { samsungTv } from "@/utils/data";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion'

const Samsung = () => {
  return (
    <motion.section initial={{y: 100}} animate={{y: 0}} transition={{duration: 1}} className="mt-10 flex flex-wrap items-center justify-center gap-10">
      {samsungTv.map((sam) => {
        const { id, name, image } = sam;
        return (
          <section className="w-[280px] h-[300px]" key={id}>
            <img className="w-[280px] h-[230px] bg-[#eeeef1]" src={image} alt="samsung-tv" />
            <section className="">
              <Link to={`/samsung-tv/${id}`}>{name}</Link>
            </section>
          </section>
        );
      })}
    </motion.section>
  );
};

export default Samsung;
