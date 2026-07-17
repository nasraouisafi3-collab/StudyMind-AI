import { motion } from "framer-motion"
import Logo from "./Logo"


function TounsiAI(){

  return (

    <section className="
      min-h-screen
      bg-[#FCFAF7]
      px-6
      py-32
      flex
      items-center
      justify-center
    ">


      <div className="
        max-w-6xl
        w-full
        text-center
      ">


        <motion.div

          initial={{
            opacity:0,
            y:50
          }}

          whileInView={{
            opacity:1,
            y:0
          }}

          viewport={{
            once:true
          }}

        >

          <Logo showName={false}/>


          <h2 className="
            mt-8
            text-5xl
            md:text-6xl
            font-semibold
            tracking-tight
          ">

            Understand
            <br/>
            your way.

          </h2>


          <p className="
            mt-6
            text-xl
            text-gray-500
          ">

            Learn in English,
            Français,
            or Tounsi 🇹🇳

          </p>


        </motion.div>



        {/* Transformation */}


        <div className="
          mt-20
          grid
          md:grid-cols-3
          gap-8
          items-center
        ">


          {/* Original */}

          <motion.div

            whileInView={{
              opacity:1
            }}

            initial={{
              opacity:0
            }}

            className="
              bg-white
              rounded-3xl
              p-8
              shadow-lg
            "

          >

            <h3 className="
              font-semibold
              text-xl
              mb-4
            ">
              📄 Lesson
            </h3>


            <p className="
              text-gray-500
            ">

              Supply and demand
              determine market
              equilibrium.

            </p>


          </motion.div>



          {/* Spark */}


          <div className="
            text-center
          ">

            <div className="
              text-orange-500
              text-6xl
              animate-pulse
            ">
              ✦
            </div>


            <p className="
              text-gray-500
              mt-3
            ">
              AI transformation
            </p>


          </div>



          {/* Tounsi */}


          <motion.div

            initial={{
              opacity:0
            }}

            whileInView={{
              opacity:1
            }}

            viewport={{
              once:true
            }}

            className="
              bg-[#1E88A8]
              text-white
              rounded-3xl
              p-8
            "

          >

            <h3 className="
              font-semibold
              text-xl
              mb-4
            ">
              🇹🇳 Tounsi explanation
            </h3>


            <p>

              Ya3ni essou9
              ykoun stable ki
              el offre w el demande
              yetfahmou.

            </p>


          </motion.div>



        </div>


      </div>


    </section>

  )
}


export default TounsiAI