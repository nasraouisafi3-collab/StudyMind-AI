import { motion } from "framer-motion"


function Logo({ showName = true }) {

  return (
    <div className="
      flex
      items-center
      gap-2
    ">

      <motion.span

        initial={{
          opacity:0,
          scale:0.5
        }}

        animate={{
          opacity:1,
          scale:1
        }}

        transition={{
          duration:0.6
        }}

        className="
          text-orange-500
          text-4xl
          leading-none
          drop-shadow-[0_0_15px_rgba(249,115,22,0.35)]
        "
      >
        ✦
      </motion.span>


      {showName && (

        <span className="
          text-2xl
          font-semibold
          tracking-tight
          text-gray-900
        ">
          StudyMind
        </span>

      )}

    </div>
  )
}


export default Logo